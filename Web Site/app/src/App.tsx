import React, { useEffect } from 'react'
import { useHashRoute } from './lib/router'
import { Header, Footer } from './components/Layout'
import Home from './pages/Home'
import Product from './pages/Product'
import Applications from './pages/Applications'
import Manufacturing from './pages/Manufacturing'
import Quality from './pages/Quality'
import Resources from './pages/Resources'
import About from './pages/About'
import Contact from './pages/Contact'

const TITLES: Record<string, { en: string; zh: string }> = {
  home: { en: 'Calcium Cyanamide Manufacturer', zh: '氰氨化钙制造商' },
  product: { en: 'Calcium Cyanamide CAS 156-62-7', zh: '氰氨化钙 CAS 156-62-7' },
  applications: { en: 'Applications', zh: '应用领域' },
  manufacturing: { en: 'Manufacturing', zh: '智能制造' },
  quality: { en: 'Quality', zh: '质量管理' },
  resources: { en: 'Resources', zh: '技术资料' },
  about: { en: 'About Huayue', zh: '关于华岳' },
  contact: { en: 'Contact', zh: '联系我们' },
}

export default function App() {
  const { lang, page } = useHashRoute()

  useEffect(() => {
    const t = TITLES[page] || TITLES.home
    document.title =
      lang === 'zh'
        ? `${t.zh} | 石嘴山市华岳新材料科技有限公司`
        : `${t.en} | Shizuishan Huayue New Material Technology Co., Ltd.`
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
  }, [lang, page])

  const pages: Record<string, React.ReactElement> = {
    home: <Home lang={lang} />,
    product: <Product lang={lang} />,
    applications: <Applications lang={lang} />,
    manufacturing: <Manufacturing lang={lang} />,
    quality: <Quality lang={lang} />,
    resources: <Resources lang={lang} />,
    about: <About lang={lang} />,
    contact: <Contact lang={lang} />,
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <Header lang={lang} page={page} />
      <main>{pages[page] || pages.home}</main>
      <Footer lang={lang} />
    </div>
  )
}
