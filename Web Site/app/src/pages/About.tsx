import { type Lang } from '../lib/router'
import { CtaBand, SectionHead } from '../components/Shared'

const C = {
  en: {
    kicker: 'About Huayue',
    title: 'A calcium cyanamide manufacturer in the heart of the NCN chain',
    sub: 'Shizuishan Huayue New Material Technology Co., Ltd. manufactures industrial calcium cyanamide in Shizuishan, Ningxia, serving chemical synthesis, metallurgy and agricultural applications.',
    whoKicker: 'Who We Are',
    whoTitle: 'Focused on one molecule, done properly',
    whoBody:
      'Huayue is a specialised calcium cyanamide producer based in the Hebin Industrial Park, Huinong District, Shizuishan City, Ningxia — the centre of China’s carbide and NCN-chain industry. Our focus is deliberately narrow: one product family, manufactured to a published standard, batch-tested and documented for international buyers.',
    numsKicker: 'Huayue in Numbers',
    numsTitle: 'Facts, verified before publication',
    nums: [
      { v: 'CaCN₂', l: 'Single product focus — calcium cyanamide' },
      { v: '50,000 t/y', l: 'Planned capacity, lime-nitrogen granulation upgrading project' },
      { v: 'HG/T 5922-2021', l: 'Published product standard' },
      { v: 'No. 24092633', l: 'Third-party batch test report' },
    ],
    numsNote: 'Capacity figure refers to the approved upgrading project; corporate figures are published only after internal verification.',
    baseKicker: 'Manufacturing Base',
    baseTitle: 'Shizuishan, Ningxia',
    baseBody:
      'Shizuishan sits at the heart of Ningxia’s calcium carbide industry — the feedstock of the NCN chain. Locating production here means short feedstock supply lines, mature industrial infrastructure and direct access to export logistics.',
    gateNote: 'Main entrance — architectural rendering',
    aerialNote: 'Project aerial view — architectural rendering',
    devKicker: 'Development',
    devTitle: 'Building toward the NCN chain',
    devBody:
      'The 50,000 t/y lime-nitrogen granulation upgrading project and the planned R&D Centre extend Huayue from a calcium cyanamide producer toward the broader NCN chain — dicyandiamide, cyanamide and downstream nitrogen derivatives.',
    susKicker: 'Responsibility',
    susTitle: 'Safety and environmental management',
    susBody:
      'As a producer of a UN 1403 Class 4.3 water-reactive material, we manage handling, storage and transport under a documented SDS regime, with moisture exclusion, segregation of incompatibles and dry-media fire response as standard practice.',
  },
  zh: {
    kicker: '关于华岳',
    title: '植根 NCN 产业链核心的氰氨化钙制造商',
    sub: '石嘴山市华岳新材料科技有限公司在宁夏石嘴山生产工业级氰氨化钙，服务于化工合成、冶金与农业应用。',
    whoKicker: '我们是谁',
    whoTitle: '专注一个产品，做到极致',
    whoBody:
      '华岳是位于宁夏石嘴山市惠农区河滨工业园区的专业氰氨化钙生产商——该地区是中国电石及 NCN 产业链的核心。我们的定位专注而清晰：一个产品系列，按公开标准生产，逐批检验，并为国际客户提供完整文件。',
    numsKicker: '数字华岳',
    numsTitle: '先核实，再发布',
    nums: [
      { v: 'CaCN₂', l: '专注单一产品 —— 氰氨化钙' },
      { v: '5 万吨/年', l: '石灰氮颗粒化升级改造项目规划产能' },
      { v: 'HG/T 5922-2021', l: '公开执行的产品标准' },
      { v: '№24092633', l: '第三方批次检验报告' },
    ],
    numsNote: '产能数据指已核准的升级改造项目；公司数据经内部核实后方予发布。',
    baseKicker: '制造基地',
    baseTitle: '宁夏石嘴山',
    baseBody: '石嘴山地处宁夏电石产业核心——即 NCN 产业链的原料源头。在此布局生产意味着更短的原料供应线、成熟的工业配套与便利的出口物流。',
    gateNote: '厂区主入口 — 建筑效果图',
    aerialNote: '项目鸟瞰 — 建筑效果图',
    devKicker: '发展',
    devTitle: '走向 NCN 产业链',
    devBody: '5 万吨/年石灰氮颗粒肥产业升级改造项目与规划中的研发中心，将推动华岳从氰氨化钙生产商向双氰胺、单氰胺及下游含氮衍生物的更完整 NCN 产业链延伸。',
    susKicker: '责任',
    susTitle: '安全与环境管理',
    susBody: '作为 UN 1403 第 4.3 类遇水反应物质的生产商，我们依据文件化的 SDS 制度管理操作、储存与运输，将隔绝潮气、禁配物分区与干介质消防作为标准实践。',
  },
}

export default function About({ lang }: { lang: Lang }) {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHead kicker={t.whoKicker} title={t.whoTitle} sub={t.whoBody} />
          </div>
          <figure>
            <img src="images/entrance-rendering.jpg" alt="Huayue main entrance rendering" className="rounded-2xl shadow-xl w-full object-cover aspect-[16/10]" />
            <figcaption className="mt-3 text-xs text-slate-500">{t.gateNote}</figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-[#F4F6F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHead kicker={t.numsKicker} title={t.numsTitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.nums.map((n) => (
              <div key={n.v} className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="text-2xl font-bold text-[#0B2B4B]">{n.v}</div>
                <div className="mt-2 text-sm text-slate-600 leading-relaxed">{n.l}</div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-slate-500">{t.numsNote}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHead kicker={t.baseKicker} title={t.baseTitle} sub={t.baseBody} />
          <figure>
            <img src="images/plant-aerial-rendering.jpg" alt="Plant aerial rendering" className="rounded-2xl shadow-xl w-full object-cover" />
            <figcaption className="mt-3 text-xs text-slate-500">{t.aerialNote}</figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-[#F4F6F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <div className="text-[#0E9594] text-sm font-semibold tracking-[0.2em] uppercase">{t.devKicker}</div>
            <h2 className="mt-3 text-2xl font-bold text-[#0B2B4B]">{t.devTitle}</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">{t.devBody}</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <div className="text-[#0E9594] text-sm font-semibold tracking-[0.2em] uppercase">{t.susKicker}</div>
            <h2 className="mt-3 text-2xl font-bold text-[#0B2B4B]">{t.susTitle}</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">{t.susBody}</p>
          </div>
        </div>
      </section>

      <CtaBand lang={lang} />
    </div>
  )
}
