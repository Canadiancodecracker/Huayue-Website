import { type Lang } from '../lib/router'
import { RfqForm } from '../components/Shared'

const C = {
  en: {
    kicker: 'Contact',
    title: 'Talk to a real manufacturer',
    sub: 'All enquiries are answered within one business day, in English or Chinese.',
    sales: 'International Sales',
    salesD: 'Quotations, samples, packaging and logistics',
    tech: 'Technical Support',
    techD: 'Specifications, applications, TDS/SDS and COA',
    addr: 'Manufacturing Site',
    addrV: 'East of Xingyuan Road, Hebin Industrial Park, Huinong District, Shizuishan City, Ningxia, China',
    hours: 'Working Hours',
    hoursV: 'Mon–Sat 08:30–17:30 (GMT+8) — covering CET mornings and JST afternoons',
    gateNote: 'Main entrance — architectural rendering',
  },
  zh: {
    kicker: '联系我们',
    title: '与真正的生产商直接对话',
    sub: '所有咨询将在一个工作日内以中文或英文回复。',
    sales: '国际销售',
    salesD: '报价、样品、包装与物流',
    tech: '技术支持',
    techD: '技术指标、应用、TDS/SDS 与批次检验报告',
    addr: '生产基地地址',
    addrV: '中国宁夏石嘴山市惠农区河滨工业园区兴园路东',
    hours: '工作时间',
    hoursV: '周一至周六 08:30–17:30（GMT+8）—— 覆盖欧洲上午与日韩下午时段',
    gateNote: '厂区主入口 — 建筑效果图',
  },
}

export default function Contact({ lang }: { lang: Lang }) {
  const t = C[lang]
  return (
    <div>
      <section className="bg-gradient-to-br from-[#071E36] to-[#0B2B4B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-[#2DD4BF] text-sm font-semibold tracking-[0.2em] uppercase mb-4">{t.kicker}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{t.title}</h1>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed max-w-3xl">{t.sub}</p>
        </div>
      </section>

      <section className="bg-[#F4F6F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-teal-50 text-[#0E9594] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-[#0B2B4B]">{t.sales}</div>
                  <div className="text-sm text-slate-500">{t.salesD}</div>
                </div>
              </div>
              <a href="mailto:sales@huayue-nm.com" className="mt-4 block text-[#0E9594] font-semibold hover:underline">
                sales@huayue-nm.com
              </a>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-teal-50 text-[#0E9594] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-[#0B2B4B]">{t.tech}</div>
                  <div className="text-sm text-slate-500">{t.techD}</div>
                </div>
              </div>
              <a href="mailto:tech@huayue-nm.com" className="mt-4 block text-[#0E9594] font-semibold hover:underline">
                tech@huayue-nm.com
              </a>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="font-bold text-[#0B2B4B] mb-1.5">{t.addr}</div>
              <p className="text-sm text-slate-600 leading-relaxed">{t.addrV}</p>
              <div className="font-bold text-[#0B2B4B] mt-5 mb-1.5">{t.hours}</div>
              <p className="text-sm text-slate-600 leading-relaxed">{t.hoursV}</p>
            </div>
            <figure>
              <img src="/images/entrance-rendering.jpg" alt="Huayue entrance" className="rounded-xl shadow-md w-full object-cover aspect-[16/9]" />
              <figcaption className="mt-2 text-xs text-slate-500">{t.gateNote}</figcaption>
            </figure>
          </div>
          <div className="lg:col-span-3">
            <RfqForm lang={lang} />
          </div>
        </div>
      </section>
    </div>
  )
}
