import { SwissZipcodeItem, SwissZipcodeSearch } from './types';
export declare const search: (searchData: SwissZipcodeSearch) => SwissZipcodeItem[];
export declare const validate: (zip: string | number) => boolean;
export declare const cityFromZip: (zip: string | number) => string[];
