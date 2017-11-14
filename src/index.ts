import { data } from './data'
import { filter } from 'lodash'
import { SwissPostcodeItem, SwissPostcodeSearch } from './types'

const search = (searchData: SwissPostcodeSearch): Array<SwissPostcodeItem> =>
  filter(data, searchData)

export default search