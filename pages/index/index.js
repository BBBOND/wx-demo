//index.js
//获取应用实例
const regeneratorRuntime = require('../../libs/runtime');
const app = getApp();
let observer = require('../../libs/observer').observer;
let { combine } = require('../../libs/combine');
let search = require('./search/search');

let page = {
  props: {
    getInTeater: app.globalData.index.getInTeater,
    city: app.globalData.index.city,
    index: app.globalData.index
  },
  data: {
    hasMore: false,
  },
  onLoad: function () {

  },
  onShow: function () {

  },
  onLoadMore: function(e) {
    app.doWithLoading(async () => {
      this.setData({
        hasMore: await this.props.getInTeater('', app.globalData.index.start + 20)
      });
      
    }, '', true)
  },
};

combine(page, search);
Page(observer(page));
