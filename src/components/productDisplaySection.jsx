/* eslint-disable react/prop-types */
import ProductGrid from '../components/ProductGrid';
import Filters from '../components/Filters';
import { useContext, useState } from 'react';
import { ProductContext } from '../store/productContext';

export default function ProductDisplaySection({ location }) {
  const { categories } = useContext(ProductContext);
  const [loading, setLoading] = useState(false);
  console.log('display section render');
  const categoryName = location.pathname.replace('/', '');

  const currentCategoryIndex =
    categories &&
    categories.findIndex((item) => item.category_name === categoryName);
  const existingCategory = categories[currentCategoryIndex];

  return (
    <>
      <div className=" flex justify-between">
        <Filters
          categoryId={existingCategory && existingCategory.category_id}
          setLoading={setLoading}
        />
        <ProductGrid
          category={existingCategory}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
    </>
  );
}
