import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getFirestore } from '../../../service/fireBaseConfig';
import ItemDetail from '../ItemDetail/ItemDetail';
// import { products } from '../Products';

// const getItem = new Promise((res, rej) => {
//     const condition = true;

//     if (condition) {
//         setTimeout(() => {
//             res(products)
//         }, 2000)
//     } else {
//         rej('404 Not found')
//     }

// })
function ItemDetailContainer() {
    const [prod, setProd] = useState([]);
    const [loading, setLoading] = useState(true);

    const { prodID } = useParams(); 
    

    useEffect(() => {
        const bdQuery = getFirestore()
        //me trae 1 prod, segun el Params y por id
        
        bdQuery.collection('products').doc(prodID).get() 
            .then(resp => setProd({ id: resp.id, ...resp.data() }))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))


        // if(prodID){
        //     getItem
        //         .then(res => {
        //             setItem(res.find(p => p.id === parseInt(prodID)))
        //         })
        //         .catch(err => console.log(err))
        //         .finally(() => setLoading(false))
        // }else{
        //     getItem
        //         .then(res => {
        //             setItem(res)
        //         })
        //         .catch(err => console.log(err))
        //         .finally(() => setLoading(false)) 
        // }
    },[prodID]);


    return (
        <>
            {
                loading
                    ?

                    <div><CircularProgress /></div>
                    :
                    <ItemDetail prod={prod}/>
            }
        </>
    );
}

export default ItemDetailContainer;