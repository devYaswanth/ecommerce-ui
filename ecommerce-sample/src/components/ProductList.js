import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import ProductService from '../services/ProductService';
import ProductCard from './ProductCard';
import { FallingLines } from 'react-loader-spinner';

function ProductList({ searchTerm }) {

  // state management for products
  const [products, setProducts] = useState([]);

  //  getting products from api
  useEffect(() => {
    const getProducts = async () => {
      const data = await ProductService.getProducts();
      setProducts(data);
    };
    getProducts();
  }, []);


  // search 
  const filteredProducts = products.filter(product =>
  (product.alt_description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product?.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (!products) return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FallingLines
        color="#1976d2"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading" />
    </div >
  );



  return (
    <Grid container>
      {filteredProducts.map(product => (
        <Grid item xs={12} sm={6} md={3} key={product.id} >
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
