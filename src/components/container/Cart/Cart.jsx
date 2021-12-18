import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../Context/CartContext'
import CartEmpty from './CartEmpty';
import { Button, TableBody } from '@mui/material'
import { Delete } from '@material-ui/icons';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import ModalFinal from '../ModalShop/ModalFinal';


export const Cart = () => {
    const [showModal, setShowModal] = useState(false);

    const { cartList, deleteCart, deleteProd, totalPrice } = useCartContext()



    return (
        <div>
            {cartList.length === 0 ? <CartEmpty h1="Su carrito está vacío" /> :

                cartList.map(prod =>
                    <Paper sx={{ width: '100%' }}>
                    <TableContainer component={Paper}>
                        <Table stickyHeader aria-label="sticky table" padding= 'normal'>
                            <TableHead >
                                <TableRow>

                                    <TableCell >Productos</TableCell>
                                    
                                    <TableCell align="right">Cantidad</TableCell>
                                    <TableCell align="right">Precio</TableCell>
                                    <TableCell align="right">Total</TableCell>
                                    </TableRow>
                            </TableHead>

                            <TableBody>
                            
                                <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    
                                    <TableCell >{prod.title}</TableCell>
                                    
                                    <TableCell align="right">{prod.cantidad}</TableCell>
                                    <TableCell align="right">{prod.price}</TableCell>
                                    <TableCell align="right">{prod.price * prod.cantidad}</TableCell>
                                    <TableCell >
                                        <Button item xs={8}>
                                            <Delete onClick={() => deleteProd(prod.id)} />
                                        </Button>
                                    </TableCell>
                                    
                                </TableRow>
                                </TableBody>

                        </Table>
                        
                    </TableContainer>
                    </Paper>
                )

            }
            {
                cartList.length === 0 ? null :
                    <>
                        <p align="right">Total: {totalPrice()}</p>
                        <Grid align="center">

                            <Box >
                                <Button onClick={deleteCart}>Vaciar Carro</Button>

                                <Button>
                                    <Link to='/' >Seguir comprando</Link>
                                </Button>

                                <hr />
                            </Box>


                        </Grid>
                        <div align="center">
                            <hr />

                            <ModalFinal show={showModal} handleOpen={() => setShowModal(false)} />
                        </div>

                    </>
            }
        </div>
    );
}
