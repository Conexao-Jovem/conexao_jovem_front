export enum FilterType {
  SEARCH = 'search',
  SELECT = 'select'
}

export interface Filter {
  label: string;
  key: string;
  type: FilterType;
  options?: string[];
}
