import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import tailwindcss from '@tailwindcss/vite'
import generateIndexHtmlPlugin from './vite.generateIndexHtml.js';
import generateReadmePlugin from './vite.generateREADME.js';
import virtualMetaPlugin from './vite.virtualMeta.js';

export default defineConfig({
  plugins: [	  	
	  	virtualMetaPlugin(),
	    tailwindcss(),
		cssInjectedByJsPlugin(),
	    generateIndexHtmlPlugin(),
	    generateReadmePlugin(),
  ],
  build: {
	lib: {
	    entry: './src/main.js',
	    name: 'flockn_roll',
	    fileName: (format) => `index.${format}.js`, //fileName: () => 'index.js',
	    formats: ['es','umd'] // added "es" format
	},
    rollupOptions: {
      output: {
        globals: {}
      }
    }
  }
})