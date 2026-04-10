import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { siGithub } from 'simple-icons'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          githubIconPath: siGithub.path
        }
      }
    })
  ]
})
