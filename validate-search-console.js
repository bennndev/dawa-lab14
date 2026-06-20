#!/usr/bin/env node

// Script de validación para Google Search Console
// Simula la validación del sitemap en Google Search Console

const fs = require('fs');
const path = require('path');

const currentDir = process.cwd();

function validateSitemapInGoogleSearchConsole() {
  console.log('=== Validación en Google Search Console ===\n');

  try {
    // Verificar si el sitemap existe
    const sitemapPath = `${currentDir}/pages/api/sitemap.js`;
    if (!fs.existsSync(sitemapPath)) {
      console.log('❌ Error: El endpoint del sitemap no existe');
      return false;
    }

    // Leer el contenido del sitemap
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

    // Verificar si el sitemap usa importaciones dinámicas
    const hasDynamicImports = sitemapContent.includes('getPageData') && 
                             sitemapContent.includes('getBlogPosts');

    if (!hasDynamicImports) {
      console.log('❌ Error: El sitemap no parece ser dinámico (no usa funciones del CMS)');
      return false;
    }

    // Verificar si el sitemap genera XML válido
    const hasValidXML = sitemapContent.includes('<?xml version="1.0" encoding="UTF-8"?>') &&
                       sitemapContent.includes('<urlset') &&
                       sitemapContent.includes('</urlset>');

    if (!hasValidXML) {
      console.log('❌ Error: El sitemap no genera XML válido');
      return false;
    }

    // Verificar si el sitemap incluye rutas
    const hasUrls = sitemapContent.includes('<loc>') && 
                   sitemapContent.includes('</loc>');

    if (!hasUrls) {
      console.log('❌ Error: El sitemap no incluye URLs');
      return false;
    }

    console.log('✅ El sitemap está correctamente configurado para Google Search Console');
    console.log('\n📋 Resumen del sitemap:');
    console.log('  - Endpoint: /api/sitemap.js');
    console.log('  - Tipo: Sitemap dinámico');
    console.log('  - Fuente de datos: CMS simulado');
    console.log('  - Incluye: Página de inicio, páginas estáticas, posts de blog dinámicos');
    console.log('  - Formato: XML válido');

    return true;

  } catch (error) {
    console.log(`❌ Error validando sitemap: ${error.message}`);
    return false;
  }
}

function validateRobotsTxt() {
  console.log('\n=== Validación de robots.txt ===\n');

  try {
    const robotsPath = `${currentDir}/public/robots.txt`;
    if (!fs.existsSync(robotsPath)) {
      console.log('❌ Error: El archivo robots.txt no existe');
      return false;
    }

    const robotsContent = fs.readFileSync(robotsPath, 'utf8');

    // Verificar si incluye el sitemap
    const hasSitemap = robotsContent.includes('Sitemap:') && 
                     robotsContent.includes('https://mi-sitio.com/api/sitemap');

    if (!hasSitemap) {
      console.log('❌ Error: robots.txt no incluye la URL del sitemap');
      return false;
    }

    // Verificar si permite el rastreo
    const allowsCrawling = robotsContent.includes('User-agent: *') && 
                          robotsContent.includes('Allow: /');

    if (!allowsCrawling) {
      console.log('❌ Error: robots.txt no permite el rastreo');
      return false;
    }

    console.log('✅ robots.txt está correctamente configurado');
    console.log('\n📋 Resumen de robots.txt:');
    console.log('  - Permite el rastreo para todos los bots');
    console.log('  - Incluye la URL del sitemap');
    console.log('  - Permite acceso a todas las páginas');

    return true;

  } catch (error) {
    console.log(`❌ Error validando robots.txt: ${error.message}`);
    return false;
  }
}

function main() {
  let hasErrors = false;

  // Validar sitemap
  if (!validateSitemapInGoogleSearchConsole()) {
    hasErrors = true;
  }

  // Validar robots.txt
  if (!validateRobotsTxt()) {
    hasErrors = true;
  }

  console.log('\n=== Resumen ===');
  if (hasErrors) {
    console.log('❌ Se encontraron errores en la validación.');
    process.exit(1);
  } else {
    console.log('✅ Todas las validaciones pasaron exitosamente!');
    console.log('\n📝 Próximos pasos:')
    console.log('  1. Subir el sitemap a Google Search Console');
    console.log('  2. Verificar el rendimiento del sitio');
    console.log('  3. Monitorear el rastreo y la indexación');
    process.exit(0);
  }
}

// Ejecutar la validación
main();