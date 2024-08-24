import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Elephant Blog",
  description: "A blog for vuepress-theme-hope",

  head: [
    [
      'link',{rel:'icon',href:'https://img1.baidu.com/it/u=731690937,3182240901&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=321'}
    ]
  ],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
