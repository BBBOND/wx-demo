let mobx = require('./mobx');

const settingStoreAutoRun = (key, store, whiteList) => {
  // 将缓存塞入store
  store.prototype.store = JSON.parse(wx.getStorageSync(key) || '{}') || {};
  let storeObj = new store();
  mobx.autorun(() => {
    let app = mobx.toJS(storeObj);
    let temp = {};
    whiteList.map((key) => {
      temp[key] = app[key];
    });
    wx.setStorage({
      key: key,
      data: JSON.stringify(temp)
    });
  });
  return storeObj;
};

const getCacheKey = (key) => `demoCache:DEMO-${key}`;

module.exports = { settingStoreAutoRun, getCacheKey };