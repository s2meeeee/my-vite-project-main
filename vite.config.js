import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        // header.html과 footer.html의 내용을 읽어옴
        const header = fs.readFileSync(path.resolve(__dirname, 'header.html'), 'utf-8')
        const footer = fs.readFileSync(path.resolve(__dirname, 'footer.html'), 'utf-8')

        // HTML에서 {{header}}, {{footer}}를 실제 내용으로 치환
        return html
          .replace('{{header}}', header)
          .replace('{{footer}}', footer)
      }
    }
  ],
  build: {
    emptyOutDir: false, // 기존 dist 폴더 삭제 안 함 (삭제 시 충돌 방지)
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
      },
    },
  },
})
