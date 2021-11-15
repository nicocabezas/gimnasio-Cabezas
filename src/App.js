import { Container } from '@mui/material';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer';
import NavBar from './components/container/NavBar/NavBar';
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import { CartWidget } from './components/container/CartWidget/CartWidget';


function App() {


  return (
    <BrowserRouter>
      <Container maxWidth="true">
        <NavBar />
        <Switch>
          <Route exact path="/">
          <ItemListContainer greeting='Bienvenidos al planeta fitness' />
          </Route>
          <Route exact path="/categoria/:categoryID">
            <ItemListContainer greeting='Bienvenidos al planeta fitness' />
          </Route>
          <Route path="/detail/:prodID">
            <ItemDetailContainer/>
          </Route>
          <Route exact path="/cart">
            <CartWidget />
          </Route>
        </Switch>
      </Container>

    </BrowserRouter>
  );
}

export default App;
