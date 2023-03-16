import type { FC } from 'react';
import { BookOnSale } from './book-on-sale';
import { MagazineOnSale } from './magazine-on-sale';
import { PenOnSale } from './pen-on-sale';
import { assertNever, ItemsOnSale } from './types';

type Props = {
  item: ItemsOnSale;
};

export const ItemOnSale: FC<Props> = ({ item }) => {
  switch(item.type) {
    case 'book':
      return <BookOnSale book={item} />;

    case 'magazine':
      return <MagazineOnSale magazine={item} />;

    case 'pen':
      return <PenOnSale pen={item} />;

    default:
      // never means that it can't be assigned, it triggers an error if one of the above case is removed
      // now it's silent because this code is not reachable
      const n: never = item;
      //alternatively to have an error at run time
      assertNever(item);
      //keep only one of these two, try to add a type in ItemsOnSale (types.ts) like one of existing items
  }

  return null;
};
