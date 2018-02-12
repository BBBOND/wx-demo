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

[微信小程序自制脚手架](http://blog.bbbond.cn/2018/02/04/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%87%AA%E5%88%B6%E8%84%9A%E6%89%8B%E6%9E%B6/)

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
- 请求中

![](https://raw.githubusercontent.com/BBBOND/wx-demo/master/screenshot/ScreenShot01.png)
- 请求结束

![](https://raw.githubusercontent.com/BBBOND/wx-demo/master/screenshot/ScreenShot00.png)
### 其他

脚手架还有很多缺陷，欢迎一起修改完善