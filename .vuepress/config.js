var CONST = require("./const");

module.exports = {
  title: 'vuepress-stater', // 사이트 타이틀
  description: 'vuepress로 만든 문서입니다.',
  base: "/til/",
  themeConfig: {
    logo: 'https://avatars1.githubusercontent.com/u/18749057?s=460&v=4', // 로고 이미지
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: [
		{
			title: 'Java',
			children: CONST.Java
		}
	]
  }
}
