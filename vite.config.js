import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    {
      name: 'html-transform', // Vite 플러그인 이름 설정
      transformIndexHtml(html) {
        // header.html과 footer.html 파일을 읽어와 변수에 저장
        const header = fs.readFileSync(path.resolve(__dirname, 'header.html'), 'utf-8');
        const footer = fs.readFileSync(path.resolve(__dirname, 'footer.html'), 'utf-8');

        // HTML에서 {{header}}, {{footer}}를 실제 내용으로 치환
        return html.replace('{{header}}', header).replace('{{footer}}', footer);
      }
    }
  ],

  build: {
    emptyOutDir: false, // 기존 dist 폴더 삭제 방지 (삭제 시 충돌 방지)
    rollupOptions: {
      input: Object.fromEntries(
        // 현재 디렉토리에서 .html 파일들을 자동으로 감지하여 input 객체 생성
        fs.readdirSync(__dirname)
          .filter(file => file.endsWith('.html'))
          .map(file => [file.replace('.html', ''), resolve(__dirname, file)])
      ),
    },
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // `@` 경로 별칭 설정 (src 디렉토리로 매핑)
    },
  },
});
