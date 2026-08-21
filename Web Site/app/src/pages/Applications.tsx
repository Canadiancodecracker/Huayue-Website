import { type Lang } from '../lib/router'
import { CtaBand, SectionHead } from '../components/Shared'

const C = {
  en: {
    kicker: 'Applications',
    title: 'Calcium cyanamide, by downstream chemistry',
    sub: 'Real application information — where our own data does not yet cover a use case, we say so and application-specific validation is required.',
    items: [
      {
        img: 'images/app-chemical.jpg',
        t: 'Chemical Intermediates',
        d: 'The base raw material of the NCN chain. Calcium cyanamide is hydrolysed to cyanamide (H₂NCN), dimerised to dicyandiamide, and converted onward to guanidine salts, guanidine nitrate and creatine. Consistent available-nitrogen content and low calcium carbide impurity are the two parameters downstream producers watch most closely — both are controlled and batch-tested at Huayue.',
        tags: ['Cyanamide production', 'Dicyandiamide feedstock', 'Guanidine salts', 'Creatine'],
      },
      {
        img: 'images/app-metallurgy.jpg',
        t: 'Metallurgy',
        d: 'Used as a desulphurising and dephosphorising agent in iron and steel treatment, and as a nitrogen source in nitriding surface treatment. Powder and granule size distributions are controlled to suit injection and ladle-addition practice.',
        tags: ['Steel desulfurization', 'Dephosphorisation', 'Nitriding agent'],
      },
      {
        img: 'images/app-agriculture.jpg',
        t: 'Agriculture',
        d: 'A slow-release nitrogen fertiliser with soil-conditioning and soil-disinfection effects. In soil it hydrolyses to cyanamide and then urea, releasing nitrogen gradually and suppressing certain soil-borne pathogens and weed germination during the cyanamide phase. Agricultural use is subject to local agrochemical registration — buyers must confirm registration status in the destination market.',
        tags: ['Slow-release N fertiliser', 'Soil treatment', 'Nitrification inhibition'],
      },
      {
        img: 'images/app-environmental.jpg',
        t: 'Environmental & Industrial',
        d: 'Applied as a cement additive and in wastewater desulphurisation and heavy-metal treatment, where its alkalinity and controlled reactivity are used for precipitation and conditioning processes.',
        tags: ['Cement additive', 'Wastewater desulphurisation', 'Heavy-metal treatment'],
      },
    ],
    noteTitle: 'A note on application data',
    note: 'Where dosage, reaction conditions or field-trial figures are not supported by Huayue’s own test data, we do not publish them. Contact our technical team for application-specific guidance and validation support.',
    noteCta: 'Ask our technical team',
  },
  zh: {
    kicker: '应用领域',
    title: '按下下游化学划分的氰氨化钙应用',
    sub: '提供真实的应用技术信息——凡我司数据尚未覆盖的用途，我们会明确说明，并需进行应用验证。',
    items: [
      {
        img: 'images/app-chemical.jpg',
        t: '化工中间体',
        d: 'NCN 产业链的基础原料。氰氨化钙经水解制得单氰胺（H₂NCN），二聚制得双氰胺，并进一步转化为胍盐、硝酸胍与肌酸。下游生产商最关注有效氮含量的稳定性与碳化钙杂质控制——这两项指标在华岳均受控并逐批检验。',
        tags: ['单氰胺生产', '双氰胺原料', '胍盐', '肌酸'],
      },
      {
        img: 'images/app-metallurgy.jpg',
        t: '冶金',
        d: '用作钢铁处理中的脱硫脱磷剂，以及渗氮表面处理中的氮源。粉末与颗粒的粒度分布按喷吹与钢包加入工艺要求进行控制。',
        tags: ['钢铁脱硫', '脱磷', '渗氮剂'],
      },
      {
        img: 'images/app-agriculture.jpg',
        t: '农业',
        d: '兼具土壤调理与消毒作用的缓释氮肥。在土壤中水解为单氰胺、继而转化为尿素，氮素缓慢释放，并在单氰胺阶段抑制部分土传病原与杂草萌发。农业用途须符合当地农化登记法规，买方须确认目的市场的登记状态。',
        tags: ['缓释氮肥', '土壤处理', '硝化抑制'],
      },
      {
        img: 'images/app-environmental.jpg',
        t: '环保与工业',
        d: '用作水泥外加剂，并用于废水脱硫及重金属处理——利用其碱性与受控反应活性进行沉淀与调理工艺。',
        tags: ['水泥外加剂', '废水脱硫', '重金属处理'],
      },
    ],
    noteTitle: '关于应用数据的说明',
    note: '凡缺乏我司自有试验数据支撑的用量、反应条件或田间数据，我们一律不予发布。如需特定应用的技术指导与验证支持，请联系我们的技术团队。',
    noteCta: '咨询技术团队',
  },
}

export default function Applications({ lang }: { lang: Lang }) {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {t.items.map((it, i) => (
            <div key={it.t} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? '' : ''}`}>
              <div className={i % 2 ? 'lg:order-2' : ''}>
                <img src={it.img} alt={it.t} className="rounded-2xl shadow-lg w-full object-cover aspect-[16/10]" />
              </div>
              <div className={i % 2 ? 'lg:order-1' : ''}>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B2B4B]">{it.t}</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">{it.d}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {it.tags.map((tag) => (
                    <span key={tag} className="bg-teal-50 text-[#0E9594] text-sm font-medium px-3 py-1 rounded-full border border-teal-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F4F6F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="max-w-3xl">
            <SectionHead kicker={lang === 'zh' ? '技术立场' : 'Our position'} title={t.noteTitle} sub={t.note} />
            <a href={`#/${lang}/contact`} className="text-[#0E9594] font-semibold hover:underline">
              {t.noteCta} →
            </a>
          </div>
        </div>
      </section>

      <CtaBand lang={lang} />
    </div>
  )
}
