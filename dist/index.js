"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var lodash_1 = require("lodash");
exports.search = function (searchData) {
    return lodash_1.filter(data_1.data, searchData);
};
exports.validate = function (zip) {
    var num = Number(zip);
    if (isNaN(num)) {
        return false;
    }
    var result = exports.search({ zip: num });
    if (result.length !== 0) {
        return true;
    }
    return false;
};
exports.cityFromZip = function (zip) {
    var result = exports.search({ zip: Number(zip) });
    return result.map(function (_a) {
        var commune = _a.commune;
        return commune;
    });
};
