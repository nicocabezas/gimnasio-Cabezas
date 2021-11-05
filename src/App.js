import { Container } from '@mui/material';
import './App.css';
import ItemListContainer from './components/Container/ItemListContainer/ItemListContainer';
import NavBar from './components/Container/NavBar/NavBar';

function App() { 


  return (
    
    <>
      <Container maxWidth="true">
      <NavBar/>
      <ItemListContainer  greeting='Bienvenidos al planeta fitness'/>
            
      </Container>
    </>
    
  );
}

export default App;
