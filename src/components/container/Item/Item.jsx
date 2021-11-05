import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { withStyles } from '@mui/styles';



export const Item = ({ prod,item,stock }) => {

    return (
        <Card className={item} key={prod.id} sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={prod.img}
                alt={prod.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {`${prod.name} - ${prod.categoria}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt nihil blanditiis fugiat quae rem qui sed sint
                    perspiciatis ab! Eligendi, qui harum. Autem,
                    aperiam quos temporibus debitis accusamus illo ullam!
                </Typography>
            </CardContent>
            <Typography textAlign="center"  >
                {prod.price}
            </Typography>
            
            <CardActions>
                <Button size="small">Ver detalle del producto</Button>
            </CardActions>
        </Card>

    );
};
export default withStyles ({
    item:{
        minWidth: "350",
        margin: "1em",
        boxSizing: "border-box"

    },
    media: {
        minWidth: "200px"
    }

})