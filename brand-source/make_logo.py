#!/usr/bin/env python3
import os, sys
import numpy as np
from PIL import Image
import potrace, cairosvg

SRC = sys.argv[1]
OUT = sys.argv[2] if len(sys.argv) > 2 else "hy_out"
BLUE, GREEN = "#05A5FF", "#45C209"
os.makedirs(OUT, exist_ok=True)

a = np.asarray(Image.open(SRC).convert("RGB")).astype(float)
alpha = 255.0 - a.min(axis=2)
alpha[alpha <= 14] = 0
af = np.clip(alpha / 255.0, 1e-6, 1.0)
rgb = np.clip((a - 255.0 * (1.0 - af[..., None])) / af[..., None], 0, 255)
ink = alpha > 96
if not ink.any():
    sys.exit("未找到图形，请确认原图是白底彩色 logo")

blue  = ink & (rgb[..., 2] >= rgb[..., 1])
green = ink & (rgb[..., 2] <  rgb[..., 1])
ys, xs = np.where(ink)
x0, x1, y0, y1 = int(xs.min()), int(xs.max()) + 1, int(ys.min()), int(ys.max()) + 1
W, H = x1 - x0, y1 - y0

def runs(vec):
    out, s = [], None
    for i, v in enumerate(vec):
        if v > 0 and s is None: s = i
        if v == 0 and s is not None: out.append((s, i)); s = None
    if s is not None: out.append((s, len(vec)))
    return out

sub = ink[y0:y1, x0:x1]
bands = runs(sub.sum(axis=1))
chars = max(bands, key=lambda b: sub[b[0]:b[1]].sum())
after = [b for b in bands if b[0] >= chars[1]]
pinyin = after[0] if after and (after[0][1]-after[0][0]) < (chars[1]-chars[0])*0.5 else None

pad = max(2, round(H * 0.008))
wm_y0 = max(0, chars[0] - pad)
wm_y1 = min(H, (pinyin[1] if pinyin else chars[1]) + pad)
wm_h = wm_y1 - wm_y0

cols = runs(sub[chars[0]:chars[1]].sum(axis=0))
gx0, gx1 = cols[0]
gw, (gy0, gy1) = gx1 - gx0, chars
gh = gy1 - gy0
side = max(gw, gh)
gcx, gcy = gx0 + gw/2, gy0 + gh/2

def trace(mask):
    bmp = potrace.Bitmap((~mask[y0:y1, x0:x1]).astype(bool))
    d = []
    for c in bmp.trace(turdsize=3, alphamax=1.0, opticurve=True, opttolerance=0.2):
        p = c.start_point
        d.append(f"M{p.x:.2f},{p.y:.2f}")
        for s in c:
            if s.is_corner:
                d.append(f"L{s.c.x:.2f},{s.c.y:.2f}L{s.end_point.x:.2f},{s.end_point.y:.2f}")
            else:
                d.append(f"C{s.c1.x:.2f},{s.c1.y:.2f} {s.c2.x:.2f},{s.c2.y:.2f}"
                         f" {s.end_point.x:.2f},{s.end_point.y:.2f}")
        d.append("Z")
    return "".join(d)

BD, GD = trace(blue), trace(green)
PATHS = (f'<path fill="{BLUE}" fill-rule="evenodd" d="{BD}"/>'
         f'<path fill="{GREEN}" fill-rule="evenodd" d="{GD}"/>')
HDR = '<svg xmlns="http://www.w3.org/2000/svg"'

open(f"{OUT}/logo-huayue-full.svg","w").write(
    f'{HDR} viewBox="0 0 {W} {H}" role="img" aria-label="华岳新材料">'
    f'<title>华岳新材料</title>{PATHS}</svg>')
open(f"{OUT}/logo-huayue-wordmark.svg","w").write(
    f'{HDR} viewBox="0 {wm_y0} {W} {wm_h}" role="img" aria-label="华岳新材料">'
    f'<title>华岳新材料</title>{PATHS}</svg>')

inner, canvas, radius = 300.0, 512.0, 112.0
sc = inner / side
tx, ty = canvas/2 - gcx*sc, canvas/2 - gcy*sc
open(f"{OUT}/icon-huayue.svg","w").write(
    f'{HDR} viewBox="0 0 512 512" role="img" aria-label="华岳新材料">'
    f'<defs><linearGradient id="hy" x1="0" y1="0" x2="1" y2="1">'
    f'<stop offset="0" stop-color="{BLUE}"/><stop offset="1" stop-color="{GREEN}"/>'
    f'</linearGradient><clipPath id="hyc">'
    f'<rect x="{gx0}" y="{gy0}" width="{gw}" height="{gh}"/></clipPath></defs>'
    f'<rect width="512" height="512" rx="{radius:.0f}" fill="url(#hy)"/>'
    f'<g transform="translate({tx:.3f},{ty:.3f}) scale({sc:.5f})">'
    f'<g clip-path="url(#hyc)">'
    f'<path fill="#fff" fill-rule="evenodd" d="{BD}"/></g></g></svg>')

for n in (180, 512):
    cairosvg.svg2png(url=f"{OUT}/icon-huayue.svg",
                     write_to=f"{OUT}/icon-{n}.png", output_width=n, output_height=n)
Image.open(f"{OUT}/icon-512.png").save(f"{OUT}/favicon.ico", sizes=[(16,16),(32,32),(48,48)])

print(f"裁切后 {W}x{H} / 字标区 y={wm_y0}..{wm_y1} / 「华」{gw}x{gh}")
print("输出:", os.path.abspath(OUT))
