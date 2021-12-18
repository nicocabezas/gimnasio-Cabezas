import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getFirestore } from '../../../service/fireBaseConfig';
import ItemList from '../ItemList/ItemList';


function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(true);

  const { categoryID } = useParams();

  useEffect(() => {

    const bdQuery = getFirestore() // conexion con firestore

    if (categoryID ===  undefined) {
      bdQuery.collection('products').get()
          .then(data => setProducts(data.docs.map(i => ({ id: i.id, ...i.data() }))))
          .catch(err => console.log(err))
          .finally(() => setLoading(false))
  } else {
      bdQuery.collection('products').where('categoryId', '==',  categoryID ).get()
          .then(data => setProducts(data.docs.map(i => ({ id: i.id, ...i.data() }))))
          .catch(err => console.log(err))
          .finally(() => setLoading(false))

  }

  }, [categoryID]);


  console.log(products)

  return (
    <>
      <h1>{greeting}</h1>
      
      {
        loading
          ?

          <div><CircularProgress /></div>
          :
          <ItemList products={products} />
      }
      

    </>
  );
};


export default ItemListContainer
