import { useState, type ReactNode } from 'react'
import { href, type Lang } from '../lib/router'

export const DOCS = {
  tds: 'docs/Huayue-Calcium-Cyanamide-TDS-HY-TDS-CCN-001.pdf',
  sds: 'docs/Huayue-Calcium-Cyanamide-SDS-HY-SDS-CCN-001.pdf',
}

export function SectionHead({
  kicker,
  title,
  sub,
  light,
}: {
  kicker: string
  title: string
  sub?: string
  light?: boolean
}) {
  return (
    <div className="max-w-3xl mb-10">
      <div className={`text-sm font-semibold tracking-[0.2em] uppercase mb-3 ${light ? 'text-[#2DD4BF]' : 'text-[#0E9594]'}`}>
        {kicker}
      </div>
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${light ? 'text-white' : 'text-[#0B2B4B]'}`}>
        {title}
      </h2>
      {sub && <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>{sub}</p>}
    </div>
  )
}

export function ButtonPrimary({ children, to }: { children: ReactNode; to: string }) {
  return (
    <a
      href={to}
      className="inline-flex items-center justify-center gap-2 bg-[#0E9594] hover:bg-[#0B2B4B] text-white font-semibold px-6 py-3 rounded-md transition-colors"
    >
      {children}
    </a>
  )
}

export function ButtonGhost({ children, to, light }: { children: ReactNode; to: string; light?: boolean }) {
  return (
    <a
      href={to}
      className={`inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-md border transition-colors ${
        light
          ? 'border-white/40 text-white hover:bg-white/10'
          : 'border-slate-300 text-[#0B2B4B] hover:border-[#0E9594] hover:text-[#0E9594]'
      }`}
    >
      {children}
    </a>
  )
}

export function SpecTable({
  head,
  rows,
}: {
  head: string[]
  rows: string[][]
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#0B2B4B] text-white">
            {head.map((h, i) => (
              <th key={i} className="text-left font-semibold px-5 py-3.5 whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>
              {r.map((c, j) => (
                <td key={j} className={`px-5 py-3.5 ${j === 0 ? 'font-medium text-slate-800' : 'text-slate-600'}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function DocCard({
  lang,
  kind,
}: {
  lang: Lang
  kind: 'tds' | 'sds'
}) {
  const meta = {
    tds: {
      en: { title: 'Technical Data Sheet', doc: 'HY-TDS-CCN-001 · v1.0 · 2026-08-19', desc: 'Specification per HG/T 5922-2021, typical batch data, packaging and transport.' },
      zh: { title: '技术数据表 TDS', doc: 'HY-TDS-CCN-001 · v1.0 · 2026-08-19', desc: 'HG/T 5922-2021 技术指标、典型批次数据、包装与运输信息。' },
    },
    sds: {
      en: { title: 'Safety Data Sheet (GHS)', doc: 'HY-SDS-CCN-001 · v1.0 · 2026-08-19', desc: '16-section GHS SDS per GB/T 16483 & GB/T 17519. Ungated download.' },
      zh: { title: '安全技术说明书 SDS', doc: 'HY-SDS-CCN-001 · v1.0 · 2026-08-19', desc: '依据 GB/T 16483、GB/T 17519 及 GHS 编制的 16 部分 SDS，可直接下载。' },
    },
  }[kind][lang]
  return (
    <a
      href={DOCS[kind]}
      target="_blank"
      rel="noreferrer"
      className="group flex items-start gap-4 bg-white border border-slate-200 rounded-lg p-5 hover:border-[#0E9594] hover:shadow-md transition-all"
    >
      <div className="shrink-0 w-11 h-11 rounded-md bg-red-50 text-red-600 flex items-center justify-center">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 10v6m0 0l-3-3m3 3l3-3M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
        </svg>
      </div>
      <div>
        <div className="font-semibold text-[#0B2B4B] group-hover:text-[#0E9594] transition-colors">{meta.title}</div>
        <div className="text-xs text-slate-400 mt-0.5 font-mono">{meta.doc}</div>
        <div className="text-sm text-slate-600 mt-2 leading-relaxed">{meta.desc}</div>
      </div>
    </a>
  )
}

export function CtaBand({ lang }: { lang: Lang }) {
  const t =
    lang === 'zh'
      ? {
          title: '获取报价、样品或技术支持',
          sub: '请提供目标应用、等级、年度用量与目的港，我们的国际销售团队将在一个工作日内回复。',
          quote: '询价',
          sample: '申请样品',
        }
      : {
          title: 'Request a quote, a sample, or technical support',
          sub: 'Tell us your application, grade, annual volume and destination port — our international sales team replies within one business day.',
          quote: 'Request a Quote',
          sample: 'Request a Sample',
        }
  return (
    <section className="bg-gradient-to-r from-[#071E36] to-[#0B2B4B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row lg:items-center gap-8 justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-white">{t.title}</h2>
          <p className="mt-3 text-slate-300 leading-relaxed">{t.sub}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <ButtonPrimary to={href(lang, 'contact')}>{t.quote}</ButtonPrimary>
          <ButtonGhost to={href(lang, 'contact')} light>
            {t.sample}
          </ButtonGhost>
        </div>
      </div>
    </section>
  )
}

export function RfqForm({ lang }: { lang: Lang }) {
  const [sent, setSent] = useState(false)
  const t =
    lang === 'zh'
      ? {
          title: '询价 / 申请样品',
          name: '姓名', company: '公司', country: '国家/地区', email: '商务邮箱',
          application: '应用领域', grade: '所需等级', volume: '年度需求量', port: '目的港', message: '留言',
          applicationOpts: ['化工中间体（单氰胺/双氰胺）', '冶金脱硫', '农业/土壤处理', '环保/工业', '其他'],
          gradeOpts: ['优等品 Superior', '一等品 First', '合格品 Qualified', '待确认'],
          submit: '提交询价',
          note: '提交即表示同意我们就本次询价与您联系。',
          done: '已收到您的询价信息。请同时发送至 sales@huayue-nm.com，我们将在一个工作日内回复。',
        }
      : {
          title: 'Request a Quote / Sample',
          name: 'Name', company: 'Company', country: 'Country', email: 'Business Email',
          application: 'Application', grade: 'Required Grade', volume: 'Annual Requirement', port: 'Destination Port', message: 'Message',
          applicationOpts: ['Chemical intermediates (cyanamide / DCD)', 'Steel desulfurization', 'Agriculture / soil treatment', 'Environmental / industrial', 'Other'],
          gradeOpts: ['Superior Grade', 'First Grade', 'Qualified Grade', 'To be confirmed'],
          submit: 'Submit Enquiry',
          note: 'By submitting you agree to be contacted about this enquiry.',
          done: 'Thank you — your enquiry has been recorded. You can also email sales@huayue-nm.com; we reply within one business day.',
        }
  const input =
    'w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0E9594] focus:border-transparent bg-white'
  const label = 'block text-sm font-medium text-slate-700 mb-1.5'
  if (sent) {
    return (
      <div className="bg-teal-50 border border-teal-200 rounded-lg p-8 text-center">
        <div className="w-12 h-12 mx-auto rounded-full bg-[#0E9594] text-white flex items-center justify-center mb-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-[#0B2B4B] font-medium leading-relaxed">{t.done}</p>
      </div>
    )
  }
  return (
    <form
      className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 md:p-8"
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      <h3 className="text-xl font-bold text-[#0B2B4B] mb-6">{t.title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div><label className={label}>{t.name} *</label><input required className={input} /></div>
        <div><label className={label}>{t.company} *</label><input required className={input} /></div>
        <div><label className={label}>{t.country} *</label><input required className={input} /></div>
        <div><label className={label}>{t.email} *</label><input required type="email" className={input} /></div>
        <div>
          <label className={label}>{t.application}</label>
          <select className={input}>{t.applicationOpts.map((o) => <option key={o}>{o}</option>)}</select>
        </div>
        <div>
          <label className={label}>{t.grade}</label>
          <select className={input}>{t.gradeOpts.map((o) => <option key={o}>{o}</option>)}</select>
        </div>
        <div><label className={label}>{t.volume}</label><input className={input} placeholder={lang === 'zh' ? '如 500 吨/年' : 'e.g. 500 mt/year'} /></div>
        <div><label className={label}>{t.port}</label><input className={input} placeholder={lang === 'zh' ? '如 汉堡港' : 'e.g. Hamburg'} /></div>
        <div className="md:col-span-2"><label className={label}>{t.message}</label><textarea rows={4} className={input} /></div>
      </div>
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <button type="submit" className="bg-[#0E9594] hover:bg-[#0B2B4B] text-white font-semibold px-8 py-3 rounded-md transition-colors">
          {t.submit}
        </button>
        <p className="text-xs text-slate-400">{t.note}</p>
      </div>
    </form>
  )
}
