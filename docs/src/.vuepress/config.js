module.exports = {
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

  head: [
    ['meta', { name: 'theme-color', content: '#3366ff' }],
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
        sidebar: [
          "/",
          "/presentation/",
          "/tooling/",
          "/to-go-further/",
          "/ecosystem/"
        ]
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
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    'vuepress-plugin-global-toc'
  ]
}
