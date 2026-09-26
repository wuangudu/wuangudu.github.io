export default {
    lang: 'zh-CN',
    title: 'wuangudu ATRI',
    description: '基于 NapCat 的亚托莉 QQ 机器人 —— 养成 · 记忆 · 翻唱 · 语音',
    ignoreDeadLinks: true, 
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'theme-color', content: '#3a8ee6' }],
    ],
    sitemap: { hostname: 'https://wuangudu.github.io' },
    markdown: { lineNumbers: true, image: { lazyLoading: true } },
    themeConfig: {
        logo: '/logo.png',
        search: { provider: 'local' },
        nav: [
            { text: '首页', link: '/' },
            { text: '功能介绍', link: '/features' },
            { text: '常见问题', link: '/faq' },
            { text: '加入 QQ 群', link: 'https://qun.qq.com/universal-share/share?ac=1&authKey=q5cDheD61bsd59f3gWVJ36OnqYJXFouTwgB9tUIkj0eBJw5mOpviDoGxNVtoSlmX&busi_data=eyJncm91cENvZGUiOiIxMTA0MTQ4NjQ1IiwidG9rZW4iOiJSMWhwTEJuREJuOTI1QnZGSjgwMVpwYWpGMHJ1bTkwajhBbGdhdjRpdHp6bGsya2pudGdVc1Bjc2trUDkxMXlyIiwidWluIjoiMTg1MDYzMDY3MCJ9&data=M-qT138VfoVy5SKnO77nicW3PIXOnS7VnxxhddDoehfb_m4qpGzxJ79FNV5hTzjVeA3BmHVSlbxR7GFJB4gfoQ&svctype=4&tempid=h5_group_info', target: '_blank' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/wuangudu/wuangudu.github.io' }
        ],
        footer: {
            message: 'Released under the CC-BY-SA-4.0 License.',
            copyright: 'Copyright © 2020-present <a href="https://www.imki.moe" target="_blank" rel="noopener">wuangudu</a>'
        },
        outline: { label: '本页目录', level: [2, 3] },
        lastUpdated: { text: '最后更新于' },
        docFooter: { prev: '上一篇', next: '下一篇' },
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
    }
}
