import { Button } from "@material-ui/core";
import { Card, CardMedia, Grid } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ prod }) => {

    const [wasClicked, setWasClicked] = useState(false)
    const [count, setCount] = useState(1)
    const { addProd } = useCartContext()
    /* const prodCant= (count =>{
        
        setCantProd(count)

    }) */
  /*   const handleAdd = (cantidad) => {
        console.log(cantidad);
        setWasClicked(true)
    } */
    // console.log(cantProd)
    const onClick = () => {
        setWasClicked(true)
    }
    const onAdd = (count) => {       
        addProd(prod, count)
        setWasClicked(true)
        setCount(count)
    }

    return (
        <div align="center">
            <Card sx={{ maxWidth: 400, padding: 10 }}>

                <CardMedia
                    component="img"
                    height="400"
                    image={prod.img}
                    alt={prod.name}
                    
                />
                <Grid>
                    <h2>{prod.title}</h2>
                    <p>{prod.descripcion}</p>
                    <p>{prod.price}</p>
                    
                    {
                        wasClicked === false ?
                        <ItemCount 
                        onAdd={onAdd} 
                        stock={prod.stock}  
                        initial={1} />
                         :
                             
                            <ul>
                                <Link to='/cart'><Button>Terminar Compra</Button>  </Link>
                                <Link to='/'><Button> Volver a compras </Button> </Link>
                            </ul>

                    }
                

                </Grid>

            </Card>
        </div>
    );
};

export default ItemDetail;
