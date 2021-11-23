import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../Context/CartContext'
import CartEmpty from './CartEmpty';

export const Cart = () => {

    const { cartList, deleteCart, deleteProd, cantProd, totalPrice } = useCartContext()
    console.log(cartList)

    return (
        <div>
            {cartList.length === 0 ? <CartEmpty h1="Su carrito está vacío" /> :

                cartList.map(prod =>
                    <div>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell key={prod.id}>Productos</TableCell>
                                        <TableCell align="right">Cantidad</TableCell>
                                        <TableCell align="right">Precio</TableCell>
                                        <TableCell align="right">Total</TableCell>
                                        <i onClick={() => deleteProd(prod.id)}></i>
                                    </TableRow>
                                </TableHead>


                            </Table>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table"></Table>
                        </TableContainer>
                    </div>
                )
            }
        </div>
    );
}
