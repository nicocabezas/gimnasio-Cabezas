import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ( {greeting} ) => {
  

    return (
        <>
        <h1>{greeting}</h1>
        <ItemCount stock={10} initial={1} />


        </>
    );
  };
  

export default ItemListContainer
