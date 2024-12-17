import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Manual de Creacion de Pagina Web',
  description: 'Manual de Creación de Pagina Web',

  themeConfig: {
    nav: [
      //{ text: 'Example', link: '/example' },
      //{ text: 'Seccion 1', link: '/seccion1' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Introducción', link: '/introduccion' },
          { text: 'Accerder a Webflow', link: '/paso1' },
          { text: 'Entorno de Trabajo', link: '/paso2' },
          { text: 'Vista de la Barra de Navegación', link: '/paso3' },
          { text: 'Crear tu pagina Web', link: '/paso4' },
          { text: 'Editar Pagina', link: '/paso5' },
          { text: 'Editor de contenido (Componente)', link: '/paso6' },
          { text: 'Editor de contenido (CMS)', link: '/paso7' },
          { text: 'Mesa de Ayuda', link: '/ayuda' },
          { text: 'Glosario', link: '/glosario' },
          { text: 'Preguntas Frecuentes', link: '/preguntas' },
          // ...
        ],
      },
    ],
  },
});
