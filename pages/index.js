import dynamic from "next/dynamic";
// INICIO TAREA: Meta Tags Dinámicos
import Head from "next/head";
// FIN TAREA:

const DynamicComponent = dynamic(
  () => import("../components/LargeComponent"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      {/* INICIO TAREA: Meta Tags Dinámicos */}
      <Head>
        <title>Inicio | Expertos en Optimización SEO y Desarrollo Web</title>
        <meta name="description" content="Creamos y optimizamos sitios web de alto rendimiento con las mejores prácticas de SEO para mejorar tu visibilidad en Google." />
        <meta property="og:title" content="Inicio | Expertos en Optimización SEO y Desarrollo Web" />
        <meta property="og:description" content="Creamos y optimizamos sitios web de alto rendimiento con las mejores prácticas de SEO para mejorar tu visibilidad en Google." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mi-sitio.com/" />
        <meta property="og:image" content="https://mi-sitio.com/images/og-home.jpg" />
      </Head>
      {/* FIN TAREA: */}

      <h1>Bienvenido</h1>

      <DynamicComponent />
    </>
  );
}
