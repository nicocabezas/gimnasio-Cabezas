import { Button } from "@material-ui/core";
import { Card, CardMedia, Grid } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ prod }) => {

    const [wasClicked, setWasClicked] = useState(false)
    const [cantProd, setCantProd] = useState(1)
    const prodCant= (count =>{
        setCantProd(count)
    })
  /*   const handleAdd = (cantidad) => {
        console.log(cantidad);
        setWasClicked(true)
    } */
    console.log(cantProd)
    const onClick = () => {
        setWasClicked(true)
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
                    <ItemCount onAdd={prodCant} stock={prod.stock} product={prod.title} initial={1} />
                    {
                        wasClicked === false ?
                            <Button onClick={onClick}>Comprar</Button> :
                            <ul>
                                <Link to='/cart'><Button>Ir al Carrito</Button>  </Link>
                                <Link to='/'><Button> Volver a compras </Button> </Link>
                            </ul>

                    }

                </Grid>

            </Card>
        </div>
    );
};

export default ItemDetail;
