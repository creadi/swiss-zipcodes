export interface SwissPostcodeItem {
  zip: number
  canton: string
  commune: string
}

export interface SwissPostcodeSearch {
  zip?: number
  canton?: string
  commune?: string
}