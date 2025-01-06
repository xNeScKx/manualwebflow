import { defineConfig } from 'vitepress';


// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Manual de Creación de Página Web',
  description: 'Manual de Creación de Página Web',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/img/logo.png' }]
  ],
 
  
  themeConfig: {
    logo: 'img/logo.png', // Aquí agregas la ruta de tu logo
    //nav: [
    //{ text: 'Example', link: '/example' },
    //{ text: 'Seccion 1', link: '/seccion1' },

    //{
    //text: 'Dropdown Menu',
    //items: [
    //{ text: 'Item A', link: '/item-1' },
    //     { text: 'Item B', link: '/item-2' },
    //     { text: 'Item C', link: '/item-3' },
    //],
    //},

    // ...
    //],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          {
            text: 'Introducción',
            collapsed: true,   // Opcional: inicia colapsado
            items: [
              { text: 'Introducción', link: '/introduccion' },
              { text: 'Accerder a Webflow', link: '/accesoawebflow' },
              { text: 'Entorno de Trabajo', link: '/entornodetrabajo' },
              { text: 'Vista de la Barra de Navegación', link: '/barradenavegacion' },
            ],
          },
          {
            text: 'Crea tu pagina',
            collapsed: true,   // Opcional: inicia colapsado
            items: [
              { text: 'Paso 1', link: '/creaciondepagina' },
              { text: 'Paso 2', link: '/ubicacionpagina' },
              { text: 'Paso 3, Editor de contenido (Componente)', link: '/ediciondecontenido' },
              { text: 'Paso 4, Editor de contenido (CMS)', link: '/edicioncontenidocms' },
            ],
          },
          {
            text: 'Mesa de ayuda',
            collapsed: true,   // Opcional: inicia colapsado
            items: [
              { text: 'Mesa de Ayuda', link: '/ayuda' },
              { text: 'Glosario', link: '/glosario' },
              { text: 'Preguntas Frecuentes', link: '/preguntas' },
            ],
          },
          {
            
            text: 'Glosario de Componentes',
            collapsed: true,   // Opcional: inicia colapsado
            items: [
              { text: 'Componentes', link: '/glosariocomponentes' },

            ],
          },
        ],
      },
    ],
  },
});
