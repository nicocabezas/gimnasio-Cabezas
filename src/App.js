import { Container } from '@mui/material';
import './App.css';
import Cintas from './components/Container/Cintas';
import Fitness from './components/Container/Fitness';
import Indumentaria from './components/Container/Indumentaria';
import Musculacion from './components/Container/Musculacion';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Form from './Form';
import Button from './Button'
//import { useEffect, useState } from 'react';



function App() { 

 /*  const [estado, setEstado] = useState(true)
  const [count, setCount] = useState(0)
  

  useEffect(() => {
    console.log('efecto 1');
    
  })
  useEffect(() => {
    console.log('llamada a la api');
    
  }, [])

  useEffect(() => {
    console.log('efecto 3 con dependencia en count');
    
  }, [count]) */


 

  return (
    
    <>
      <Container>
      <NavBar/>
{/*       {count}

      <button onClick={()=>{setCount(count+1)}}> Click </button>
      <button onClick={handleCambiarEstado}> Cambiar estado </button>
      

      {/* <button onClick={()=>{setCount(count+1)}}>click</button> */}
      <ItemListContainer  greeting='Espacio de la prop greeting'/>
      <Form title='Soy el componente Form' boton={Button}> 

        <h2>Hola soy titulo de form</h2>
        

      </Form>




      <h1>Curso de React.js en CoderHouse </h1>
      <Cintas/>
      <Fitness/>
      <Indumentaria/>
      <Musculacion/>
      
      </Container>
      
    </>
    
  );
}

export default App;
