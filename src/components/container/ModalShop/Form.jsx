import { useState } from "react";
import 'firebase/firestore';
import { getFirestore } from '../../../service/fireBaseConfig';


const Form = ({cartList, totalPrice, deleteCart}) =>{
    const [formData, setFormData] = useState("");

    

    const generarOrden = (e) => {
        e.preventDefault()
        // const comprador = { name, tel, email };
        const db = getFirestore()
        const ordersCollection = db.collection('orders');

        let orden = {}
        // orden.buyer = { comprador }
        orden.total = totalPrice;
        orden.products = cartList.map((cartProd) => {
            const id = cartProd.prod.id;
            const title = cartProd.prod.title
            return { id, title }
        })

        ordersCollection.add(orden)
            .then((IdDocument) => {
                setFormData(IdDocument.id)
            })
            .catch (err=> console.log (err))
            .finally (()=> console.log ('finally order'));
    // }
    // const handleSubmit = async(e) => {
    //   e.preventDefault();

    //   const orderDetail = cartList.map( (i) => `${i.prod.name}: ${i.quantity}`);
    //   const date = new Date();
    //   const newOrder = {
    //     date: date,
    //     buyer: formData,
    //     prod: orderDetail,
    //     total: total
    //   };

    //   const newOrderRef = db.collection("orders");
    //   const db = getFirestore()
    //   const newDoc = await addDoc(newOrderRef, newOrder);

      alert('Thank you for your purchase!');
      alert('Your order ID is: ' + orden + '. Make sure to write it down just in case!');
      deleteCart();
    };

    function handleChange(e) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    return(
    <>
    <form
      className='cartDataForm'
      onChange={handleChange}
      onSubmit={generarOrden}
    >
        <h3>Completa tus Datos:</h3>
        <div className='formCartSection'>
          <div>
            <label htmlFor="name">Name:</label>
            <input name="name" id="name" required />
          </div>
          <div>
            <label htmlFor="phone">Tel:</label>
            <input name="phone" type="number" id="phone" required/>
          </div>
          <div>
            <label htmlFor="E-mail">Email:</label>
            <input
              onChange={handleChange}
              type="email"
              id="email1"
              name="email1"
              required
            />
          </div>
          <div>
            <label htmlFor="E-mail" required>
              Confirmar Email:
            </label>
            <input
              type="email"
              onChange={handleChange}
              id="email2"
              name="email2"
              required
            />
          </div>
        </div>
        
        { formData.name != null && formData.phone != null && formData.email1 != null && formData.email2 != null && formData.email1 === formData.email2 ? (
          <button className="formButtonPurchase" type="submit" onClick={generarOrden}>
            Purchase
          </button>
        ) : (
          <button className="formButtonPurchase">
            Purchase
          </button>
        )}
      
    </form>
    </>
    )
}; export default Form;