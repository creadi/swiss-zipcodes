import { data } from './data_bfs'
import { filter } from 'lodash'
import { SwissZipcodeItem, SwissZipcodeSearch } from './types'

export const search = (searchData: SwissZipcodeSearch): Array<SwissZipcodeItem> =>
  filter(data, searchData)

export const validate = (zip: number | string): boolean => {
  const num = Number(zip)
  if (isNaN(num)) { return false }
  const result = search({ zip: num })
  if (result.length !== 0) { return true }
  return false
}

export const cityFromZip = (zip: number | string): Array<string> => {
  const result = search({ zip: Number(zip) })
  return result.map(({ commune }) => commune)
}

export const allZips = data.map(d => d.zip)
