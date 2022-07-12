//mapped types

export type Charcter = {
  name: string;
  number: number;
};

export type CharFun = Getter<Charcter>;

type Getter<Type> = {[Property in keyof Type]: () => Type[Property]};
