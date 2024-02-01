import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nile",
  description: "Technical Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      //{ text: 'Examples', link: '/markdown-examples' }
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
      },
      {
        text: 'Zero Trust',
        collapsed: true,
        items: [
          { text: 'Zero Trust Access', 
            collapsed: true,
            items: [
              {text: 'MAB', link: 'zt/zta/mab' },
              {text: 'Wired 802.1x', link: 'zt/zta/wired802' },
              {text: 'Wireless 802.1x', link: 'zt/zta/wireless802' },
              {text: 'Wireless SSO', link: 'zt/zta/wirelessSSO' },
              {text: 'UPSK', link: 'zt/zta/upsk' },
              {text: 'Captive Portal', link: 'zt/zta/cp' },
              {text: 'Wired SSO and Guest', link: 'zt/zta/wiredSSO' },
            ]
          },
          { text: 'Zero Trust Policy', 
          collapsed: true,
          items: [
            {text: 'Groups', link: 'zt/ztp/groups' },
            {text: 'Policy', link: 'zt/ztp/policy' },
          ]
         }
        ]
      },
      {
        text: 'Integration',
        collapsed: true,
        items: [
          { text: 'Firewall and Router', link: 'integration/fwrouter' },
          { text: 'DHCP', link: 'integration/dhcp' },
          { text: 'RADIUS', link: 'integration/radius' },
          { text: 'IDP', link: 'integration/idp' },
          { text: 'Zscaler', link: 'integration/zscaler' },
          { text: 'Palo Alto', link: 'integration/pa' }
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
