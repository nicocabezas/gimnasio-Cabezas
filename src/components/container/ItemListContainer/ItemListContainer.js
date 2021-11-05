//import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { getFetch } from '../Products';


function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getFetch
      .then(res => {
        setProducts(res)
      })
      .catch(err => console.log(err))
  }, [])
  console.log(products);

  return (
    <>
      <h1>{greeting}</h1>
      <ItemCount stock={10} initial={1} />

     
        <ItemList  products={products} />
  

    </>
  );
};


export default ItemListContainer
