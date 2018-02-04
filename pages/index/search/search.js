const regeneratorRuntime = require('../../../libs/runtime');
const app = getApp();

module.exports = {
  props: {
    getInTeater: app.globalData.index.getInTeater,
  },
  data: {
    currentCity: '',
    city: app.globalData.index.city,
    title: app.globalData.index.title,
  },
  onInputCity: function(e) {
    this.setData({
      currentCity: e.detail.value
    })
  },
  onSearch: function(e) {
    console.log('onSearch', this.data.currentCity)
    app.doWithLoading(async () => {
      await this.props.getInTeater(this.data.currentCity, 0);
    }, '', true, undefined, () => {
      this.setData({
        city: app.globalData.index.city,
        title: app.globalData.index.title,
        hasMore: true,
      });
    })
  },
};
