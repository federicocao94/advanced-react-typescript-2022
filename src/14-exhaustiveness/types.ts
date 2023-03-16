export type Book = {
  type: 'book';
  title: string;
  description: string;
};

export type Magazine = {
  type: 'magazine';
  title: string;
};

export type Pen = {
  type: 'pen';
  color: string;
};

export type ItemsOnSale = Book | Magazine | Pen;

export function assertNever(value: never): never {
  throw new Error("Unexpected value: " + JSON.stringify(value, null, 2));
}
