const logRequest = (url) => {
    console.time(`${url} 请求耗时`);
};

const logSuccess = (method, url, headers, params, data) => {
    console.log({
        [method + '-SUCCESS']: url,
        headers: JSON.stringify(headers),
        params: JSON.stringify(params)
    }, data);
    console.timeEnd(`${url} 请求耗时`);
};

const logFailed = (method, url, headers, params, error) => {
    console.warn({
        [method + '-FAIL']: url,
        headers: JSON.stringify(headers || ""),
        params: JSON.stringify(params || "")
    }, error);
    console.timeEnd(`${url} 请求耗时`);
};

export const get = (url, headers) => {
    return new Promise((resolve, reject) => {
        logRequest(url);
        wx.request({
            url: url,
            header: headers || {},
            success: (res) => {
                let data = res.data;
                if (Number(res.statusCode) !== 200) {
                    data = {
                        ...data,
                        code: res.statusCode,
                        msg: res.data.message,
                    };
                }
                logSuccess('GET', url, headers, undefined, data);
                resolve(data);
            },
            fail: (error) => {
                logFailed('GET', url, headers, undefined, error);
                reject({code: 1, msg: "网络请求失败", ...error});
            }
        });
    });
};

export const post = (url, headers, params) => {
    return new Promise((resolve, reject) => {
        logRequest(url);
        wx.request({
            url: url,
            method: 'POST',
            header: headers || {},
            data: params,
            success: (res) => {
                let data = res.data;
                if (Number(res.statusCode) !== 200) {
                    data = {
                        ...data,
                        code: res.statusCode,
                        msg: res.data.message,
                    };
                }
                logSuccess('POST', url, headers, params, data);
                resolve(data);
            },
            fail: (error) => {
                logFailed('POST', url, headers, params, {msg: "网络请求失败", error});
                reject({code: 1, msg: "网络请求失败", ...error});
            }
        });
    });
};

export const put = (url, headers, params) => {
    return new Promise((resolve, reject) => {
        logRequest(url);
        wx.request({
            url: url,
            method: 'PUT',
            header: headers || {},
            data: params,
            success: (res) => {
                let data = res.data;
                if (Number(res.statusCode) !== 200) {
                    data = {
                        ...data,
                        code: res.statusCode,
                        msg: res.data.message,
                    };
                }
                logSuccess('PUT', url, headers, params, data);
                resolve(data);
            },
            fail: (error) => {
                logFailed('PUT', url, headers, params, error);
                reject({code: 1, msg: "网络请求失败", ...error});
            }
        });
    });
};

export const del = (url, headers, params) => {
    return new Promise((resolve, reject) => {
        logRequest(url);
        wx.request({
            url: url,
            method: 'DELETE',
            header: headers || {},
            data: params,
            success: (res) => {
                let data = res.data;
                if (Number(res.statusCode) !== 200) {
                    data = {
                        ...data,
                        code: res.statusCode,
                        msg: res.data.message,
                    };
                }
                logSuccess('DELETE', url, headers, params, data);
                resolve(data);
            },
            fail: (error) => {
                logFailed('DELETE', url, headers, params, error);
                reject({code: 1, msg: "网络请求失败", ...error});
            }
        });
    });
};