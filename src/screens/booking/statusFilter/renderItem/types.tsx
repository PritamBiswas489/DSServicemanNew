import {subCategoryType} from '../data/types';
 
export type itemType = {
  selectedCategory: string | undefined;
  setCategory: (value:string)=>void;
  item: {value:string,label:string};
  index: number;
  flatListRef: any;
};
