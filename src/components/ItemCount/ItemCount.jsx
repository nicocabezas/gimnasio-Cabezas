import React, { useState } from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Item from './Item'

const ItemCount = ({ stock, initial, /* onAdd */ }) => {
    const [count, setCount] = useState(initial);

    const sumProd = () => {
        count < stock
            ? setCount(count + 1)
            : alert("Productos maximos superados");
    };
    const resProd = () => {
        count >= initial 
            ? setCount(count - 1) 
            : alert("Producto sin stock");
    };
    const onAdd = () => {
        if (count >= 1) 
        alert(`Agregaste ${count} productos`);
    };

    return (
        <>
            <Item/>
            <p>Stock Pesas = {stock}</p>
            <Button
                onClick={() => {
                    setCount((initial = 1));
                }}
            >
                Reset
            </Button>

            <Box
                sx={{
                    display: "inline-flex",
                    flexDirection: "row",
                    alignItems: "start",

                    "& > *": {
                        m: 1,
                    },
                }}
            >
                <Button variant="outlined" onClick={sumProd}>
                    +
                </Button>
                <h3 position="center"> {count} </h3>
                <Button variant="outlined" onClick={resProd}>
                    -
                </Button>
                <Button variant="outlined" onClick={onAdd}>
                    Agregar
                </Button>
            </Box>
        </>
    );
};

export default ItemCount;
