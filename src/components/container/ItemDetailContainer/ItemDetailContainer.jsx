import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';
import { products } from '../Products';

const getItem = new Promise((res, rej) => {
    const condition = true;

    if (condition) {
        setTimeout(() => {
            res(products)
        }, 2000)
    } else {
        rej('404 Not found')
    }

})
function ItemDetailContainer() {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    const { prodID } = useParams(); 
    

    useEffect(() => {
        if(prodID){
            getItem
                .then(res => {
                    setItem(res.find(p => p.id === parseInt(prodID)))
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }else{
            getItem
                .then(res => {
                    setItem(res)
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false)) 
        }
    },[prodID]);


    return (
        <>
            {
                loading
                    ?

                    <div><CircularProgress /></div>
                    :
                    <ItemDetail prod={item}/>
            }
        </>
    );
}

export default ItemDetailContainer;