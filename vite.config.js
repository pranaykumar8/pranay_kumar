// import react from '@vitejs/plugin-react'
// import { defineConfig } from 'vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/my_portfolio/',

// })

// import react from '@vitejs/plugin-react'
// import { defineConfig } from 'vite'

// export default defineConfig({
//   plugins: [react()],
//   base: '/my_portfolio/', // ✅ Use this if deploying to GitHub Pages
// })

// import react from '@vitejs/plugin-react'
// import { defineConfig } from 'vite'

// export default defineConfig({
//   plugins: [react()],
//   base: '/my_portfolio/', // ✅ Correct GitHub Pages base path (matches repo name)
// })


// import react from '@vitejs/plugin-react'
// import { defineConfig } from 'vite'

// export default defineConfig({
//   plugins: [react()],
//   base: '/my_portfolio/', // ✅ NO .git and include trailing slash
// })

// export default defineConfig({
//   plugins: [react()],
//   base: '/my_portfolio/', // ✅ Correct path for GitHub Pages
// });

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my_portfolio/', // ✅ Correct path for GitHub Pages
});

