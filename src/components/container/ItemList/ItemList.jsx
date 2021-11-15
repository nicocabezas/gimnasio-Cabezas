import { Grid } from '@mui/material'
import React from 'react'
import { Item } from '../Item/Item'


const ItemList = ({ products }) => {
    return (

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            
            {products.map(prod => 
            <Item prod={prod} key={prod.id}/>
            
            )}
            {/* //listado de item */}
            
        </Grid>

    )
}

export default ItemList
