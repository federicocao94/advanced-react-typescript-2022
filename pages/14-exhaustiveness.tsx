import type { NextPage } from 'next';
import { BookShop } from '../src/14-exhaustiveness/book-shop';

const PredicatesAssertions: NextPage = () => {
  return (
    <div>
      <h2 className="my-4">Exhaustiveness Checking</h2>
      <BookShop />
    </div>
  );
};

export default PredicatesAssertions;
