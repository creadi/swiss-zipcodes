import { data } from './data'
import { filter } from 'lodash'
import { SwissZipcodeItem, SwissZipcodeSearch } from './types'

export const search = (searchData: SwissZipcodeSearch): Array<SwissZipcodeItem> =>
  filter(data, searchData)

export const validate = (zip: number | string): boolean => {
  const num = Number(zip)
  if (Number.isNaN(num)) { return false }
  const result = search({ zip: num })
  if (result.length !== 0) { return true }
  return false
}
