// Simulación de base de datos/CMS para obtener datos dinámicos
const mockDB = {
  pages: [
    {
      id: 1,
      path: "/",
      title: "Mi Sitio Optimizado - Home",
      description: "Página de inicio de un sitio web optimizado para SEO con contenido de calidad y experiencia de usuario excepcional.",
      ogImage: "/images/og-home.jpg",
      ogType: "website"
    },
    {
      id: 2,
      path: "/blog",
      title: "Blog - Artículos y Guías sobre SEO y Desarrollo Web",
      description: "Descubre artículos sobre SEO, desarrollo web, marketing digital y las últimas tendencias tecnológicas.",
      ogImage: "/images/og-blog.jpg",
      ogType: "website"
    },
    {
      id: 3,
      path: "/contacto",
      title: "Contacto - Ponte en Contacto con Nosotros",
      description: "Contáctanos para consultas, colaboraciones o soporte. Estamos aquí para ayudarte.",
      ogImage: "/images/og-contact.jpg",
      ogType: "website"
    }
  ],
  blogPosts: [
    {
      id: 1,
      path: "/blog/seo-basico",
      title: "Guía Básica de SEO: Los Fundamentos que Necesitas Conocer",
      description: "Aprende los conceptos básicos de SEO y cómo optimizar tu sitio web para los motores de búsqueda.",
      ogImage: "/images/og-blog-seo-basico.jpg",
      ogType: "article",
      publishedAt: "2024-01-15"
    },
    {
      id: 2,
      path: "/blog/guia-desarrollo-web",
      title: "Guía Completa de Desarrollo Web en 2024",
      description: "Descubre las últimas tendencias en desarrollo web, tecnologías y mejores prácticas.",
      ogImage: "/images/og-blog-desarrollo-web.jpg",
      ogType: "article",
      publishedAt: "2024-02-20"
    },
    {
      id: 3,
      path: "/blog/optimizacion-rendimiento",
      title: "Optimización de Rendimiento: Cómo Hacer tu Sitio Web Más Rápido",
      description: "Técnicas avanzadas para mejorar la velocidad y el rendimiento de tu sitio web.",
      ogImage: "/images/og-blog-optimizacion.jpg",
      ogType: "article",
      publishedAt: "2024-03-10"
    }
  ]
};

export async function getPageData(path) {
  // Simular una llamada a base de datos/CMS
  return new Promise((resolve) => {
    setTimeout(() => {
      const page = mockDB.pages.find(p => p.path === path);
      resolve(page);
    }, 50); // Simular latencia de base de datos
  });
}

export async function getBlogPosts() {
  // Simular una llamada a base de datos/CMS para obtener posts de blog
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDB.blogPosts);
    }, 50); // Simular latencia de base de datos
  });
}