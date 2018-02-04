## 微信小程序快速开发脚手架

本脚手架包含：
- mobx
- mobx缓存思路
- 组件化思路
- 网络层封装
- async/await支持
- momentjs（非必须）

本脚手架理论上比较适合小项目，而对于大型项目推荐使用[wepy](https://tencent.github.io/wepy/)开发框架，[GitHub地址](https://github.com/Tencent/wepy)（本人未曾使用，不过博客论坛中多人推荐）

### 博客说明

敬请期待

### 目录结构
```
├── app.js
├── app.json
├── app.wxss
├── assets
├── constants
│   └── CONFIG.js
├── component
├── libs
│   ├── combine.js
│   ├── mobx.min.js  --56KB
│   ├── moment.min.js  --35KB
│   ├── observer.js
│   ├── runtime.js
│   └── storeCache.js
├── pages
│   └── index
│       ├── index.js
│       ├── index.wxml
│       ├── index.wxss
│       ├── indexStore.js
│       ├── request.js
│       └── search
│           ├── search.js
│           ├── search.wxml
│           └── search.wxss
├── project.config.json
├── store
│   └── stores.js
└── utils
    ├── baseRequest.js
    └── fetchHelper.js
```

### demo截图

### 其他

脚手架还有很多缺陷，欢迎一起修改完善