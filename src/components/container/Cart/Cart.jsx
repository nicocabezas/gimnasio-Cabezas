import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../Context/CartContext'
import CartEmpty from './CartEmpty';
import { Button, Input, TableBody, TextField } from '@mui/material'
import { Delete } from '@material-ui/icons';
import Grid from '@mui/material/Grid';
import { Box, spacing } from '@mui/system';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import { getFirestore } from '../../../service/fireBaseConfig';
import firebase from 'firebase';

export const Cart = () => {
    const [orderId, setOrderId] = useState(null)

    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')




    const { cartList, deleteCart, deleteProd, totalPrice } = useCartContext()

    const generarOrden = (e) => {
        e.preventDefault();

        const order = {}


        order.buyer = { name, email, tel } //formData
        order.total = totalPrice()
        order.date = firebase.firestore.Timestamp.fromDate(new Date())
        order.items = cartList.map(cartProd => {
            const id = cartProd.id
            const title = cartProd.title
            const price = cartProd.price * cartProd.cantidad
            return { id, title, price }
        })



        const dbQ = getFirestore()
        const orders = dbQ.collection('orders')

        //Creo una colleccion llamada orders donde se va a ir guardando cada orden de compra realizada
        orders.add(order)
            //guardarlo dentro de un estado! y asi despues puedo sacar el id
            .then((res) => {
                setOrderId(res.id) //No me actualiza el valor de orderID

            })
            .catch(err => console.log(err))
        //.finally(() => setLoading(false))


        //Actualiza todos los products que estan en el listado de Cart del cartContext
        const itemsToUpdate = dbQ.collection('products').where(firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i => i.id))


        const batch = dbQ.batch();


        //Por cada prod, restar del stockla cantidad de el carrito
        itemsToUpdate.get()
            .then(collection => {
                collection.docs.forEach(docSnapshot => {
                    batch.update(docSnapshot.ref, {
                        stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).cantidad
                    })
                })
                batch.commit().then(res => {

                    console.log(`Stock actualizado`)
                })

            })

        console.log(order)
    }


    //Permite mostrar el modal cuando doy terminar orden y me borra el carrito de compra
    const handleHide = () => {
        setShowModal(false)
        deleteCart()
    }

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
                        <Grid container spacing={2}>
                            <Grid container justifyContent="center" spacing={spacing}>
                                <Button onClick={deleteCart}>Vaciar Carro</Button>

                                <Button>
                                    <Link to='/' >Seguir comprando</Link>
                                </Button>
                                <Box
                                    onSubmit={generarOrden}
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-basic" label="Nombre" variant="standard" >
                                    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} id="nombre" />
                                    </TextField>
                                    <TextField id="filled-basic" label="Email" variant="standard" >
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" />
                                    </TextField>
                                    <TextField id="standard-basic" label="Telefono" variant="standard" >
                                    <input type="text" value={tel} onChange={(e) => setTel(e.target.value)} className="form-control" id="tel" />
                                    </TextField>
                                </Box>




                                <Button onClick={() => setShowModal(true)} >
                                    Terminar mi Compra
                                </Button>
                            </Grid>
                            <Modal show={showModal} onHide={handleHide} orderId={orderId} total={totalPrice()} />
                        </Grid>

                    </>
            }
        </div>
    );
}
