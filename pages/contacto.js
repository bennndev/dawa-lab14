// INICIO TAREA: Meta Tags Dinámicos
import Head from "next/head";
// FIN TAREA:

export default function Contacto() {
  return (
    <>
      {/* INICIO TAREA: Meta Tags Dinámicos */}
      <Head>
        <title>Contacto | Soporte y Consultoría de SEO y Desarrollo</title>
        <meta name="description" content="Ponte en contacto con nuestro equipo de expertos en SEO y desarrollo web. Estamos listos para ayudarte a hacer despegar tu proyecto." />
        <meta property="og:title" content="Contacto | Soporte y Consultoría de SEO y Desarrollo" />
        <meta property="og:description" content="Ponte en contacto con nuestro equipo de expertos en SEO y desarrollo web. Estamos listos para ayudarte a hacer despegar tu proyecto." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mi-sitio.com/contacto" />
        <meta property="og:image" content="https://mi-sitio.com/images/og-contact.jpg" />
      </Head>
      {/* FIN TAREA: */}

      <h1>Contacto</h1>
      <p>Formulario de contacto aquí...</p>
    </>
  );
}