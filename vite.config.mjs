import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import tailwindcss from '@tailwindcss/vite'
import generateIndexHtmlPlugin from './vite.generateIndexHtml.js';

export default defineConfig({
  plugins: [	  	
	    tailwindcss(),
		cssInjectedByJsPlugin(),
	    generateIndexHtmlPlugin()  
  ],
  build: {
    lib: {
      entry: 'src/main.js',
      name: 'flockn_roll',
      fileName: () => 'index.js',
      formats: ['umd']
    },
    rollupOptions: {
      output: {
        globals: {}
      }
    }
  }
})