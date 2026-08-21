import { type Lang } from '../lib/router'
import { ButtonPrimary, CtaBand, DocCard, SectionHead, SpecTable } from '../components/Shared'

const C = {
  en: {
    kicker: 'Product · CAS 156-62-7',
    title: 'Calcium Cyanamide',
    zhName: '氰氨化钙 · 石灰氮',
    sub: 'Nitrolime · Lime Nitrogen · Calcium carbimide — industrial grade, manufactured in Shizuishan, Ningxia, China.',
    idTitle: 'Product identity',
    id: [
      ['Product', 'Calcium Cyanamide / 氰氨化钙 (industrial grade)'],
      ['Synonyms', 'Nitrolime · Lime Nitrogen · 石灰氮 · Calcium carbimide'],
      ['CAS No.', '156-62-7'],
      ['EC No.', '205-861-8'],
      ['Molecular formula', 'CaCN₂'],
      ['Molecular weight', '80.10 g/mol'],
      ['Product standard', 'HG/T 5922-2021 Calcium cyanamide for industrial use'],
      ['HS code', '3102 10 00 / 2851 00 00 (as confirmed by the customs port)'],
      ['Appearance', 'Grey-black to dark grey powder or granules'],
    ],
    specKicker: 'Specification',
    specTitle: 'Technical specification — HG/T 5922-2021',
    specHead: ['Parameter', 'Unit', 'Superior Grade', 'First Grade', 'Qualified Grade'],
    specRows: [
      ['Available nitrogen content', '%', '≥ 21.5', '— *', '— *'],
      ['Calcium carbide content', '%', '≤ 0.2', '— *', '— *'],
      ['Sieve residue (180 μm test sieve), mass fraction', '%', '≤ 10', '— *', '— *'],
    ],
    specNote:
      '* Superior-grade limits are per HG/T 5922-2021 and confirmed by third-party testing. First-grade and Qualified-grade values will be published from our controlled copy of the standard — we do not fill specification cells from competitor data.',
    batchKicker: 'Typical batch data',
    batchTitle: 'Typical batch test results',
    batchHead: ['Item', 'Requirement', 'Result', 'Verdict'],
    batchRows: [
      ['Available nitrogen', '≥ 21.5 %', '22.1 %', 'Pass'],
      ['Calcium carbide', '≤ 0.2 %', '0.2 %', 'Pass'],
      ['Sieve residue (180 μm)', '≤ 10 %', '3 %', 'Pass'],
    ],
    batchSource:
      'Source: Test Report No. 24092633, Ningxia Institute of Metrology, Quality Inspection and Testing. Sample No. 24092633; production date 2024-06-07; tested 2024-06-26 to 2024-07-01; sample grade: Superior. Conclusion — all tested items conform to the standard.',
    batchNote:
      'Typical values represent one tested batch and do not constitute a specification guarantee; the batch Certificate of Analysis governs.',
    physKicker: 'Physicochemical',
    physTitle: 'Appearance & physicochemical properties',
    physRows: [
      ['Appearance', 'Grey-black to dark grey powder or granules'],
      ['Melting point', 'approx. 1145–1217 °C (sublimes / decomposes)'],
      ['Bulk density', 'approx. 0.8–1.1 g/cm³, depending on particle size and compaction'],
      ['pH', 'approx. 4.8 (1 wt% aqueous suspension); strongly alkaline after hydrolysis'],
      ['Behaviour in water', 'Hydrolyses slowly to cyanamide and calcium hydroxide; may release acetylene and other flammable gases'],
      ['Solubility', 'Insoluble in organic solvents; reacts with water'],
    ],
    packKicker: 'Packaging & Logistics',
    packTitle: 'Packaging, storage & transport',
    packCards: [
      { t: '25 kg', d: 'PE-lined woven bag' },
      { t: '50 kg', d: 'PE-lined woven bag' },
      { t: '1000 kg', d: 'Moisture-barrier jumbo bag' },
      { t: 'Custom', d: 'Packing on request' },
    ],
    packRows: [
      ['Shelf life', '12 months in sealed original packaging under dry conditions'],
      ['Storage', 'Cool, dry, well-ventilated warehouse; away from ignition, heat, water and moisture; segregated from acids and oxidisers; containers tightly closed'],
      ['Transport', 'UN 1403, Class 4.3 (substances which in contact with water emit flammable gases), PG III; protect from rain and moisture; do not load with acids or oxidisers'],
    ],
    packNote: 'If calcium carbide content is ≤ 0.1 %, transport classification may differ — confirmed against actual batch data and with the carrier.',
    safeKicker: 'Safety',
    safeTitle: 'Safe handling — read the SDS before use',
    safePoints: [
      'In contact with water releases flammable gases (H261); harmful if swallowed (H302)',
      'Causes skin irritation (H315) and serious eye damage (H318); may cause allergic skin reaction (H317) and respiratory irritation (H335)',
      'Do not allow contact with water; handle under inert gas; protect from moisture (P223+P231+P232)',
      'Wear protective gloves, clothing, eye and face protection (P280)',
      'Never use water or water-based extinguishing agents on fire — use dry sand, Class D powder or CO₂',
      'Alcohol consumption in connection with exposure may cause an antabuse-like flushing reaction',
    ],
    safeSignal: 'DANGER — GHS02 · GHS05 · GHS07',
    docsKicker: 'Documents',
    docsTitle: 'Controlled documents, direct download',
    appsKicker: 'Applications',
    appsTitle: 'Where this product works',
    apps: [
      'Chemical intermediates — cyanamide, dicyandiamide, guanidine salts, creatine, guanidine nitrate',
      'Metallurgy — desulphurising / dephosphorising agent for steel; nitriding agent',
      'Agriculture — slow-release nitrogen fertiliser, soil conditioning and disinfection (subject to local registration)',
      'Others — cement additive; wastewater desulphurisation and heavy-metal treatment',
    ],
  },
  zh: {
    kicker: '产品 · CAS 156-62-7',
    title: '氰氨化钙',
    zhName: '石灰氮 · Nitrolime · Lime Nitrogen',
    sub: '工业级氰氨化钙，产自中国宁夏石嘴山。',
    idTitle: '产品标识',
    id: [
      ['产品名称', '氰氨化钙（工业级）/ Calcium Cyanamide'],
      ['别名', '石灰氮、氰氨基化钙 · Nitrolime · Lime Nitrogen · Calcium carbimide'],
      ['CAS 号', '156-62-7'],
      ['EC 号', '205-861-8'],
      ['分子式', 'CaCN₂'],
      ['分子量', '80.10 g/mol'],
      ['产品标准', 'HG/T 5922-2021《工业氰氨化钙》'],
      ['海关编码', '3102 10 00 / 2851 00 00（以报关口岸核定为准）'],
      ['外观', '灰黑色至深灰色粉末或颗粒'],
    ],
    specKicker: '技术指标',
    specTitle: '技术指标 — HG/T 5922-2021',
    specHead: ['项目', '单位', '优等品', '一等品', '合格品'],
    specRows: [
      ['有效氮含量', '%', '≥ 21.5', '— *', '— *'],
      ['碳化钙（电石）含量', '%', '≤ 0.2', '— *', '— *'],
      ['筛余物（180 μm 试验筛）质量分数', '%', '≤ 10', '— *', '— *'],
    ],
    specNote:
      '* 优等品指标依据 HG/T 5922-2021 并经第三方检验确认；一等品与合格品指标将按我司持有的标准受控文本填写后发布，不引用竞争对手数据。',
    batchKicker: '典型批次数据',
    batchTitle: '典型批次检验结果',
    batchHead: ['项目', '技术要求', '实测值', '单项判定'],
    batchRows: [
      ['有效氮含量', '≥ 21.5 %', '22.1 %', '合格'],
      ['碳化钙含量', '≤ 0.2 %', '0.2 %', '合格'],
      ['筛余物（180 μm）', '≤ 10 %', '3 %', '合格'],
    ],
    batchSource:
      '数据来源：宁夏计量质量检验检测研究院检验报告 №24092633，样品编号 24092633，生产日期 2024-06-07，检验日期 2024-06-26 至 2024-07-01，样品等级：优等品。检验结论：该样品所检项目符合标准要求。',
    batchNote: '典型值仅代表该批次，不构成规格保证；以随货检验报告（COA）为准。',
    physKicker: '物化性质',
    physTitle: '外观与物化性质',
    physRows: [
      ['外观', '灰黑色至深灰色粉末或颗粒'],
      ['熔点', '约 1145–1217 ℃（升华 / 分解）'],
      ['堆积密度', '约 0.8–1.1 g/cm³（视粒度与压实状态）'],
      ['pH 值', '约 4.8（1 % 水悬浮液，水解后呈强碱性）'],
      ['水中行为', '遇水缓慢水解，生成单氰胺与氢氧化钙，并可能释放乙炔等可燃气体'],
      ['溶解性', '不溶于有机溶剂；与水反应'],
    ],
    packKicker: '包装与物流',
    packTitle: '包装、贮存与运输',
    packCards: [
      { t: '25 kg', d: '内衬聚乙烯薄膜编织袋' },
      { t: '50 kg', d: '内衬聚乙烯薄膜编织袋' },
      { t: '1000 kg', d: '内衬防潮吨袋' },
      { t: '定制', d: '可按客户要求定制' },
    ],
    packRows: [
      ['保质期', '原包装密封干燥条件下 12 个月'],
      ['贮存', '存放于阴凉、干燥、通风良好的库房，远离火种、热源、水及潮气；与酸类、氧化剂、水源分开存放；容器保持密封'],
      ['运输', 'UN 1403，第 4.3 类遇水放出易燃气体的物质，包装类别 Ⅲ；须防雨防潮，禁止与酸类、氧化剂混装混运'],
    ],
    packNote: '若碳化钙含量 ≤ 0.1 %，运输分类可能不同，请以实际批次检验数据及承运人确认为准。',
    safeKicker: '安全',
    safeTitle: '安全操作 —— 使用前请阅读 SDS',
    safePoints: [
      '遇水放出易燃气体（H261）；吞咽有害（H302）',
      '造成皮肤刺激（H315）与严重眼损伤（H318）；可能引起皮肤过敏反应（H317）和呼吸道刺激（H335）',
      '避免接触水；在惰性气体下操作；防潮（P223+P231+P232）',
      '戴防护手套、防护服、护目镜及面罩（P280）',
      '火灾时严禁使用水及含水灭火剂 —— 使用干砂、D 类干粉或二氧化碳',
      '接触本品期间饮酒可能引起面部潮红等类双硫仑反应',
    ],
    safeSignal: '危险 — GHS02 · GHS05 · GHS07',
    docsKicker: '技术资料',
    docsTitle: '受控文件，直接下载',
    appsKicker: '应用领域',
    appsTitle: '主要用途',
    apps: [
      '化工中间体 —— 生产单氰胺、双氰胺、胍盐、肌酸、硝酸胍及含氮衍生物的基础原料',
      '冶金 —— 钢铁脱硫脱磷剂、渗氮处理剂',
      '农业 —— 缓释氮肥、土壤调理与消毒（须按当地农化登记法规使用）',
      '其他 —— 水泥外加剂、废水脱硫及重金属处理',
    ],
  },
}

export default function Product({ lang }: { lang: Lang }) {
  const t = C[lang]
  return (
    <div>
      {/* Identity above the fold */}
      <section className="bg-gradient-to-br from-[#071E36] to-[#0B2B4B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[#2DD4BF] text-sm font-semibold tracking-[0.2em] uppercase mb-4">{t.kicker}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{t.title}</h1>
            <div className="mt-2 text-xl text-slate-300">{t.zhName}</div>
            <p className="mt-5 text-slate-300 leading-relaxed">{t.sub}</p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {['CAS 156-62-7', 'EC 205-861-8', 'CaCN₂', 'MW 80.10', 'HG/T 5922-2021', 'UN 1403 · 4.3 · PG III'].map((s) => (
                <div key={s} className="bg-white/5 border border-white/15 rounded-md px-3 py-2.5 text-center text-sm text-slate-200 font-medium">
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src="images/product-granules.jpg" alt="Calcium cyanamide" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* Identity table */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-[#0B2B4B] mb-6">{t.idTitle}</h2>
          <div className="rounded-lg border border-slate-200 overflow-hidden">
            {t.id.map(([k, v], i) => (
              <div key={k} className={`grid grid-cols-1 sm:grid-cols-3 ${i % 2 ? 'bg-slate-50' : 'bg-white'}`}>
                <div className="px-5 py-3.5 text-sm font-semibold text-slate-800 sm:border-r border-slate-200">{k}</div>
                <div className="px-5 py-3.5 text-sm text-slate-600 sm:col-span-2">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spec */}
      <section className="bg-[#F4F6F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHead kicker={t.specKicker} title={t.specTitle} />
          <SpecTable head={t.specHead} rows={t.specRows} />
          <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-4xl">{t.specNote}</p>
        </div>
      </section>

      {/* Batch data */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHead kicker={t.batchKicker} title={t.batchTitle} />
          <SpecTable head={t.batchHead} rows={t.batchRows} />
          <div className="mt-5 bg-teal-50 border border-teal-200 rounded-lg p-5">
            <p className="text-sm text-slate-700 leading-relaxed">{t.batchSource}</p>
            <p className="text-sm text-slate-500 leading-relaxed mt-2 italic">{t.batchNote}</p>
          </div>
        </div>
      </section>

      {/* Physicochemical */}
      <section className="bg-[#F4F6F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHead kicker={t.physKicker} title={t.physTitle} />
          <div className="rounded-lg border border-slate-200 overflow-hidden bg-white">
            {t.physRows.map(([k, v], i) => (
              <div key={k} className={`grid grid-cols-1 sm:grid-cols-3 ${i % 2 ? 'bg-slate-50' : 'bg-white'}`}>
                <div className="px-5 py-3.5 text-sm font-semibold text-slate-800 sm:border-r border-slate-200">{k}</div>
                <div className="px-5 py-3.5 text-sm text-slate-600 sm:col-span-2">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging & logistics */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHead kicker={t.packKicker} title={t.packTitle} />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {t.packCards.map((c) => (
              <div key={c.t} className="border border-slate-200 rounded-lg p-5 text-center bg-gradient-to-b from-white to-slate-50">
                <div className="text-2xl font-bold text-[#0E9594]">{c.t}</div>
                <div className="mt-1.5 text-sm text-slate-600">{c.d}</div>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-slate-200 overflow-hidden">
            {t.packRows.map(([k, v], i) => (
              <div key={k} className={`grid grid-cols-1 sm:grid-cols-3 ${i % 2 ? 'bg-slate-50' : 'bg-white'}`}>
                <div className="px-5 py-3.5 text-sm font-semibold text-slate-800 sm:border-r border-slate-200">{k}</div>
                <div className="px-5 py-3.5 text-sm text-slate-600 sm:col-span-2">{v}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500">{t.packNote}</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <img src="images/packaging-bags.jpg" alt="25 kg bags" className="rounded-xl shadow-md object-cover aspect-[4/3] w-full" />
            <img src="images/warehouse-jumbo.jpg" alt="Jumbo bags warehouse" className="rounded-xl shadow-md object-cover aspect-[4/3] w-full" />
            <img src="images/container-loading.jpg" alt="Container loading" className="rounded-xl shadow-md object-cover aspect-[4/3] w-full" />
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="bg-[#071E36]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHead kicker={t.safeKicker} title={t.safeTitle} light />
          <div className="inline-block bg-red-600 text-white text-sm font-bold tracking-wider px-4 py-2 rounded mb-8">
            {t.safeSignal}
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {t.safePoints.map((p) => (
              <div key={p} className="flex items-start gap-3 bg-white/5 border border-white/15 rounded-lg p-4">
                <svg className="w-5 h-5 mt-0.5 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
                <span className="text-sm text-slate-200 leading-relaxed">{p}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <ButtonPrimary to="docs/Huayue-Calcium-Cyanamide-SDS-HY-SDS-CCN-001.pdf">
              {lang === 'zh' ? '下载完整 SDS（PDF）' : 'Download Full SDS (PDF)'}
            </ButtonPrimary>
          </div>
        </div>
      </section>

      {/* Applications summary */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHead kicker={t.appsKicker} title={t.appsTitle} />
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl">
            {t.apps.map((a) => (
              <div key={a} className="flex items-start gap-3 border border-slate-200 rounded-lg p-4 bg-slate-50/50">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0E9594] mt-2 shrink-0" />
                <span className="text-sm text-slate-700 leading-relaxed">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Docs */}
      <section className="bg-[#F4F6F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHead kicker={t.docsKicker} title={t.docsTitle} />
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
