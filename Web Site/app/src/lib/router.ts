import { useCallback, useEffect, useState } from 'react'

export type Lang = 'en' | 'zh'

export interface Route {
  lang: Lang
  page: string
}

const PAGES = ['home', 'product', 'applications', 'manufacturing', 'quality', 'resources', 'about', 'contact']

export function parseHash(): Route {
  const h = window.location.hash.replace(/^#\/?/, '')
  const [langRaw, pageRaw] = h.split('/')
  const lang: Lang = langRaw === 'zh' ? 'zh' : 'en'
  const page = PAGES.includes(pageRaw) ? pageRaw : 'home'
  return { lang, page }
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(parseHash())
  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash())
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    }
    window.addEventListener('hashchange', onChange)
    if (!window.location.hash) window.location.hash = '#/en/'
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}

export function useNavigate() {
  return useCallback((lang: Lang, page: string) => {
    window.location.hash = `#/${lang}/${page}`
  }, [])
}

export function href(lang: Lang, page: string) {
  return `#/${lang}/${page}`
}
