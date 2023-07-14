export type IColum<Data>= {
    field: keyof Data;
    label: string;
    width?: string;
    numeric?: boolean;
    centered?: boolean;
  }