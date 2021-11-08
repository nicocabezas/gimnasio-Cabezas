import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';


function ItemDetailContainer() {
    const [itemData, setItemData] = useState([])

    const getItem = new Promise((resolve) => {
        setTimeout(() => {
            const mockItem =
            {
                id: '1',
                image:'./assets/FotoProducts/cilindroPro.jpg',
                title: 'Cilindro Masajeador',
                price: '3000',
                description: 'Con el rodillo de masajes tendrás un gran aliado para minimizar esos nudos que se forman en los músculos del cuerpo y que se generan por estrés, sobrecarga, mala postura, sobreentrenamiento o lesiones previas y que, si no se tratan podrán acarrear molestias y nuevas lesiones.'
            }
            resolve(mockItem)
        }, 2000)
    })

    useEffect(() => {
        getItem.then((response) => {
            setItemData(response)
        })
    }, [])

    return (
        <ItemDetail key={itemData.id}  title={itemData.title} price={itemData.price} description={itemData.description} image={itemData.image} />
    );
}

export default ItemDetailContainer; 