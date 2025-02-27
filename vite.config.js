import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        const header = fs.readFileSync(path.resolve(__dirname, 'header.html'), 'utf-8');
        const footer = fs.readFileSync(path.resolve(__dirname, 'footer.html'), 'utf-8');

        return html.replace('{{header}}', header).replace('{{footer}}', footer);
      }
    }
  ],

  css: {
    devSourcemap: true, // 개발 소스맵 사용
  },

  build: {
    emptyOutDir: false, 
    assetsDir: 'resources', // assets -> resources 변경
    sourcemap: true, // 배포 소스맵 사용
    rollupOptions: {
      input: Object.fromEntries(
        fs.readdirSync(__dirname)
          .filter(file => file.endsWith('.html'))
          .map(file => [
            `html/${file.replace('.html', '')}`,  // html 폴더 내에 배치되도록 조정
            resolve(__dirname, file)
          ])
      ),
      output: {
        // entryFileNames: 'html/[name].js', // js 파일도 html 폴더에 위치
        // chunkFileNames: 'html/[name]-[hash].js',
        assetFileNames: 'html/[name]-[hash][extname]'
      }
    },
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
