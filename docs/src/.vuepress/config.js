const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'React JS Training',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  base: "/react-training/",
  locales: {
    "/": {
      lang: "en-US",// this will be set as the lang attribute on <html>
      title: "React Training",
      description: "React training docs"
    },

    /*"/fr/": {
      lang: "fr-FR",
      title: "Formation React",
      description: "Support de formation React"
    }*/
  },
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#61DAFB' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [],
    locales: {
      "/": {
        selectText: "Language",
        label: "English",
        sidebar: {
          '/guide/': [
            {
              title: 'Training',
              collapsable: false,
              children: [
                '',
                'start-using',
                'how-it-works',
                'first-application',
                'popular-libraries',
                'not-just-web'
              ]
            }
          ],
        }
      },

      /*"/fr/": {
        selectText: "Langue",
        label: "Français",
        sidebar: [
          "/fr/",
          "/fr/presentation/",
          "/fr/outillage/",
          "/fr/swift/",
          "/fr/pour-aller-plus-loin/",
          "/fr/ecosysteme/"
        ]
      }*/
    },
    sidebar: {
      '/guide/': [
        {
          title: 'Training',
          collapsable: false,
          children: [
            '',
            'start-using',
            'how-it-works',
            'first-application',
            'popular-libraries',
            'not-just-web'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    'vuepress-plugin-global-toc',
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
