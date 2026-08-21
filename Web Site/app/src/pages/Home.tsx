import { href, type Lang } from '../lib/router'
import { ButtonGhost, ButtonPrimary, CtaBand, DocCard, SectionHead } from '../components/Shared'

const C = {
  en: {
    heroKicker: 'Calcium Cyanamide Manufacturer — Shizuishan, Ningxia, China',
    heroTitle: 'Built for Reliable Calcium Cyanamide Supply.',
    heroSub:
      'Industrial calcium cyanamide from Shizuishan, Ningxia, China — for chemical synthesis, metallurgy and agricultural applications.',
    heroCta1: 'Explore Calcium Cyanamide',
    heroCta2: 'Request a Quote',

    idStrip: ['CAS 156-62-7', 'EC 205-861-8', 'CaCN₂ · MW 80.10', 'Industrial Grade', 'HG/T 5922-2021'],
    factsKicker: 'Key Facts',
    factsTitle: 'Verifiable numbers, not slogans',
    factsSub: 'Every figure on this site is drawn from controlled company documents and third-party test reports.',
    facts: [
      { v: '≥ 21.5%', l: 'Available nitrogen — Superior grade, per HG/T 5922-2021' },
      { v: '≤ 0.2%', l: 'Calcium carbide — controlled impurity, batch-released' },
      { v: '22.1% N', l: 'Typical batch result, third-party test report No. 24092633' },
      { v: 'UN 1403', l: 'Class 4.3, PG III — documented, compliant logistics' },
    ],
    prodKicker: 'Product',
    prodTitle: 'Calcium Cyanamide / 氰氨化钙',
    prodSub:
      'Also known as Nitrolime, Lime Nitrogen or 石灰氮. Grey-black to dark grey powder or granules, manufactured and batch-tested in Shizuishan, Ningxia.',
    prodPoints: [
      'Feedstock for cyanamide, dicyandiamide, guanidine salts and creatine',
      'Desulphurising and nitriding agent for iron & steel',
      'Slow-release nitrogen fertiliser and soil treatment',
      'Specification published on-page, per HG/T 5922-2021',
    ],
    prodMore: 'Full specification & typical data',
    appKicker: 'Applications',
    appTitle: 'One molecule, four industries',
    appSub: 'Calcium cyanamide is a triple-function input. Each application below opens a dedicated technical page.',
    apps: [
      {
        img: 'images/app-chemical.jpg',
        t: 'Chemical Intermediates',
        d: 'Base raw material for cyanamide, dicyandiamide, guanidine salts, guanidine nitrate and creatine.',
      },
      {
        img: 'images/app-metallurgy.jpg',
        t: 'Metallurgy',
        d: 'Desulphurising and dephosphorising agent for steel; nitriding agent for surface treatment.',
      },
      {
        img: 'images/app-agriculture.jpg',
        t: 'Agriculture',
        d: 'Slow-release nitrogen fertiliser, soil conditioning and disinfection — subject to local registration.',
      },
      {
        img: 'images/app-environmental.jpg',
        t: 'Environmental & Industrial',
        d: 'Cement additive; wastewater desulphurisation and heavy-metal treatment.',
      },
    ],
    appMore: 'All applications',
    mfgKicker: 'Manufacturing',
    mfgTitle: 'Manufactured in Shizuishan, Ningxia',
    mfgSub:
      'From raw-material control through production, quality control, QC release, packaging, warehousing and shipping — one site, one accountable chain.',
    mfgSteps: ['Raw-material control', 'Production', 'Quality control', 'QC release', 'Packaging', 'Warehousing', 'Shipping'],
    mfgMore: 'See manufacturing capability',
    qcKicker: 'R&D & Quality',
    qcTitle: 'Batch-tested before release',
    qcSub:
      'Every lot is released against HG/T 5922-2021. Typical batch performance is verified by the Ningxia Institute of Metrology, Quality Inspection and Testing (Report No. 24092633).',
    qcMore: 'Our quality system',
    qcImgNote: 'R&D Centre — architectural rendering',
    docsKicker: 'Technical Documentation',
    docsTitle: 'TDS & SDS — ungated, dated, downloadable',
    docsSub:
      'No registration wall. The same controlled documents our QA team issues, available directly.',
    docsMore: 'Resource centre',
    chainKicker: 'Supply Security',
    chainTitle: 'Typical NCN Chain: From Carbide to Downstream Chemistry',
    chainMain: ['Calcium Carbide\n电石', 'Calcium Cyanamide\n石灰氮', 'Cyanamide\n单氰胺'],
    chainBranches: ['Dicyandiamide\n双氰胺', 'Creatine Monohydrate\n一水肌酸'],
  },
  zh: {
    heroKicker: '氰氨化钙制造商 — 中国宁夏石嘴山',
    heroTitle: '专注氰氨化钙制造，稳定品质，可靠供应。',
    heroSub: '工业级氰氨化钙，产自宁夏石嘴山，服务于化工合成、冶金与农业应用。',
    heroCta1: '了解氰氨化钙',
    heroCta2: '询价',

    idStrip: ['CAS 156-62-7', 'EC 205-861-8', 'CaCN₂ · 分子量 80.10', '工业级', 'HG/T 5922-2021'],
    factsKicker: '核心数据',
    factsTitle: '用可验证的数字说话',
    factsSub: '本网站的每一项数据均来源于公司受控文件与第三方检验报告。',
    facts: [
      { v: '≥ 21.5%', l: '有效氮含量 — 优等品，依据 HG/T 5922-2021' },
      { v: '≤ 0.2%', l: '碳化钙含量 — 受控杂质，逐批放行' },
      { v: '22.1% N', l: '典型批次实测值，第三方检验报告 №24092633' },
      { v: 'UN 1403', l: '第 4.3 类，包装类别 Ⅲ — 合规物流' },
    ],
    prodKicker: '产品中心',
    prodTitle: '氰氨化钙（石灰氮）',
    prodSub:
      '别名石灰氮、Nitrolime、Lime Nitrogen。灰黑色至深灰色粉末或颗粒，在宁夏石嘴山生产并逐批检验。',
    prodPoints: [
      '单氰胺、双氰胺、胍盐、肌酸的基础原料',
      '钢铁脱硫脱磷剂、渗氮处理剂',
      '缓释氮肥、土壤调理与消毒',
      '技术指标在线公开，依据 HG/T 5922-2021',
    ],
    prodMore: '完整技术指标与典型数据',
    appKicker: '应用领域',
    appTitle: '一种产品，四大行业',
    appSub: '氰氨化钙是多功能基础原料，点击进入各应用专题页面。',
    apps: [
      { img: 'images/app-chemical.jpg', t: '化工中间体', d: '生产单氰胺、双氰胺、胍盐、硝酸胍及肌酸等含氮衍生物的基础原料。' },
      { img: 'images/app-metallurgy.jpg', t: '冶金', d: '钢铁脱硫脱磷剂；表面处理渗氮剂。' },
      { img: 'images/app-agriculture.jpg', t: '农业', d: '缓释氮肥、土壤调理与消毒——须按当地农化登记法规使用。' },
      { img: 'images/app-environmental.jpg', t: '环保与工业', d: '水泥外加剂；废水脱硫及重金属处理。' },
    ],
    appMore: '全部应用',
    mfgKicker: '智能制造',
    mfgTitle: '宁夏石嘴山制造基地',
    mfgSub: '从原料控制、生产、品质控制、QC 放行、包装、仓储到出运——同一基地，全程可追溯。',
    mfgSteps: ['原料控制', '生产', '品质控制', 'QC 放行', '包装', '仓储', '出运'],
    mfgMore: '查看制造能力',
    qcKicker: '研发与质量',
    qcTitle: '逐批检验，合格放行',
    qcSub: '每一批次均依据 HG/T 5922-2021 放行。典型批次性能经宁夏计量质量检验检测研究院验证（报告 №24092633）。',
    qcMore: '质量管理体系',
    qcImgNote: '研发中心 — 建筑效果图',
    docsKicker: '技术资料',
    docsTitle: 'TDS 与 SDS —— 免注册、带日期、直接下载',
    docsSub: '不设注册门槛。与我们 QA 团队出具的受控文件完全一致，直接获取。',
    docsMore: '资料中心',
    chainKicker: '供应保障',
    chainTitle: 'NCN 典型产业链：从电石到下游化学品',
    chainMain: ['电石', '石灰氮\n（氰氨化钙）', '单氰胺'],
    chainBranches: ['双氰胺', '一水肌酸'],
  },
}

export default function Home({ lang }: { lang: Lang }) {
  const t = C[lang]
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#071E36]">
        <div className="absolute inset-0">
          <img src="images/plant-aerial-rendering.jpg" alt="" className="w-full h-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071E36] via-[#071E36]/85 to-[#071E36]/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <div className="text-[#2DD4BF] text-sm font-semibold tracking-[0.2em] uppercase mb-5">{t.heroKicker}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              {t.heroTitle}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">{t.heroSub}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonPrimary to={href(lang, 'product')}>{t.heroCta1}</ButtonPrimary>
              <ButtonGhost to={href(lang, 'contact')} light>
                {t.heroCta2}
              </ButtonGhost>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
              {t.idStrip.map((s) => (
                <span key={s} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* Key facts */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SectionHead kicker={t.factsKicker} title={t.factsTitle} sub={t.factsSub} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.facts.map((f) => (
              <div key={f.v + f.l} className="border border-slate-200 rounded-xl p-6 hover:border-[#0E9594] hover:shadow-md transition-all bg-gradient-to-b from-white to-slate-50">
                <div className="text-3xl font-bold text-[#0B2B4B]">{f.v}</div>
                <div className="mt-3 text-sm text-slate-600 leading-relaxed">{f.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product */}
      <section className="bg-[#F4F6F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHead kicker={t.prodKicker} title={t.prodTitle} sub={t.prodSub} />
            <ul className="space-y-3 mb-8">
              {t.prodPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-slate-700">
                  <svg className="w-5 h-5 mt-0.5 text-[#0E9594] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <ButtonPrimary to={href(lang, 'product')}>{t.prodMore}</ButtonPrimary>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <DocCard lang={lang} kind="tds" />
              <DocCard lang={lang} kind="sds" />
            </div>
          </div>
          <div className="relative">
            <img src="images/product-granules.jpg" alt="Calcium cyanamide granules" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
            <div className="absolute -bottom-5 -left-5 bg-[#0B2B4B] text-white rounded-xl px-6 py-4 shadow-lg">
              <div className="text-xs text-slate-300 tracking-wider uppercase">{lang === 'zh' ? '分子式' : 'Formula'}</div>
              <div className="text-2xl font-bold">CaCN₂</div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHead kicker={t.appKicker} title={t.appTitle} sub={t.appSub} />
            <a href={href(lang, 'applications')} className="text-[#0E9594] font-semibold hover:underline whitespace-nowrap mb-10">
              {t.appMore} →
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.apps.map((a) => (
              <a key={a.t} href={href(lang, 'applications')} className="group rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all bg-white">
                <div className="overflow-hidden aspect-[3/2]">
                  <img src={a.img} alt={a.t} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#0B2B4B] group-hover:text-[#0E9594] transition-colors">{a.t}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{a.d}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* NCN chain */}
      <section className="bg-[#071E36]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SectionHead kicker={t.chainKicker} title={t.chainTitle} light />
          <div className="grid gap-0 lg:grid-cols-[minmax(0,3fr)_4rem_minmax(15rem,1.35fr)] lg:items-center">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
              {t.chainMain.map((c, i) => (
                <div key={c} className="flex-1 flex flex-col lg:flex-row items-center gap-3">
                  <div className={`w-full flex-1 rounded-lg px-4 py-5 text-center border ${i === 1 ? 'bg-[#0E9594] border-[#0E9594] text-white' : 'bg-white/5 border-white/15 text-slate-200'}`}>
                    {c.split('\n').map((line) => (
                      <div key={line} className={line.includes('电') || /[\u4e00-\u9fff]/.test(line) ? 'text-sm opacity-90' : 'font-semibold'}>{line}</div>
                    ))}
                  </div>
                  {i < t.chainMain.length - 1 && (
                    <svg className="w-6 h-6 text-[#2DD4BF] shrink-0 rotate-90 lg:rotate-0 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                    </svg>
                  )}
                </div>
              ))}
            </div>

            <svg className="hidden lg:block w-16 h-36 text-[#2DD4BF]" viewBox="0 0 64 144" fill="none" stroke="currentColor" aria-hidden="true">
              <defs>
                <marker id="chain-arrow-desktop" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0 0L6 3L0 6Z" fill="currentColor" stroke="none" />
                </marker>
              </defs>
              <path d="M0 72H22" strokeWidth="2" strokeLinecap="round" />
              <path d="M22 72V30H60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#chain-arrow-desktop)" />
              <path d="M22 72V114H60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#chain-arrow-desktop)" />
            </svg>

            <svg className="lg:hidden w-full h-12 text-[#2DD4BF]" viewBox="0 0 100 48" preserveAspectRatio="none" fill="none" stroke="currentColor" aria-hidden="true">
              <path d="M50 0V16H16V48" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <div aria-label="Cyanamide downstream branches" className="relative grid grid-rows-2 gap-3 pl-8 lg:pl-0">
              <svg className="absolute inset-y-0 left-0 w-8 h-full text-[#2DD4BF] lg:hidden" viewBox="0 0 32 100" preserveAspectRatio="none" fill="none" stroke="currentColor" aria-hidden="true">
                <defs>
                  <marker id="chain-arrow-mobile" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <path d="M0 0L6 3L0 6Z" fill="currentColor" stroke="none" />
                  </marker>
                </defs>
                <path d="M16 0V75" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
                <path d="M16 25H30" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinecap="round" markerEnd="url(#chain-arrow-mobile)" />
                <path d="M16 75H30" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinecap="round" markerEnd="url(#chain-arrow-mobile)" />
              </svg>
              {t.chainBranches.map((c) => (
                <div key={c} className="min-h-20 rounded-lg px-4 py-5 text-center border bg-white/5 border-white/15 text-slate-200 flex flex-col items-center justify-center">
                  {c.split('\n').map((line) => (
                    <div key={line} className={/[\u4e00-\u9fff]/.test(line) ? 'text-sm opacity-90' : 'font-semibold'}>{line}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img src="images/production-furnace.jpg" alt="Production facility" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHead kicker={t.mfgKicker} title={t.mfgTitle} sub={t.mfgSub} />
            <div className="flex flex-wrap gap-2 mb-8">
              {t.mfgSteps.map((s, i) => (
                <span key={s} className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full">
                  <span className="text-[#0E9594] font-bold text-xs">{String(i + 1).padStart(2, '0')}</span>
                  {s}
                </span>
              ))}
            </div>
            <ButtonGhost to={href(lang, 'manufacturing')}>{t.mfgMore}</ButtonGhost>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="bg-[#F4F6F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHead kicker={t.qcKicker} title={t.qcTitle} sub={t.qcSub} />
            <ButtonGhost to={href(lang, 'quality')}>{t.qcMore}</ButtonGhost>
          </div>
          <figure>
            <img src="images/rd-center-rendering.jpg" alt="R&D Centre rendering" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
            <figcaption className="mt-3 text-xs text-slate-500">{t.qcImgNote}</figcaption>
          </figure>
        </div>
      </section>

      {/* Docs */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHead kicker={t.docsKicker} title={t.docsTitle} sub={t.docsSub} />
            <a href={href(lang, 'resources')} className="text-[#0E9594] font-semibold hover:underline whitespace-nowrap mb-10">
              {t.docsMore} →
            </a>
          </div>
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
