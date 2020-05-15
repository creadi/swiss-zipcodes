"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_bfs_1 = require("./data_bfs");
const ramda_1 = require("ramda");
const fs_1 = require("fs");
const geonames = require('./data_geonames.json');
const geoNameToZipItem = ({ zipcode, place, state_code }) => ({
    zip: Number(zipcode),
    canton: state_code,
    commune: place,
});
const toString = ({ zip, commune, canton }) => `${zip}-${commune}-${canton}`;
const notIn = (set) => (item) => ramda_1.isEmpty(set.filter(setItem => toString(setItem) === toString(item)));
const geonamesData = geonames.map(geoNameToZipItem);
const inGnNotBfs = geonamesData.filter(notIn(data_bfs_1.data));
const sortByZip = ramda_1.sortBy(ramda_1.prop('zip'));
const data = ramda_1.pipe(ramda_1.uniq, sortByZip)([...data_bfs_1.data, ...inGnNotBfs]);
const template = data => `import { SwissZipcodeItem } from './types'

export const data: Array<SwissZipcodeItem> = ${JSON.stringify(data, null, 2)}`;
fs_1.writeFile('src/data.ts', template(data), 'utf-8', err => console.log(err ? err : 'done'));
