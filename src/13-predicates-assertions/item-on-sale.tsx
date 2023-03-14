import type { FC } from 'react';
import { BookOnSale } from './book-on-sale';
import { MagazineOnSale } from './magazine-on-sale';
import { PenOnSale } from './pen-on-sale';
import { Book, isBook, isMagazine, isPen, ItemsOnSale, Magazine, Pen } from './types';

type Props = {
  item: ItemsOnSale;
};

export const ItemOnSale: FC<Props> = ({ item }) => {
  if(isBook(item)) {
    return <BookOnSale book={item} />;
    
  } else if(isMagazine(item)) {
    return <MagazineOnSale magazine={item} />;

  } else if(isPen(item)) {
    return <PenOnSale pen={item} />;
  }

  return null;
};
