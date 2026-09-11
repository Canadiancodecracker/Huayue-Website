import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

const ICP_FALLBACK_MARKER = '<!-- VITE_ICP_FALLBACK -->'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const icpNumber = env.VITE_ICP_NUMBER?.trim() ?? ''

  return {
    base: './',
    plugins: [
      {
        name: 'inject-icp-fallback',
        transformIndexHtml(html) {
          if (!html.includes(ICP_FALLBACK_MARKER)) {
            throw new Error('ICP fallback marker is missing from index.html')
          }

          const fallback = icpNumber
            ? `<div style="min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;padding:24px;font-family:system-ui,sans-serif">
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer" style="font-size:12px;color:#64748b;text-decoration:none">
          ${icpNumber}
        </a>
      </div>`
            : ''

          return html.replace(ICP_FALLBACK_MARKER, fallback)
        },
      },
      inspectAttr(),
      react(),
    ],
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})
