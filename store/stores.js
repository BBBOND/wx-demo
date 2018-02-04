const { settingStoreAutoRun, getCacheKey } = require('../libs/storeCache.js');
let { IndexStore, indexWhiteList } = require('../pages/index/indexStore');

const stores = {
  index: settingStoreAutoRun(getCacheKey('INDEX'), IndexStore, indexWhiteList),
};

module.exports = stores;