import { Button } from "@material-ui/core";
import { Card, CardMedia, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ prod }) => {

    const [wasClicked, setWasClicked] = useState(false)
    const [count, setCount] = useState(1)
    
    const { addProd } = useCartContext()


    const onAdd = (count) => {
        addProd(prod, count)
        setWasClicked(true)
        setCount(count)
    }

    return (

        <div align="center">


            <Card sx={{ maxWidth: 400, padding: 10 }}>
                <Box sx={{ border: 2, m: "1rem", borderRadius: '6px' }}>
                    <CardMedia

                        image={prod.urlImage}
                        alt={prod.name}
                        component="img"
                        height="400"

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
                </Box>
            </Card>

        </div>


    );
};

export default ItemDetail;
