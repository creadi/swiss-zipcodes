"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const lodash_1 = require("lodash");
exports.search = (searchData) => lodash_1.filter(data_1.data, searchData);
exports.validate = (zip) => {
    const num = Number(zip);
    if (Number.isNaN(num)) {
        return false;
    }
    const result = exports.search({ zip: num });
    if (result.length !== 0) {
        return true;
    }
    return false;
};
