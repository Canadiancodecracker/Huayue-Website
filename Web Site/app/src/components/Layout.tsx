import { useState } from 'react'
import { href, type Lang } from '../lib/router'

const NAV = {
  en: [
    { page: 'home', label: 'Home' },
    { page: 'product', label: 'Calcium Cyanamide' },
    { page: 'applications', label: 'Applications' },
    { page: 'manufacturing', label: 'Manufacturing' },
    { page: 'quality', label: 'Quality' },
    { page: 'resources', label: 'Resources' },
    { page: 'about', label: 'About Huayue' },
    { page: 'contact', label: 'Contact' },
  ],
  zh: [
    { page: 'home', label: '首页' },
    { page: 'product', label: '氰氨化钙' },
    { page: 'applications', label: '应用领域' },
    { page: 'manufacturing', label: '智能制造' },
    { page: 'quality', label: '质量管理' },
    { page: 'resources', label: '技术资料' },
    { page: 'about', label: '关于华岳' },
    { page: 'contact', label: '联系我们' },
  ],
}

const T = {
  en: {
    rfq: 'Request a Quote',
    tagline: 'Calcium Cyanamide Manufacturer',
    legal: 'Shizuishan Huayue New Material Technology Co., Ltd.',
    address: 'East of Xingyuan Road, Hebin Industrial Park, Huinong District, Shizuishan City, Ningxia, China',
    productCol: 'Product',
    companyCol: 'Company',
    docsCol: 'Documents',
    contactCol: 'Contact',
    tds: 'Technical Data Sheet (TDS)',
    sds: 'Safety Data Sheet (SDS)',
    specNote: 'Product standard HG/T 5922-2021 · CAS 156-62-7 · UN 1403 Class 4.3 PG III',
    copyright: '© 2026 Shizuishan Huayue New Material Technology Co., Ltd. All rights reserved.',
    renderingNote: 'Images marked “rendering” are architectural renderings of the Huayue project.',
  },
  zh: {
    rfq: '询价',
    tagline: '氰氨化钙（石灰氮）制造商',
    legal: '石嘴山市华岳新材料科技有限公司',
    address: '中国宁夏石嘴山市惠农区河滨工业园区兴园路东',
    productCol: '产品',
    companyCol: '公司',
    docsCol: '技术资料',
    contactCol: '联系方式',
    tds: '技术数据表（TDS）',
    sds: '安全技术说明书（SDS）',
    specNote: '产品标准 HG/T 5922-2021 · CAS 156-62-7 · UN 1403 第 4.3 类 包装类别 Ⅲ',
    copyright: '© 2026 石嘴山市华岳新材料科技有限公司 版权所有',
    renderingNote: '标注“效果图”的图片为华岳项目建筑效果图。',
  },
}

function Logo({ lang }: { lang: Lang }) {
  return (
    <a href={href(lang, 'home')} className="flex items-center gap-3 group">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0E9594] to-[#0B2B4B] flex items-center justify-center text-white font-bold text-lg tracking-tight">
        HY
      </div>
      <div className="leading-tight">
        <div className="font-bold text-[#0B2B4B] text-lg tracking-wide group-hover:text-[#0E9594] transition-colors">
          HUAYUE
        </div>
        <div className="text-[11px] text-slate-500 tracking-wider">
          {lang === 'zh' ? '华岳新材料 · 氰氨化钙制造' : 'Calcium Cyanamide Manufacturer'}
        </div>
      </div>
    </a>
  )
}

export function Header({ lang, page }: { lang: Lang; page: string }) {
  const [open, setOpen] = useState(false)
  const nav = NAV[lang]
  const t = T[lang]
  const other: Lang = lang === 'en' ? 'zh' : 'en'
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Logo lang={lang} />
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <a
                key={n.page}
                href={href(lang, n.page)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  page === n.page
                    ? 'text-[#0E9594] bg-teal-50'
                    : 'text-slate-700 hover:text-[#0B2B4B] hover:bg-slate-100'
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={href(other, page)}
              className="text-sm font-medium text-slate-600 hover:text-[#0E9594] border border-slate-300 rounded-md px-3 py-1.5 transition-colors"
            >
              {lang === 'en' ? '中文' : 'English'}
            </a>
            <a
              href={href(lang, 'contact')}
              className="bg-[#0B2B4B] hover:bg-[#0E9594] text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
            >
              {t.rfq}
            </a>
          </div>
          <button
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {nav.map((n) => (
              <a
                key={n.page}
                href={href(lang, n.page)}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  page === n.page ? 'text-[#0E9594] bg-teal-50' : 'text-slate-700'
                }`}
              >
                {n.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a
                href={href(other, page)}
                className="flex-1 text-center text-sm font-medium text-slate-600 border border-slate-300 rounded-md px-3 py-2"
              >
                {lang === 'en' ? '中文' : 'English'}
              </a>
              <a
                href={href(lang, 'contact')}
                className="flex-1 text-center bg-[#0B2B4B] text-white text-sm font-semibold px-4 py-2 rounded-md"
              >
                {t.rfq}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export function Footer({ lang }: { lang: Lang }) {
  const t = T[lang]
  return (
    <footer className="bg-[#071E36] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0E9594] to-[#1B4A76] flex items-center justify-center text-white font-bold">
                HY
              </div>
              <div>
                <div className="text-white font-bold tracking-wide">HUAYUE</div>
                <div className="text-xs text-slate-400">{t.tagline}</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">{t.legal}</p>
            <p className="text-sm text-slate-400 leading-relaxed mt-2">{t.address}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">{t.productCol}</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-[#2DD4BF] transition-colors" href={href(lang, 'product')}>{lang === 'zh' ? '氰氨化钙（石灰氮）' : 'Calcium Cyanamide'}</a></li>
              <li><a className="hover:text-[#2DD4BF] transition-colors" href={href(lang, 'applications')}>{lang === 'zh' ? '应用领域' : 'Applications'}</a></li>
              <li><a className="hover:text-[#2DD4BF] transition-colors" href={href(lang, 'manufacturing')}>{lang === 'zh' ? '智能制造' : 'Manufacturing'}</a></li>
              <li><a className="hover:text-[#2DD4BF] transition-colors" href={href(lang, 'quality')}>{lang === 'zh' ? '质量管理' : 'Quality'}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">{t.docsCol}</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-[#2DD4BF] transition-colors" href="docs/Huayue-Calcium-Cyanamide-TDS-HY-TDS-CCN-001.pdf" target="_blank" rel="noreferrer">{t.tds}</a></li>
              <li><a className="hover:text-[#2DD4BF] transition-colors" href="docs/Huayue-Calcium-Cyanamide-SDS-HY-SDS-CCN-001.pdf" target="_blank" rel="noreferrer">{t.sds}</a></li>
              <li><a className="hover:text-[#2DD4BF] transition-colors" href={href(lang, 'resources')}>{lang === 'zh' ? '资料中心' : 'Resource Centre'}</a></li>
              <li><a className="hover:text-[#2DD4BF] transition-colors" href={href(lang, 'about')}>{lang === 'zh' ? '关于华岳' : 'About Huayue'}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">{t.contactCol}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>sales@huayue-nm.com</li>
              <li>tech@huayue-nm.com</li>
              <li className="pt-2"><a className="text-[#2DD4BF] hover:underline" href={href(lang, 'contact')}>{lang === 'zh' ? '询价 / 申请样品 →' : 'Request a Quote / Sample →'}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700/60 mt-12 pt-6 text-xs text-slate-500 space-y-2">
          <p>{t.specNote}</p>
          <p>{t.renderingNote}</p>
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
