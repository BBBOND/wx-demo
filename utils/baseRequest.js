const regeneratorRuntime = require('../libs/runtime');
let { get, post, put, del } = require("./fetchHelper.js");
/** ---------------- 网络请求基本方法 ------------------ **/
/**
 * get请求方式
 * @param api
 * @param params
 * @param header
 * @return {Promise}
 */
export const baseGetRequest = (api, params, header) => {
  let requestHeader = {
    ...getBaseHeader(),
    ...header
  };
  params && Object.keys(params).map((key) => {
    api = api.replace(`{${key}}`, params[key])
  });
  return new Promise((resolve, reject) => {
    get(api, requestHeader)
      .then(async result => {
        if (result.code) {
          reject(result.msg || '未知错误')
        } else {
          resolve(result);
        }
      })
      .catch(error => {
        reject(error.msg)
      });
  })
};

/**
 * post请求方式
 * @param api
 * @param params
 * @param header
 * @return {Promise}
 */
export const basePostRequest = (api, params, header) => {
  let requestHeader = {
    ...getBaseHeader(),
    ...header
  };
  return new Promise((resolve, reject) => {
    post(api, requestHeader, params || {})
      .then(async result => {
        if (result.code) {
          reject(result.msg || '未知错误')
        } else {
          resolve(result);
        }
      })
      .catch(error => {
        reject(error.msg)
      });
  })
};

/**
 * put请求方式
 * @param api
 * @param params
 * @param header
 * @return {Promise}
 */
export const basePutRequest = (api, params, header) => {
  let requestHeader = {
    ...getBaseHeader(),
    ...header
  };
  return new Promise(async (resolve, reject) => {
    put(api, requestHeader, params || {})
      .then(async result => {
        if (result.code) {
          reject(result.msg || '未知错误')
        } else {
          resolve(result);
        }
      })
      .catch(error => {
        reject(error.msg)
      });
  })
};

/**
 * delete请求方式
 * @param api
 * @param params
 * @param header
 * @return {Promise}
 */
export const baseDeleteRequest = (api, params, header) => {
  let requestHeader = {
    ...getBaseHeader(),
    ...header
  };
  return new Promise(async (resolve, reject) => {
    del(api, requestHeader, params || {})
      .then(async result => {
        if (result.code) {
          reject(result.msg || '未知错误');
        } else {
          resolve(result);
        }
      })
      .catch(error => {
        reject(error.msg);
      });
  })
};

/**
 * 获取基本请求头
 * @return {}
 */
const getBaseHeader = () => {
  return {
    "Content-Type": "json",
  }
};