const MODE = {
  TEST: "TEST",
  PRE: "PRE",
  ONLINE: "ONLINE",
};
// 此处切换环境
const currentMode = MODE.TEST;
const domain = currentMode === MODE.PRE
  ? ''
  : currentMode === MODE.ONLINE
    ? 'https://api.douban.com/v2'
    : currentMode === MODE.TEST
      ? 'http://192.168.1.12:9000/v2' : '';

module.exports = {
  domain,
  MODE,
  currentMode
};