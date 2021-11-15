import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
// import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemList from '../ItemList/ItemList';
import { products } from '../Products';

const getProducts = new Promise((res) => {
  setTimeout(() => {
      res(products)
  }, 2000);
});

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);
  const { categoryID } = useParams();

  useEffect(() => {
    if (categoryID) {
      getProducts
        .then(res => {
          setProducts(res.filter(prod => prod.categoria === categoryID))
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    } else {
      getProducts
        .then(res => {
          setProducts(res)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    };
  }, [categoryID]);


  return (
    <>
      <h1>{greeting}</h1>
      {/*  <ItemCount stock={10} initial={1} /> */}
      {
        loading
          ?

          <div><CircularProgress /></div>
          :
          <ItemList products={products} />
      }
      {/* <ItemDetailContainer /> */}

    </>
  );
};


export default ItemListContainer
