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
          { text: 'Intro to Nile', link: '/intro' },
          { text: 'Architecture', link: '/architecture' },
          { text: 'Hardware', link: '/hw' }
        ]
      },
      {
        text: 'Core Concepts',
        collapsed: true,
        items: [
          { text: 'L2 vs L3', link: '/l2l3' },
          { text: 'VLANs vs Segments', link: '/vlanssegments' },
          { text: 'Service Areas', link: '/serviceareas' }
        ]
      },
      {
        text: 'Zero Trust',
        collapsed: true,
        items: [
          { text: 'Zero Trust Access', 
            collapsed: true,
            items: [
              {text: 'MAB', link: '/mab' },
              {text: 'Wired 802.1x', link: '/wired802' },
              {text: 'Wireless 802.1x', link: '/wireless802' },
              {text: 'Wireless SSO', link: '/wirelessSSO' },
              {text: 'UPSK', link: '/upsk' },
              {text: 'Captive Portal', link: '/cp' },
              {text: 'Wired SSO and Guest', link: '/wiredSSO' },
            ]
          },
          { text: 'Zero Trust Policy', 
          collapsed: true,
          items: [
            {text: 'Groups', link: '/groups' },
            {text: 'Policy', link: '/policy' },
          ]
         }
        ]
      },
      {
        text: 'Integration',
        collapsed: true,
        items: [
          { text: 'Firewall and Router', link: '/fwrouter' },
          { text: 'DHCP', link: '/dhcp' },
          { text: 'RADIUS', link: '/radius' },
          { text: 'IDP', link: '/idp' },
          { text: 'Zscaler', link: '/zscaler' },
          { text: 'Palo Alto', link: '/pa' }
        ]
      },
      {
        text: 'Migration',
        collapsed: true,
        items: [
          { text: 'Firewall and Router', link: 'integration/fwrouter' },
          { text: 'DHCP', link: 'integration/dhcp' },
          { text: 'RADIUS', link: 'integration/radius' },
          { text: 'IDP', link: 'integration/idp' },
          { text: 'Zscaler', link: 'integration/zscaler' },
          { text: 'Palo Alto', link: 'integration/pa' }
        ]
      },
      {
        text: 'Solutions',
        collapsed: true,
        items: [
          { text: 'DHPC as a Service', link: 'integration/fwrouter' },
          { text: 'Guest as a Service', link: 'integration/dhcp' },
          { text: 'Self Registration', link: 'integration/radius' }
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
