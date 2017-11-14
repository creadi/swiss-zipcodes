"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const lodash_1 = require("lodash");
const search = (searchData) => lodash_1.filter(data_1.data, searchData);
exports.default = search;
