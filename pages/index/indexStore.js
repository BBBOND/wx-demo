// 引入运行时 用于支持一些es6的语法，（如：async、await）
const regeneratorRuntime = require('../../libs/runtime');
let extendObservable = require('../../libs/mobx').extendObservable;
let { getInTheatersReq } = require('./request');

/** ================= 初始化值 ================== **/
const initialState = {
  total: 0,
  start: 0,
  title: '',
  city: '杭州',
  subjects: [],
};

/** ================= cache白名单 ================== **/
const indexWhiteList = [
  'total', 'title', 'city', 'subjects', 'start'
];

class IndexStore {
  constructor() {
    extendObservable(this, {
      total: this.store && this.store.total || initialState.total,
      start: this.store && this.store.start || initialState.start,
      title: this.store && this.store.title || initialState.title,
      city: this.store && this.store.city || initialState.city,
      subjects: this.store && this.store.subjects || initialState.subjects,
    });
  }

  /**
   * 获取新片榜
   */
  getInTeater = async (city, start = 0) => {
    let inTeater;
    if (start === 0) {
      inTeater = await getInTheatersReq(city || this.city, start);
      this.total = inTeater.total;
      city && (this.city = city);
      this.subjects = inTeater.subjects;
      this.title = inTeater.title;
      this.start = inTeater.start;
      return true;
    } else if (start > this.start
      && Math.abs(this.total - start) <= 20
      || this.subjects.length <= 0
      || city && this.city !== city) {
      inTeater = await getInTheatersReq(city || this.city, start);
      this.total = inTeater.total;
      city && (this.city = city);
      if (this.title === inTeater.title && start !== 0) {
        this.subjects.push(...inTeater.subjects);
      } else {
        this.subjects = inTeater.subjects;
      }
      this.title = inTeater.title;
      this.start = inTeater.start;
      return true;
    }
    return false;
  };
}

module.exports = {
  IndexStore,
  indexWhiteList
};