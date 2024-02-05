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
          { text: 'Nile Architecture', link: '/architecture' },
          { text: 'Hardware', link: '/hw' }
        ]
      },
      {
        text: 'Core Concepts',
        collapsed: true,
        items: [
          { text: 'L2 vs L3', link: '/l2l3' },
          { text: 'VLANs vs Segments', link: '/vlanssegments' },
          { text: 'Service Areas', link: '/serviceareas' },
          { text: 'RBAC', link: '/rbac' },
          { text: 'Nile Day 2', link: '/nileday2' },
          { text: 'Deployemnt', link: '/deployment' },
        ]
      },
      {
        text: 'Campus Zero Trust',
        collapsed: true,
        items: [
          { text: 'Campus Zero Trust Access', 
            collapsed: true,
            items: [
              {text: 'MAB', link: '/ztamab' },
              {text: 'Wired 802.1x', link: '/ztawired802' },
              {text: 'Wireless 802.1x', link: '/ztawireless802' },
              {text: 'Wireless SSO', link: '/ztawirelessSSO' },
              {text: 'UPSK', link: '/ztaupsk' },
              {text: 'Captive Portal', link: '/ztacp' },
              {text: 'Wired SSO and Guest', link: '/ztawiredSSO' },
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
          { text: 'Firewall and Router', link: '/integrationrouter' },
          { text: 'DHCP', link: '/integrationdhcp' },
          { text: 'RADIUS', link: '/integrationradius' },
          { text: 'IDP', link: '/integrationidp' },
          { text: 'Zscaler', link: '/integrationzscaler' },
          { text: 'Palo Alto', link: '/integrationpa' }
        ]
      },
      {
        text: 'Migration',
        collapsed: true,
        items: [
          { text: 'Firewall Objects', link: '/fwobjects' },
          { text: 'VLANs to Segments', link: '/migrationvlans' },
          { text: 'Architecture ', link: '/archmigration' }
        ]
      },
      {
        text: 'Solutions',
        collapsed: true,
        items: [
          { text: 'DHPC as a Service', link: '/dhcpservice' },
          { text: 'Guest as a Service', link: '/guestservice' },
          { text: 'Self Registration', link: '/selfregister' }
        ]
      },
      {
        text: 'Monitoring and Troubleshooting',
        collapsed: true,
        items: [
          { text: 'SLA', link: '/monsla' },
          { text: 'Infrastructure', link: '/moninfra' },
          { text: 'Applications', link: '/monapps' },
          { text: 'Devices', link: '/mondevices' },
          { text: 'Alerts and Audit', link: '/monalerts' }
        ]
      },
      {
        text: 'Settings',
        collapsed: true,
        items: [
          { text: 'DHPC as a Service', link: '/dhcpservice' },
          { text: 'Guest as a Service', link: '/guestservice' },
          { text: 'Self Registration', link: '/selfregister' }
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
