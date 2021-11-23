import { Button } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'

const CartEmpty = ({h1}) => {
    return (
        <>
            <h1>{h1}</h1>
            <Link to='/'>
                <Button type="button" >Volver a compras</Button>
            </Link>
        </>
    )
}

export default CartEmpty
