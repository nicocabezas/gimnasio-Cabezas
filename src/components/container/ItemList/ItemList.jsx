import { Grid, } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Item } from '../Item/Item'


const ItemList = ({ products }) => {
    return (
        <div>
            {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} > */}
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    {products.map(prod =>
                        <Item prod={prod} key={prod.id} />

                    )}
                    {/* //listado de item */}

                </Grid>
            </Box>
            {/* </Grid> */}

        </div>

    )
}

export default ItemList
