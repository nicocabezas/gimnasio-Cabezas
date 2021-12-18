import { useState } from "react";
import 'firebase/firestore';
import { getFirestore } from '../../../service/fireBaseConfig';


const Form = ({cartList, totalPrice, deleteCart}) =>{
    const [formData, setFormData] = useState("");

    
    
    const handleSubmit = async (e) => {
      e.preventDefault();

      const orderDetail = cartList.map( (i) => `${i.prodID}: ${i.cantidad}`);
      const date = new Date();
      const orden = {
        date: date,
        buyer: formData,
        products: orderDetail,
        total: totalPrice,
      };

      
      const bdQuery = getFirestore();
      const newOrderRef = bdQuery.collection("orders");
      console.log(newOrderRef)
      newOrderRef.add(orden)
            .then((IdDocument) => {
                setFormData(IdDocument.id)
            })
      

    

      alert('Thank you for your purchase!');
      alert('Your order ID is: ' + newOrderRef + '. Make sure to write it down just in case!');
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
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
        <h3>Completa tus Datos:</h3>
        <div >
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
          <button type="submit" onClick={handleSubmit}>
            Purchase
          </button>
        ) : (
          <button >
            Purchase
          </button>
        )}
      
    </form>
    </>
    )
        
}
export default Form;