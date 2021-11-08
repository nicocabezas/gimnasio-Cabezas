import { Card, CardContent,} from "@mui/material";
import React from "react";

const ItemDetail = ({ id, title,item, image, src, description, price }) => {
    return (
        <>
             <Card className={item} align= "center"sx={{ maxWidth: 345 ,position: "center" }}>
                <CardContent key={id} >
                    <img src={image} alt="" />

                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>{price}</p>
                    
                </CardContent>
            </Card>
        </>
    );
};

export default ItemDetail;
