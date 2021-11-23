import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined'
import { Button } from '@mui/material'
import React from 'react'
import { useCartContext } from '../../../Context/CartContext'

export const CartWidget = () => {
    const { cantProd } = useCartContext()

    return (
        <>
        
        <Button>{cantProd() !== 0 && cantProd()}</Button>
        <ShoppingCartOutlined />
        
        </>
    )
}
