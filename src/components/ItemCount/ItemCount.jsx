import React, { useState } from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import PropTypes from 'prop-types';

function Item(props) {

    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: 'gray',
                p: 1,
                m: 1,
                borderRadius: 1,
                textAlign: 'center',
                fontSize: '1rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    )
}
Item.propTypes = {
    sx: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};


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
        <div style={{ width: '30%' }}>

            <p>Stock Pesas = {stock}</p>
            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", }}>



                <Button variant="outlined" onClick={sumProd}>
                    +
                </Button>
                <Item variant="outlined" position="center"> {count} </Item>


                <Button variant="outlined" onClick={resProd}>
                    -
                </Button>
            </Box>
            <br/>
            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                <Button
                    variant="outlined"
                    onClick={() => {
                        setCount((initial = 1));
                    }}
                >
                    Reset
                </Button>
                <Button

                    variant="outlined"
                    onClick={onAdd}
                >

                    Agregar
                </Button>
            </Box>

        </div>
    );
};

export default ItemCount;
