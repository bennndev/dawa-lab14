#!/usr/bin/env node

// Script de validación del Meta Tags Checker
// Simula la validación de meta tags para las páginas

const fs = require('fs');
const path = require('path');

// Obtener la ruta del directorio actual
const currentDir = process.cwd();

// Rutas de las páginas a validar
const pages = [
  { path: `${currentDir}/pages/index.js`, name: 'Home' },
  { path: `${currentDir}/pages/blog.js`, name: 'Blog' },
  { path: `${currentDir}/pages/contacto.js`, name: 'Contacto' }
];

function validatePageMetaTags(filePath, pageName) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];
  const suggestions = [];

  // Verificar si tiene <Head>
  if (!content.includes('<Head>')) {
    issues.push('Falta la etiqueta <Head>');
  }

  // Verificar si tiene title
  if (!content.includes('<title>')) {
    issues.push('Falta la etiqueta <title>');
  } else {
    // Verificar longitud del título (recomendación: 50-60 caracteres)
    const titleMatch = content.match(/<title>(.*?)<\/title>/);
    if (titleMatch && titleMatch[1].length > 60) {
      suggestions.push(`El título es muy largo (${titleMatch[1].length} caracteres). Recomendado: 50-60 caracteres.`);
    }
  }

  // Verificar si tiene description
  if (!content.includes('<meta name="description"')) {
    issues.push('Falta la meta descripción');
  } else {
    // Verificar longitud de la descripción (recomendación: 150-160 caracteres)
    const descMatch = content.match(/<meta name="description" content="(.*?)"/);
    if (descMatch && descMatch[1].length > 160) {
      suggestions.push(`La descripción es muy larga (${descMatch[1].length} caracteres). Recomendado: 150-160 caracteres.`);
    }
  }

  // Verificar si tiene Open Graph tags
  if (!content.includes('property="og:title"')) {
    suggestions.push('Considera agregar etiquetas Open Graph para mejor compartición en redes sociales');
  }

  return { issues, suggestions };
}

function validateSitemap() {
  const sitemapPath = `${currentDir}/pages/api/sitemap.js`;
  const content = fs.readFileSync(sitemapPath, 'utf8');

  const issues = [];
  const suggestions = [];

  // Verificar si usa importaciones dinámicas
  if (!content.includes('import') || !content.includes('getPageData')) {
    issues.push('El sitemap no parece ser dinámico (no usa importaciones de CMS)');
  }

  // Verificar si tiene rutas dinámicas
  if (!content.includes('dynamic') && !content.includes('blog')) {
    suggestions.push('Considera agregar más rutas dinámicas (ej: rutas de blog)');
  }

  return { issues, suggestions };
}

function main() {
  console.log('=== Validación del Meta Tags Checker ===\n');

  let hasErrors = false;

  // Validar páginas
  console.log('Validando páginas:');
  pages.forEach(page => {
    try {
      const validation = validatePageMetaTags(page.path, page.name);
      console.log(`\n📄 ${page.name} (${page.path}):`);

      if (validation.issues.length > 0) {
        console.log('  ❌ Problemas encontrados:');
        validation.issues.forEach(issue => console.log(`    - ${issue}`));
        hasErrors = true;
      } else {
        console.log('  ✅ Sin problemas');
      }

      if (validation.suggestions.length > 0) {
        console.log('  💡 Sugerencias:');
        validation.suggestions.forEach(suggestion => console.log(`    - ${suggestion}`));
      }
    } catch (error) {
      console.log(`\n❌ Error validando ${page.name}: ${error.message}`);
      hasErrors = true;
    }
  });

  // Validar sitemap
  console.log('\n📋 Validando sitemap:');
  try {
    const sitemapValidation = validateSitemap();
    if (sitemapValidation.issues.length > 0) {
      console.log('  ❌ Problemas encontrados:');
      sitemapValidation.issues.forEach(issue => console.log(`    - ${issue}`));
      hasErrors = true;
    } else {
      console.log('  ✅ Sin problemas');
    }

    if (sitemapValidation.suggestions.length > 0) {
      console.log('  💡 Sugerencias:');
      sitemapValidation.suggestions.forEach(suggestion => console.log(`    - ${suggestion}`));
    }
  } catch (error) {
    console.log(`\n❌ Error validando sitemap: ${error.message}`);
    hasErrors = true;
  }

  console.log('\n=== Resumen ===');
  if (hasErrors) {
    console.log('❌ Se encontraron errores. Por favor, revisa los problemas listados.');
    process.exit(1);
  } else {
    console.log('✅ Todas las validaciones pasaron exitosamente!');
    process.exit(0);
  }
}

// Ejecutar la validación
main();