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
import React from 'react';
import Form from '../ModalShop/Form';


export const Cart = () => {
    // const [showModal, setShowModal] = useState(false);
    // const total = totalPrice();
    const { cartList, deleteCart, deleteProd, totalPrice } = useCartContext()



    return (
        <div>
            {cartList.length === 0 ? <CartEmpty h1="Su carrito está vacío" /> :

                cartList.map(prod =>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >

                                    <TableCell >Productos</TableCell>
                                    <TableCell align="right">Cantidad</TableCell>
                                    <TableCell align="right">Precio</TableCell>
                                    <TableCell align="right">Total</TableCell>

                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >

                                    <TableCell component="th" scope="row">{prod.title}</TableCell>
                                    <TableCell align="right">{prod.cantidad}</TableCell>
                                    <TableCell align="right">{prod.price}</TableCell>
                                    <TableCell align="right">{prod.price * prod.cantidad}</TableCell>
                                    <TableCell align="right">
                                        <Button item xs={8}>
                                            <Delete onClick={() => deleteProd(prod.id)} />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

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
                            <hr/>
                        <Form cartList={cartList} total={totalPrice} clearCart={deleteCart}/>
                            {/* <ModalFinal show={showModal} handleOpen={() => setShowModal(false)} /> */}
                        </div>

                    </>
            }
        </div>
    );
}
