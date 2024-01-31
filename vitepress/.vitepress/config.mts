import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nile",
  description: "Technical Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Overview',
        collapsed: true,
        items: [
          { text: 'Intro to Nile', link: 'overview/intro' },
          { text: 'Architecture', link: 'overview/architecture' },
          { text: 'Hardware', link: 'overview/hw' }
        ]
      },
      {
        text: 'Core Concepts',
        collapsed: true,
        items: [
          { text: 'L2 vs L3', link: 'coreconcepts/l2l3' },
          { text: 'VLANs vs Segments', link: 'coreconcepts/vlanssegments' },
          { text: 'Service Areas', link: 'coreconcepts/serviceareas' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
        provider: 'local'
      }
  }
})
