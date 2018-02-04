// 方法来自 https://www.imooc.com/article/19908
export const combine = (target, ...source) => {
  source.forEach(function (arg) {
    if ('object' === typeof arg) {
      for (let p in arg) {
        if ('object' === typeof arg[p]) {
          // 对于对象，直接采用 Object.assign
          target[p] = target[p] || {};
          Object.assign(target[p], arg[p])
        } else if ('function' === typeof arg[p]) {
          // 函数进行融合，先调用组件事件，然后调用父页面事件
          let fun = target[p] ? target[p] : function () {
          };
          delete target[p];
          target[p] = function () {
            arg[p].apply(this, arguments);
            fun.apply(this, arguments)
          }
        } else { // 基础数据类型，直接覆盖
          target[p] = target[p] || arg[p]
        }
      }
    }
  })
};