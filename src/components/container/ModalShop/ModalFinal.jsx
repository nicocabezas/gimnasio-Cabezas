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

const ModalFinal = () => {

    const { cartList, totalPrice } = useCartContext(CartContext);
    const handleOpen = () => setOpen(true);

    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);


    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [idOrden, setIdOrden] = useState(null);

    const generarOrden = (e) => {
        e.preventDefault()
        const comprador = { name, phone, email };
        const bdQuery = getFirestore();
        const ordersCollection = bdQuery.collection('orders');

        let orden = {};
        orden.buyer = { comprador };
        orden.total = totalPrice;
        orden.products = cartList.map((cartProd) => {
            const id = cartProd.id;
            console.log(id);
            const title = cartProd.title;
            console.log(title);
            return { id, title }
        })

        ordersCollection.add(orden)
            .then((IdDocument) => {
                setIdOrden(IdDocument.id)
            })
            .catch(err => console.log(err))
            .finally(() => console.log('finally order'));
    }
    console.log('orden de compra', idOrden)

    return (
        <div>

            <Button onClick={() => handleOpen(true)}>Generar Orden de Compra</Button>
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
                        <InputLabel htmlFor="component-simple">Email</InputLabel>
                        <Input id="component-simple" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="component-simple">Phone</InputLabel>
                        <Input id="component-simple" value={phone} onChange={(e) => setPhone(e.target.value)} />

                        <Button onClick={generarOrden} >Comprar</Button>
                    </FormControl>

                    <Button onClick={() => handleClose(false)}>Cerrar</Button>
                </FormControl>
                {/* <small>{idOrden ? ` Su orden fue generada con el ID: ${idOrden}` : null}</small> */}
            </Modal>
        </div>
    );
}
export default ModalFinal;