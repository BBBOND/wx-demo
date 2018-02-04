const { baseGetRequest } = require('../../utils/baseRequest.js');
const { domain, currentMode } = require('../../constants/CONFIG.js');
const API = {
  IN_THEATERS: `${domain}/movie/in_theaters?city={city}&start={start}`,
};

export const getInTheatersReq = (city, start = 0) => baseGetRequest(
  API.IN_THEATERS, {city, start}
);