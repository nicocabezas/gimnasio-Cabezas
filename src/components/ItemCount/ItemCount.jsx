import React, { useState } from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import PropTypes from 'prop-types';

function Item(props) {

    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: 'primary.main',
                color: 'white',
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
        <>

            <p>Stock Pesas = {stock}</p>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
            }}>
                <Button 
                    sx={{ alignSelf: 'flex-end' }}
                    variant="outlined"
                    onClick={() => {
                    setCount((initial = 1));
                }}
                >
                    Reset
                </Button>


                <Button variant="outlined" onClick={sumProd}>
                    +
                </Button>
                <h3 position="center"> {count} </h3>


                <Button variant="outlined" onClick={resProd}>
                    -
                </Button>



                <Button sx={{ alignSelf: 'flex-end' }}
                    variant="outlined"
                    onClick={onAdd}
                >

                    Agregar
                </Button>

            </Box>
        </>
    );
};

export default ItemCount;
