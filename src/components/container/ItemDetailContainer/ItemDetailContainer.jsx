import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getFirestore } from '../../../service/fireBaseConfig';
import ItemDetail from '../ItemDetail/ItemDetail';


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

    },[prodID]);


    return (
        <>
            {
                loading
                    ?

                    <div><CircularProgress /></div>
                    :
                    <ItemDetail prod={prod} key={prodID}/>
            }
        </>
    );
}

export default ItemDetailContainer;