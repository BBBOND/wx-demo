//app.js
const regeneratorRuntime = require('./libs/runtime');
const stores = require('./store/stores.js');
let observer = require('./libs/observer.js').observer;

App(observer({
  globalData: {
    ...stores
  },
  onLaunch: function () {
  },
  success: function (title, duration) {
    title = title || '';
    if (typeof title !== 'string') {
      title = JSON.stringify(title);
    }
    wx.showToast({
      title: title,
      icon: 'success',
      image: '', // todo icon
      duration: duration || 1500
    });
  },
  info: function (title, duration) {
    title = title || '';
    if (typeof title !== 'string') {
      title = JSON.stringify(title);
    }
    wx.showToast({
      title: title,
      icon: 'none',
      image: '', // todo icon
      duration: duration || 1500
    });
  },
  err: function (title, duration) {
    title = title || '';
    if (typeof title !== 'string') {
      title = JSON.stringify(title);
    }
    wx.showToast({
      title: title,
      icon: 'success',
      image: '', // todo icon
      duration: duration || 1500
    });
  },
  loading: function (title) {
    title = title || '';
    if (typeof title !== 'string') {
      title = JSON.stringify(title);
    }
    wx.showLoading({
      title: title || "请求中",
    });
  },
  hideLoading: function () {
    wx.hideLoading();
  },
  doWithCatch: async (func, showToast = true, onErr) => {
    try {
      func && await func();
    } catch (e) {
      console.error(e);
      onErr && await onErr();
      if (showToast) {
        if (typeof e === 'string') {
          getApp().err(e);
        } else if (typeof e === 'object') {
          getApp().err(e.msg || e.message || '未知错误');
        }
      }
    }
  },
  doWithLoading: async (func, msg, showErrToast = false, onErr, afterSuccess) => {
    try {
      getApp().loading(msg);
      wx.showNavigationBarLoading();
      await func();
      getApp().hideLoading();
      wx.hideNavigationBarLoading();
      afterSuccess && await afterSuccess();
    } catch (e) {
      console.error(e);
      getApp().hideLoading();
      wx.hideNavigationBarLoading();
      if (showErrToast) {
        if (typeof e === 'string') {
          getApp().err(e);
        } else if (typeof e === 'object') {
          getApp().err(e.msg || e.message || '未知错误');
        }
      }
      onErr && onErr(e)
    }
  },
}));