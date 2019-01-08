import { data as bfsData } from './data_bfs'
import { isEmpty, uniq, sortBy, prop, pipe } from 'ramda'
import { writeFile } from 'fs'
import { SwissZipcodeItem } from './types'

declare function require(name:string)
const geonames = require('./data_geonames.json')

const geoNameToZipItem = ({ zipcode, place, state_code }: any): SwissZipcodeItem => ({
  zip: Number(zipcode),
  canton: state_code,
  commune: place,
})

const toString = ({ zip, commune, canton }: SwissZipcodeItem): string => `${zip}-${commune}-${canton}`

const notIn = (set: SwissZipcodeItem[]) => (item: SwissZipcodeItem): boolean =>
  isEmpty(set.filter(setItem => toString(setItem) === toString(item)))

const geonamesData: SwissZipcodeItem[] = geonames.map(geoNameToZipItem)

const inGnNotBfs = geonamesData.filter(notIn(bfsData))

const sortByZip = sortBy(prop('zip'))

const data = pipe(
  uniq,
  sortByZip
)([...bfsData, ...inGnNotBfs])

const template = data => `import { SwissZipcodeItem } from './types'

export const data: Array<SwissZipcodeItem> = ${JSON.stringify(data, null, 2)}`

writeFile('src/data.ts', template(data), 'utf-8', err => console.log(err ? err : 'done'))