
module.exports = {
  title: "MNI UI",
  description: "Just playing around.",
  // lang: "en-US",
  themeConfig: {
    // 展示搜索框
    algolia: {
      appKey: "",
      indexName: "",
      searchParameters: {
        faeFilters: ["tags:guide,api"]
      }
    },

    nav: [{
      text: "首页",
      link: "/components/home/",
    },
    {
      text: "组件",
      link: "/components/home/",
    },

    {
      text: "GitHub",
      link: "https://github.com/lxKylin/vitepressdemo",
    },
    ],

    // 侧边栏
    sidebar: [
      {
        text:'首页',
        link:'/components/icon/',
        items:[
          {
            text:'版本',
            link:'/components/home/home'
          },
          {
            text:'版本1',
            link:'/components/icon/'
          },
        ]

      },
      // {
      //   text:'版本管理',
      //   link:'/components/home/git'
      // }
    ]


  },
  // markdown: {
  //   config: (md) => {
  //     const {
  //       demoBlockPlugin
  //     } = require("vitepress-theme-demoblock")
  //     md.use(demoBlockPlugin)
  //   }
  // }
}

function getDemoSidebar() {
  return [
    {
      text: "介绍"
    },
    {
      text: "更新日志",
      children: [{
        text: "新特性",
        link: "/components/log/"
      }]
    },
    {
      text: "开发指南",
      children: [{
        text: "安装"
      }]
    },
    {
      text: "快速开始",
      link: "/"
    },
    {
      text: "基础组件",
      children: [{
        text: "Button 按钮",
        link: "/components/button/"
      },
      {
        text: "Icon 图标",
        link: "/components/icon/"
      },
      ],
    },
    {
      text: "布局组件",
    },
  ]
}



//sidebar: {'/guide/': [{text: '指南',items: [{ text: '安装', link: '/guide/installation' },{ text: '快速开始', link: '/guide/quickStart' }]}],'/component/': [{text: '基础组件',items: [{ text: 'Icon', link: '/component/icon' }]}]}}








