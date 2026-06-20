// INICIO TAREA: Sitemap Dinámico
const BASE_URL = "https://mi-sitio.com";

// Importar las funciones del CMS
import { getPageData, getBlogPosts } from "../../lib/cms.ts";

export default async function handler(req, res) {
  // Obtener rutas dinámicas del CMS
  const homePage = await getPageData("/");
  const urls = homePage ? ["/"] : [];

  // Agregar rutas de páginas estáticas
  const staticPages = ["/blog", "/contacto"];
  urls.push(...staticPages);

  // Obtener posts de blog dinámicos del CMS
  const blogPosts = await getBlogPosts();
  const dynamicBlogRoutes = blogPosts.map(post => post.path);
  urls.push(...dynamicBlogRoutes);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`)
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
// FIN TAREA:

