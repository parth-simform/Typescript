export interface AllData {
  city?: string;
  state?: string;
}

// Lookup types
//https://www.youtube.com/watch?v=eJ6R1knfsoc

type Child = {
  childA: {
    variant: 'A';
    message: string;
  };
  childB: {
    variant: 'B';
    name: string;
    state?: never;
  };
  childC: {
    variant: 'C';
    age: number;
    mobile_number?: number;
  };
};

export type childA = Child['childA'] & AllData;
export type childB = Child['childB'] & AllData;
export type childC = Child['childC'] & AllData;

// export interface childA extends AllData {
//   variant: 'A';
//   message: string;
// }

// export interface childB extends AllData {
//   variant: 'B';
//   name: string;
//   state?: never;
// }

// export interface childC extends AllData {
//   variant: 'C';
//   age: number;
//   mobile_number?: number;
// }
