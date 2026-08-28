import { type Lang } from '../lib/router'
import { CtaBand, SectionHead } from '../components/Shared'

const C = {
  en: {
    kicker: 'Manufacturing',
    title: 'One site in Shizuishan, one accountable chain',
    sub: 'Huayue manufactures calcium cyanamide in the Hebin Industrial Park, Huinong District, Shizuishan, Ningxia — a region that anchors China’s carbide-to-NCN industrial chain.',
    baseKicker: 'Manufacturing Base',
    baseTitle: 'Hebin Industrial Park, Shizuishan, Ningxia',
    baseBody:
      'The site sits inside an established chemical industrial park with direct access to calcium carbide feedstock, power and logistics. The 50,000 t/y lime-nitrogen granulation upgrading project extends the site’s capability toward granular fertilizer products.',
    baseNote: 'Architectural rendering of the Huayue project — aerial view',
    procKicker: 'Process',
    procTitle: 'From carbide to controlled product',
    procSteps: [
      { t: 'Raw-material control', d: 'Calcium carbide and nitrogen-bearing inputs are accepted against incoming-inspection criteria before entering production.' },
      { t: 'Production', d: 'Carbide is reacted with nitrogen at high temperature in nitridation furnaces to form calcium cyanamide.' },
      { t: 'Size control', d: 'Milling and classification control particle size; sieve residue on the 180 μm test sieve is a release parameter (≤ 10 %, Superior grade).' },
      { t: 'QC release', d: 'Every batch is sampled and tested against HG/T 5922-2021 before release; available nitrogen ≥ 21.5 % and calcium carbide ≤ 0.2 % for Superior grade.' },
      { t: 'Packaging', d: '25 kg / 50 kg PE-lined woven bags and 1000 kg moisture-barrier jumbo bags; custom packing on request.' },
      { t: 'Warehousing', d: 'Cool, dry, ventilated warehousing with moisture protection, segregated from acids, oxidisers and water sources.' },
      { t: 'Export loading', d: 'Container loading under UN 1403, Class 4.3, PG III requirements — protected from rain and moisture at every step.' },
    ],
    gateNote: 'Main entrance — architectural rendering',
    capKicker: 'Project',
    capTitle: '50,000 t/y granulation upgrading project',
    capBody:
      'The Huayue lime-nitrogen granule fertilizer industrial upgrading project is planned at 50,000 tonnes per year. Final approved capacity and commissioning status will be published once internally confirmed — we do not publish unverified capacity figures.',
    safetyKicker: 'Safety & Environment',
    safetyTitle: 'Managing a water-reactive material, responsibly',
    safetyBody:
      'Calcium cyanamide is a UN 1403, Class 4.3 material. Site handling, storage and fire-protection practice follow the product SDS: dry handling, moisture exclusion, dry-sand and Class D fire response, and segregation from acids, oxidisers and alcohols.',
  },
  zh: {
    kicker: '智能制造',
    title: '石嘴山单一基地，全程可追溯',
    sub: '华岳在宁夏石嘴山市惠农区河滨工业园区生产氰氨化钙——该地区是中国电石—NCN 产业链的核心聚集区。',
    baseKicker: '制造基地',
    baseTitle: '宁夏石嘴山河滨工业园区',
    baseBody: '基地位于成熟的化工园区内，电石原料、电力与物流配套完善。5 万吨石灰氮颗粒肥产业升级改造项目将进一步拓展基地在颗粒肥料产品上的能力。',
    baseNote: '华岳项目鸟瞰建筑效果图',
    procKicker: '工艺流程',
    procTitle: '从电石到受控产品',
    procSteps: [
      { t: '原料控制', d: '电石及含氮原料经进厂检验合格后方可投入生产。' },
      { t: '生产', d: '电石与氮气在氮化炉中高温反应生成氰氨化钙。' },
      { t: '粒度控制', d: '通过粉碎与分级控制粒度；180 μm 试验筛筛余物为放行指标（优等品 ≤ 10 %）。' },
      { t: 'QC 放行', d: '每批产品按 HG/T 5922-2021 取样检验合格后放行；优等品有效氮 ≥ 21.5 %、碳化钙 ≤ 0.2 %。' },
      { t: '包装', d: '25 kg / 50 kg 内衬聚乙烯薄膜编织袋、1000 kg 内衬防潮吨袋；可按客户要求定制。' },
      { t: '仓储', d: '阴凉、干燥、通风库房，防潮管理，与酸类、氧化剂及水源分储。' },
      { t: '出口装运', d: '按 UN 1403、第 4.3 类、包装类别 Ⅲ 要求装箱发运，全程防雨防潮。' },
    ],
    gateNote: '厂区主入口 — 建筑效果图',
    capKicker: '建设项目',
    capTitle: '5 万吨/年颗粒化产业升级改造项目',
    capBody: '华岳石灰氮颗粒肥产业升级改造项目规划产能为 5 万吨/年。最终核准产能与投产状态将在内部确认后发布——我们不发布未经核实的产能数据。',
    safetyKicker: '安全与环保',
    safetyTitle: '负责任地管理遇水反应物料',
    safetyBody: '氰氨化钙属 UN 1403、第 4.3 类物质。厂区操作、储存与消防管理严格遵循产品 SDS：干燥操作、隔绝潮气、干砂与 D 类干粉消防响应，并与酸类、氧化剂、醇类分区管理。',
  },
}

export default function Manufacturing({ lang }: { lang: Lang }) {
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
          <SectionHead kicker={t.baseKicker} title={t.baseTitle} sub={t.baseBody} />
          <figure>
            <img src="/images/plant-aerial-rendering.jpg" alt="Plant aerial rendering" className="rounded-2xl shadow-xl w-full object-cover" />
            <figcaption className="mt-3 text-xs text-slate-500">{t.baseNote}</figcaption>
          </figure>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <figure>
              <img src="/images/entrance-rendering.jpg" alt="Main entrance rendering" className="rounded-2xl shadow-lg w-full object-cover aspect-[16/9]" />
              <figcaption className="mt-3 text-xs text-slate-500">{t.gateNote}</figcaption>
            </figure>
            <figure>
              <img src="/images/production-furnace.jpg" alt="Production facility" className="rounded-2xl shadow-lg w-full object-cover aspect-[16/9]" />
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHead kicker={t.procKicker} title={t.procTitle} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.procSteps.map((s, i) => (
              <div key={s.t} className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#0E9594] hover:shadow-md transition-all">
                <div className="text-[#0E9594] font-bold text-sm tracking-wider">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="mt-2 font-bold text-[#0B2B4B] text-lg">{s.t}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10">
          <div className="border border-slate-200 rounded-xl p-8 bg-gradient-to-b from-white to-slate-50">
            <div className="text-[#0E9594] text-sm font-semibold tracking-[0.2em] uppercase">{t.capKicker}</div>
            <h2 className="mt-3 text-2xl font-bold text-[#0B2B4B]">{t.capTitle}</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">{t.capBody}</p>
          </div>
          <div className="border border-slate-200 rounded-xl p-8 bg-gradient-to-b from-white to-slate-50">
            <div className="text-[#0E9594] text-sm font-semibold tracking-[0.2em] uppercase">{t.safetyKicker}</div>
            <h2 className="mt-3 text-2xl font-bold text-[#0B2B4B]">{t.safetyTitle}</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">{t.safetyBody}</p>
          </div>
        </div>
      </section>

      <CtaBand lang={lang} />
    </div>
  )
}
