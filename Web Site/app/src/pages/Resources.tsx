import { useState } from 'react'
import { type Lang } from '../lib/router'
import { CtaBand, DocCard, SectionHead, SpecTable } from '../components/Shared'

const C = {
  en: {
    kicker: 'Resources',
    title: 'Technical documentation — open, dated, verifiable',
    sub: 'The same controlled documents our QA team issues. No registration wall for core QA/EHS documents.',
    docsKicker: 'Documents',
    docsTitle: 'Technical & safety data sheets',
    specKicker: 'Specification',
    specTitle: 'On-page specification — HG/T 5922-2021',
    specHead: ['Parameter', 'Unit', 'Superior Grade'],
    specRows: [
      ['Available nitrogen content', '%', '≥ 21.5'],
      ['Calcium carbide content', '%', '≤ 0.2'],
      ['Sieve residue (180 μm test sieve)', '%', '≤ 10'],
    ],
    idTitle: 'Identifiers',
    ids: [
      ['CAS No.', '156-62-7'],
      ['EC No.', '205-861-8'],
      ['Molecular formula', 'CaCN₂ · MW 80.10 g/mol'],
      ['HS code', '3102 10 00 / 2851 00 00'],
      ['UN number', 'UN 1403 · Class 4.3 · PG III'],
      ['Product standard', 'HG/T 5922-2021'],
    ],
    faqKicker: 'FAQ',
    faqTitle: 'Frequently asked questions',
    faqs: [
      {
        q: 'What grades of calcium cyanamide do you offer?',
        a: 'Our published specification covers Superior grade per HG/T 5922-2021 (available nitrogen ≥ 21.5 %, calcium carbide ≤ 0.2 %, 180 μm sieve residue ≤ 10 %). First and Qualified grade limits will be published from our controlled copy of the standard.',
      },
      {
        q: 'Can I download the SDS without registering?',
        a: 'Yes. The SDS (HY-SDS-CCN-001, prepared per GB/T 16483, GB/T 17519 and GHS) and the TDS are direct downloads on this page.',
      },
      {
        q: 'What packaging is available?',
        a: '25 kg and 50 kg PE-lined woven bags, 1000 kg moisture-barrier jumbo bags, and custom packing on request. Shelf life is 12 months in sealed original packaging under dry conditions.',
      },
      {
        q: 'How is the product classified for transport?',
        a: 'UN 1403, calcium cyanamide with more than 0.1 % calcium carbide, Class 4.3, Packing Group III, marine pollutant. If carbide content is ≤ 0.1 % the classification may differ — we confirm against actual batch data and with the carrier.',
      },
      {
        q: 'Do you provide a Certificate of Analysis per batch?',
        a: 'Yes. Every shipment is accompanied by a batch COA. Typical batch data on this site is drawn from third-party test report No. 24092633 and is representative only — the batch COA governs.',
      },
      {
        q: 'Is the product registered for agricultural use?',
        a: 'Agricultural use is subject to local agrochemical registration in the destination market. Buyers must confirm registration status; our technical team can support with documentation.',
      },
    ],
  },
  zh: {
    kicker: '技术资料',
    title: '技术资料 —— 公开、带日期、可验证',
    sub: '与我们 QA 团队出具的受控文件一致，核心质量与安全文件不设注册门槛。',
    docsKicker: '文件下载',
    docsTitle: '技术数据表与安全技术说明书',
    specKicker: '技术指标',
    specTitle: '在线技术指标 — HG/T 5922-2021',
    specHead: ['项目', '单位', '优等品'],
    specRows: [
      ['有效氮含量', '%', '≥ 21.5'],
      ['碳化钙（电石）含量', '%', '≤ 0.2'],
      ['筛余物（180 μm 试验筛）', '%', '≤ 10'],
    ],
    idTitle: '产品标识',
    ids: [
      ['CAS 号', '156-62-7'],
      ['EC 号', '205-861-8'],
      ['分子式', 'CaCN₂ · 分子量 80.10 g/mol'],
      ['海关编码', '3102 10 00 / 2851 00 00'],
      ['联合国编号', 'UN 1403 · 第 4.3 类 · 包装类别 Ⅲ'],
      ['产品标准', 'HG/T 5922-2021'],
    ],
    faqKicker: '常见问题',
    faqTitle: '常见问题解答',
    faqs: [
      {
        q: '贵司提供哪些等级的氰氨化钙？',
        a: '目前公布的技术指标为 HG/T 5922-2021 优等品（有效氮 ≥ 21.5 %、碳化钙 ≤ 0.2 %、180 μm 筛余物 ≤ 10 %）。一等品与合格品指标将按我司标准受控文本填写后发布。',
      },
      {
        q: 'SDS 可以不注册直接下载吗？',
        a: '可以。SDS（HY-SDS-CCN-001，依据 GB/T 16483、GB/T 17519 及 GHS 编制）与 TDS 均可在本页直接下载。',
      },
      {
        q: '有哪些包装形式？',
        a: '25 kg、50 kg 内衬聚乙烯薄膜编织袋，1000 kg 内衬防潮吨袋，可按客户要求定制。原包装密封干燥条件下保质期 12 个月。',
      },
      {
        q: '运输如何分类？',
        a: 'UN 1403，氰氨化钙（含碳化钙＞0.1 %），第 4.3 类，包装类别 Ⅲ，海洋污染物。若碳化钙含量 ≤ 0.1 %，分类可能不同，以实际批次检验数据及承运人确认为准。',
      },
      {
        q: '是否提供批次检验报告（COA）？',
        a: '提供。每批货物均随附批次检验报告。本网站典型批次数据源自第三方检验报告 №24092633，仅供参考，以随货 COA 为准。',
      },
      {
        q: '产品是否已登记农用？',
        a: '农业用途须符合目的市场的农化登记法规，买方须确认登记状态；我们的技术团队可提供文件支持。',
      },
    ],
  },
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-slate-200 rounded-lg bg-white">
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-[#0B2B4B]">{q}</span>
        <svg className={`w-5 h-5 text-[#0E9594] shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">{a}</p>}
    </div>
  )
}

export default function Resources({ lang }: { lang: Lang }) {
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
          <SectionHead kicker={t.docsKicker} title={t.docsTitle} />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <DocCard lang={lang} kind="tds" />
            <DocCard lang={lang} kind="sds" />
          </div>
          <h3 className="text-xl font-bold text-[#0B2B4B] mt-14 mb-5">{t.idTitle}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
            {t.ids.map(([k, v]) => (
              <div key={k} className="border border-slate-200 rounded-lg p-4 bg-slate-50/60">
                <div className="text-xs text-slate-500 uppercase tracking-wider">{k}</div>
                <div className="mt-1 font-semibold text-[#0B2B4B]">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHead kicker={t.specKicker} title={t.specTitle} />
          <div className="max-w-3xl">
            <SpecTable head={t.specHead} rows={t.specRows} />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHead kicker={t.faqKicker} title={t.faqTitle} />
          <div className="space-y-3 max-w-4xl">
            {t.faqs.map((f) => (
              <Faq key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand lang={lang} />
    </div>
  )
}
