export default {
  base:'/Hola/',
  themeConfig: {
    siteTitle: false,
    logo: "/logo.png",
    nav: [
      { text: "指南", link: "/guild/installation" },
      { text: "组件", link: "/examples/button/" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/kfhechenglong/Hola" }],
    sidebar: {
      "/guild/": [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/guild/installation",
            },
            {
              text: "快速开始",
              link: "/guild/quickstart",
            },
          ],
        },
        {
          text: "进阶",
          items: [
            {
              text: "xx",
              link: "/xx",
            },
          ],
        },
      ],
      "/examples/": [
        {
          text: "基础组件",
          items: [
            {
              text: "Button按钮",
              link: "/examples/button/",
            },
            {
              text: "Icon图标",
              link: "/examples/Icon/",
            },
          ],
        },
      ],
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present <a href="https://github.com/kfhechenglong">绝对零度</a>'
    }
  },
};
