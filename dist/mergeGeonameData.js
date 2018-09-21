"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_bfs_1 = require("./data_bfs");
var ramda_1 = require("ramda");
var fs_1 = require("fs");
var geonames = require('./data_geonames.json');
var geoNameToZipItem = function (_a) {
    var zipcode = _a.zipcode, community = _a.community, state_code = _a.state_code;
    return ({
        zip: Number(zipcode),
        canton: state_code,
        commune: community,
    });
};
var toString = function (_a) {
    var zip = _a.zip, commune = _a.commune, canton = _a.canton;
    return zip + "-" + commune + "-" + canton;
};
var notIn = function (set) { return function (item) {
    return ramda_1.isEmpty(set.filter(function (setItem) { return toString(setItem) === toString(item); }));
}; };
var geonamesData = geonames.map(geoNameToZipItem);
var inGnNotBfs = geonamesData.filter(notIn(data_bfs_1.data));
var sortByZip = ramda_1.sortBy(ramda_1.prop('zip'));
var data = ramda_1.pipe(ramda_1.uniq, sortByZip)(data_bfs_1.data.concat(inGnNotBfs));
var template = function (data) { return "import { SwissZipcodeItem } from './types'\n\nexport const data: Array<SwissZipcodeItem> = " + JSON.stringify(data, null, 2); };
fs_1.writeFile('src/data.ts', template(data), 'utf-8', function (err) { return console.log(err ? err : 'done'); });
