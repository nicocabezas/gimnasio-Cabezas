import { Container } from '@mui/material';
import './App.css';
import Cintas from './components/Container/Cintas';
import Fitness from './components/Container/Fitness';
import Indumentaria from './components/Container/Indumentaria';
import Musculacion from './components/Container/Musculacion';
import ItemListContainer from './components/Container/ItemListContainer/ItemListContainer';
import NavBar from './components/Container/NavBar/NavBar';

function App() { 


  return (
    
    <>
      <Container maxWidth="false">
        
      <NavBar/>

      <ItemListContainer  greeting='Espacio de la prop greeting'/>

      
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
