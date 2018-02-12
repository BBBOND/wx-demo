const regeneratorRuntime = require('../../../libs/runtime');
const app = getApp();

module.exports = {
  props: {
    getInTeater: app.globalData.index.getInTeater,
    index: app.globalData.index,
  },
  data: {
    search: {
        currentCity: '',
        city: app.globalData.index.city,
        title: app.globalData.index.title,
    }
  },
  __onInputCity: function(e) {
    this.setData({
      search: {
        ...this.data.search,
        currentCity: e.detail.value
      }
    })
  },
  __onSearch: function(e) {
    console.log('onSearch', this.data.search.currentCity);
    app.doWithLoading(async () => {
      await this.props.getInTeater(this.data.search.currentCity, 0);
    }, '', true, undefined, () => {
      this.setData({
        search: {
          city: this.props.index.city,
          title: this.props.index.title,
        },
        hasMore: true,
      });
    })
  },
};
