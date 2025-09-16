/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ProductContext = createContext({
  products: [],
  setProducts: () => {},
  fetchProducts: async () => {},
  categories: [],
  productType: [],
});

const defaultProducts = JSON.parse(localStorage.getItem('products')) || [];
console.log(' store call it ................');
export function ProductCtxProvider({ children }) {
  const [products, setProducts] = useState(defaultProducts);
  const [categories, setCategories] = useState([]);
  const [productType, setProductType] = useState([]);

  async function fetchProducts({
    categoryId,
    productTypeId,
    minPrice,
    maxPrice,
    sortBy,
    sizes,
    newArrivals,
  }) {
    console.log('i call by product api');
    let sizesTxt = sizes ? sizes.toString() : undefined;
    console.log(sizesTxt);
    try {
      const response = await axios.get(`http://localhost:5555/products`, {
        params: {
          categoryId,
          productTypeId,
          sortBy,
          minPrice,
          maxPrice,
          sizes: sizesTxt,
          newArrivals,
        },
      });

      const product = response.data.data;
      setProducts(product);
      localStorage.setItem('products', JSON.stringify(product));
      return product;
    } catch (error) {
      if (error.response && error.response.data.code === 404) {
        setProducts([]);
        localStorage.removeItem('products');
      } else {
        setProducts([]);
        console.log(error);
      }

      return [];
    }
  }

  async function fetchCategory() {
    console.log('i call by get category api');
    await axios('http://localhost:5555/category')
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function fetchProductType() {
    await axios('http://localhost:5555/product_type')
      .then((response) => {
        setProductType(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchCategory();
    fetchProductType();
  }, []);

  const value = {
    products,
    setProducts,
    fetchProducts,
    categories,
    productType,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
