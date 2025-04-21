import fs from 'fs';
import path from 'path';
import pkg from './package.json' assert { type: 'json' };

// define plugin
export default function generateIndexHtmlPlugin() {
  return {
    name: 'generate-index-html',
    apply: 'build', // or 'serve' to run in dev too
    enforce: 'post',
    closeBundle() {
      const name = pkg.name?.split('/').pop() ?? 'explorable';
      const title = pkg.title;
	  const subtitle = pkg.subtitle;
	  const description = pkg.description;
      const namespace = name.replace(/[-\s]/g, '_');
      const containerId = `${namespace}_container`;

      const templatePath = path.resolve('./index.template.html');
      const outputPath = path.resolve('./dist/index.html');

      let html = fs.readFileSync(templatePath, 'utf8');
      html = html
        .replace(/{{TITLE}}/g, title)
	  	.replace(/{{SUBTITLE}}/g, subtitle)
	  	.replace(/{{DESCRIPTION}}/g, description)
        .replace(/{{NAMESPACE}}/g, namespace)
        .replace(/{{CONTAINER_ID}}/g, containerId);
	  
	  
	  console.log(`📝 Attempting to write to: ${outputPath}`);
	  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
	  fs.writeFileSync(outputPath, html);
	  console.log(`✅ Wrote index.html successfully`);
	  console.log('❓ File exists immediately after write:', fs.existsSync(outputPath));
      console.log(`📝 [vite] index.html generated for ${namespace}`);
	 
    }
  };
}