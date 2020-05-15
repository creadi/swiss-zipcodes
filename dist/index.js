"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_bfs_1 = require("./data_bfs");
const lodash_1 = require("lodash");
exports.search = (searchData) => lodash_1.filter(data_bfs_1.data, searchData);
exports.validate = (zip) => {
    const num = Number(zip);
    if (isNaN(num)) {
        return false;
    }
    const result = exports.search({ zip: num });
    if (result.length !== 0) {
        return true;
    }
    return false;
};
exports.cityFromZip = (zip) => {
    const result = exports.search({ zip: Number(zip) });
    return result.map(({ commune }) => commune);
};
exports.allZips = data_bfs_1.data.map(d => d.zip);
