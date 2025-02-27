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

  build: {
    emptyOutDir: false, 
    assetsDir: 'resources', // assets -> resources 변경
    rollupOptions: {
      input: Object.fromEntries(
        fs.readdirSync(__dirname)
          .filter(file => file.endsWith('.html'))
          .map(file => [
            file.replace('.html', ''), 
            resolve(__dirname, file)
          ])
      ),
    },
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});