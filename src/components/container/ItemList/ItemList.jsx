import { Grid } from '@mui/material'
import React from 'react'
import { Item } from '../Item/Item'


const ItemList = ({ products }) => {
    return (

        <Grid container wrap="wrap" >
            
            {products.map(prod => 
            <Item prod={prod} />
            
            )}
            {/* //listado de item */}
            
        </Grid>

    )
}

export default ItemList
