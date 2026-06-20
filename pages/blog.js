// INICIO TAREA: Meta Tags Dinámicos
import Head from "next/head";
// FIN TAREA:

export default function Blog() {
  return (
    <>
      {/* INICIO TAREA: Meta Tags Dinámicos */}
      <Head>
        <title>Blog de SEO y Desarrollo Web | Mi Sitio Optimizado</title>
        <meta name="description" content="Aprende sobre SEO, optimización de rendimiento web y las últimas tendencias tecnológicas para mejorar el posicionamiento de tu sitio en Google." />
        <meta property="og:title" content="Blog de SEO y Desarrollo Web | Mi Sitio Optimizado" />
        <meta property="og:description" content="Aprende sobre SEO, optimización de rendimiento web y las últimas tendencias tecnológicas para mejorar el posicionamiento de tu sitio en Google." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mi-sitio.com/blog" />
        <meta property="og:image" content="https://mi-sitio.com/images/og-blog.jpg" />
      </Head>
      {/* FIN TAREA: */}

      <h1>Blog</h1>
      <p>Contenido del blog aquí...</p>
    </>
  );
}