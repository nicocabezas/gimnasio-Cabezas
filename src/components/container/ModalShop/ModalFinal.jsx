import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CartContext, { useCartContext } from '../../../Context/CartContext'
import { FormControl, Input, InputLabel } from '@mui/material';
import { getFirestore } from '../../../service/fireBaseConfig';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalFinal() {

    const { cartList, totalPrice } = useCartContext(CartContext);
    const handleOpen = () => setOpen(true);

    const [open, setOpen] = useState(false);
    
    const handleClose = () => setOpen(false);


    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [idOrden, setIdOrden] = useState('')

    const generarOrden = (e) => {
        e.preventDefault()
        const comprador = { name, tel, email };
        const db = getFirestore()
        const ordersCollection = db.collection('orders');

        let orden = {}
        orden.buyer = { comprador }
        orden.total = totalPrice;
        orden.products = cartList.map((cartProd) => {
            const id = cartProd.prod.id;
            const title = cartProd.prod.title
            return { id, title }

        })

        ordersCollection.add(orden)
            .then((IdDocument) => {
                setIdOrden(IdDocument.id)
            })
    }
    console.log('orden de compra', idOrden)

    return (
        <div>

            <Button onClick= {()=> handleOpen(true)}>Generar Orden de Compra</Button>
            <Modal
            
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                
            >
                <FormControl sx={style}
                    component="form"
                    onSubmit={generarOrden}
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Ingresa tus datos
                    </Typography>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="component-simple">Name</InputLabel>
                        <Input id="component-simple" value={name} onChange={(e) => setName(e.target.value)} />
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="component-simple">email</InputLabel>
                        <Input id="component-simple" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="component-simple">email</InputLabel>
                        <Input id="component-simple" value={tel} onChange={(e) => setTel(e.target.value)} />
                    </FormControl>
                        
                            <Button >Comprar</Button>
                            
                    <Button onClick={() => handleClose (false)}>Cerrar</Button>
                </FormControl>
            </Modal>
        </div>
    );
}
