var CONST = require("./const");

module.exports = {
  title: 'Today I Learn', // 사이트 타이틀
  description: '배운건 기록하자.',
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
		},
        {
            title: 'Kotlin',
            children: CONST.Kotlin
        },
        {
            title: 'Android',
            children: CONST.Android
        },
	]
  }
}
