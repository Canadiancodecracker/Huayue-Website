import { type Lang } from '../lib/router'
import { CtaBand, DocCard, SectionHead, SpecTable } from '../components/Shared'

const C = {
  en: {
    kicker: 'Quality',
    title: 'Released against the standard, verified by third parties',
    sub: 'Quality at Huayue is a controlled chain: raw-material control, process control, laboratory testing, finished-product release and traceability.',
    sysKicker: 'QC System',
    sysTitle: 'The quality chain',
    sysSteps: [
      { t: 'Raw material control', d: 'Incoming carbide and auxiliary materials are inspected against acceptance criteria before use.' },
      { t: 'Process control', d: 'Furnace reaction conditions and milling / classification are monitored to hold nitrogen content and particle size within control limits.' },
      { t: 'Laboratory testing', d: 'Available nitrogen, calcium carbide and sieve residue are tested per HG/T 5922-2021 methods.' },
      { t: 'Finished-product release', d: 'No batch ships without passing the full specification. Release records are retained per batch.' },
      { t: 'Traceability', d: 'Batch numbers link each shipment to its production date, test results and Certificate of Analysis.' },
    ],
    thirdKicker: 'Third-party Verification',
    thirdTitle: 'Independent test report',
    thirdBody:
      'Typical batch performance is verified by the Ningxia Institute of Metrology, Quality Inspection and Testing.',
    thirdHead: ['Item', 'Requirement', 'Result', 'Verdict'],
    thirdRows: [
      ['Available nitrogen', '≥ 21.5 %', '22.1 %', 'Pass'],
      ['Calcium carbide', '≤ 0.2 %', '0.2 %', 'Pass'],
      ['Sieve residue (180 μm)', '≤ 10 %', '3 %', 'Pass'],
    ],
    thirdMeta: [
      ['Report No.', '24092633'],
      ['Issued by', 'Ningxia Institute of Metrology, Quality Inspection and Testing'],
      ['Production date', '2024-06-07'],
      ['Test period', '2024-06-26 to 2024-07-01'],
      ['Sample grade', 'Superior'],
      ['Conclusion', 'All tested items conform to the standard'],
    ],
    rdKicker: 'R&D Centre',
    rdTitle: 'R&D and laboratory capability',
    rdBody:
      'The Huayue R&D Centre supports product development across the NCN chain and application testing with customers. The image shown is the approved architectural rendering; real laboratory photography will replace it as facilities are completed.',
    rdNote: 'R&D Centre — architectural rendering',
    docsKicker: 'Documentation',
    docsTitle: 'Controlled documents',
    docsBody: 'TDS and SDS are maintained as controlled, dated documents and published without a registration wall.',
  },
  zh: {
    kicker: '质量管理',
    title: '按标准放行，经第三方验证',
    sub: '华岳的质量管理是一条受控链：原料控制、过程控制、实验室检测、成品放行与可追溯。',
    sysKicker: '质量体系',
    sysTitle: '质量控制链',
    sysSteps: [
      { t: '原料控制', d: '进厂电石及辅助材料按验收标准检验合格后投入使用。' },
      { t: '过程控制', d: '监控氮化炉反应条件与粉碎分级工艺，使氮含量与粒度稳定在控制限内。' },
      { t: '实验室检测', d: '按 HG/T 5922-2021 方法检测有效氮、碳化钙含量与筛余物。' },
      { t: '成品放行', d: '任何批次未通过全项规格检验不得出厂，放行记录按批留存。' },
      { t: '可追溯', d: '批号将每批货物与生产日期、检验结果及检验报告（COA）一一对应。' },
    ],
    thirdKicker: '第三方验证',
    thirdTitle: '独立检验报告',
    thirdBody: '典型批次性能经宁夏计量质量检验检测研究院验证。',
    thirdHead: ['项目', '技术要求', '实测值', '判定'],
    thirdRows: [
      ['有效氮含量', '≥ 21.5 %', '22.1 %', '合格'],
      ['碳化钙含量', '≤ 0.2 %', '0.2 %', '合格'],
      ['筛余物（180 μm）', '≤ 10 %', '3 %', '合格'],
    ],
    thirdMeta: [
      ['报告编号', '24092633'],
      ['检验机构', '宁夏计量质量检验检测研究院'],
      ['生产日期', '2024-06-07'],
      ['检验日期', '2024-06-26 至 2024-07-01'],
      ['样品等级', '优等品'],
      ['检验结论', '该样品所检项目符合标准要求'],
    ],
    rdKicker: '研发中心',
    rdTitle: '研发与实验室能力',
    rdBody: '华岳研发中心支持 NCN 产业链的产品开发及与客户的应用测试。所示图片为经批准的建筑效果图；设施建成后将替换为真实实验室照片。',
    rdNote: '研发中心 — 建筑效果图',
    docsKicker: '受控文件',
    docsTitle: '受控技术文件',
    docsBody: 'TDS 与 SDS 作为受控、带日期的文件维护并公开发布，不设注册门槛。',
  },
}

export default function Quality({ lang }: { lang: Lang }) {
  const t = C[lang]
  return (
    <div>
      <section className="bg-gradient-to-br from-[#071E36] to-[#0B2B4B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-[#2DD4BF] text-sm font-semibold tracking-[0.2em] uppercase mb-4">{t.kicker}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl">{t.title}</h1>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed max-w-3xl">{t.sub}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHead kicker={t.sysKicker} title={t.sysTitle} />
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {t.sysSteps.map((s, i) => (
              <div key={s.t} className="border border-slate-200 rounded-xl p-5 bg-gradient-to-b from-white to-slate-50">
                <div className="w-8 h-8 rounded-full bg-[#0E9594] text-white text-sm font-bold flex items-center justify-center">{i + 1}</div>
                <h3 className="mt-3 font-bold text-[#0B2B4B]">{s.t}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <SectionHead kicker={t.thirdKicker} title={t.thirdTitle} sub={t.thirdBody} />
            <SpecTable head={t.thirdHead} rows={t.thirdRows} />
            <div className="mt-6 rounded-lg border border-slate-200 overflow-hidden bg-white">
              {t.thirdMeta.map(([k, v], i) => (
                <div key={k} className={`grid grid-cols-2 ${i % 2 ? 'bg-slate-50' : 'bg-white'}`}>
                  <div className="px-5 py-3 text-sm font-semibold text-slate-800 border-r border-slate-200">{k}</div>
                  <div className="px-5 py-3 text-sm text-slate-600">{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <img src="/images/lab-qc.jpg" alt="Laboratory QC" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3] lg:sticky lg:top-28" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHead kicker={t.rdKicker} title={t.rdTitle} sub={t.rdBody} />
          </div>
          <figure>
            <img src="/images/rd-center-rendering.jpg" alt="R&D Centre rendering" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
            <figcaption className="mt-3 text-xs text-slate-500">{t.rdNote}</figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-[#F4F6F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHead kicker={t.docsKicker} title={t.docsTitle} sub={t.docsBody} />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <DocCard lang={lang} kind="tds" />
            <DocCard lang={lang} kind="sds" />
          </div>
        </div>
      </section>

      <CtaBand lang={lang} />
    </div>
  )
}
