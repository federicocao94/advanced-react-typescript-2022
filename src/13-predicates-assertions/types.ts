export type Book = {
  type: string;
  title: string;
  description: string;
};

export function isBook(book: ItemsOnSale): book is Book {
  return book.type === 'book';
}

export type Magazine = {
  type: string;
  title: string;
};

export function isMagazine(magazine: ItemsOnSale): magazine is Magazine {
  return magazine.type === 'magazine';
}

export type Pen = {
  type: string;
  color: string;
};

export function isPen(pen: ItemsOnSale): pen is Pen {
  return pen.type === 'pen';
}

export type ItemsOnSale = Book | Magazine | Pen;
