export interface SwissZipcodeItem {
  zip: number
  canton: string
  commune: string
}

export interface SwissZipcodeSearch {
  zip?: number
  canton?: string
  commune?: string
}