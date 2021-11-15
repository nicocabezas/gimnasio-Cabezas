import { Card, CardMedia, Grid} from "@mui/material";

import React from "react";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ prod }) => {
    

    return (
        <div align="center">
            <Card sx={{ maxHeight: 500,maxWidth: 400, padding: 10,}}>

                <CardMedia
                    component="img"
                    height="140"
                    image={prod.img}
                    alt={prod.name}
                />
                <Grid>
                    <h2>{prod.title}</h2>
                    <p>{prod.descripcion}</p>
                    <p>{prod.price}</p>
                    <ItemCount stock={prod.stock} product={prod.title} />
                </Grid>

            </Card>
        </div>
    );
};

export default ItemDetail;
