import './App.css';
import Cintas from './components/container/Cintas';
import Fitness from './components/container/Fitness';
import Indumentaria from './components/container/Indumentaria';
import Musculacion from './components/container/Musculacion';
import NavBar, { ItemListContainer } from './components/NavBar/NavBar';





function App() {
  
  let titulo='Espacio generado para itemlistcontainer';

  return (
    <div>
      
      <NavBar/>
      
      <ItemListContainer titulo={titulo}/>
      <h1>Curso de React.js en CoderHouse :)</h1>
      <Cintas/>
      <Fitness/>
      <Indumentaria/>
      <Musculacion/>
      
    </div>
    
    
    
  );
}

export default App;
