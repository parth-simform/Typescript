export interface AllData {
  city?: string;
  state?: string;
}

export interface childA extends AllData {
  variant: 'A';
  message: string;
}

export interface childB extends AllData {
  variant: 'B';
  name: string;
  state?: never;
}

export interface childC extends AllData {
  variant: 'C';
  age: number;
  mobile_number?: number;
}
