import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { withStyles } from '@mui/styles';
// import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";



export const Item = ({ prod }) => {

    return (
        <Box sx={{ border: 2, m: "1rem", borderRadius: '6px'}}>
        <Card key={prod.id} sx={{ maxWidth: 400 }}>
            <CardMedia
                image={prod.urlImage}
                alt={prod.name}
                component="img"
                height="400"

            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {`${prod.title} - ${prod.categoryId}`}
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
            {/* <ItemCount stock={10}/> */}
            <CardActions >
                <Link to={`/detail/${prod.id}`}>
                    <Button>Ver producto</Button>
                </Link>
            </CardActions>

        </Card>
        </Box>

    );
};
export default withStyles({
    item: {
        minWidth: "350",
        margin: "1em",
        boxSizing: "border-box"

    },
    media: {
        minWidth: "200px"
    }

})