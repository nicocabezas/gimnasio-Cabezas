
import './App.css';
import Cintas from './components/container/Cintas';
import Fitness from './components/container/Fitness';
import Indumentaria from './components/container/Indumentaria';
import Musculacion from './components/container/Musculacion';
import NavBar from './components/NavBar/NavBar.jsx';



function App() {
  return (
    <div>
      <NavBar/>
      <h1>Curso de React.js en CoderHouse</h1>
      <Cintas/>
      <Fitness/>
      <Indumentaria/>
      <Musculacion/>
      
    </div>
    
    
    
  );
}

export default App;
