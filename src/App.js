import { Container } from '@mui/material';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer';
import NavBar from './components/container/NavBar/NavBar';
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import CartContextProvider from './Context/CartContext'
import { Cart } from './components/container/Cart/Cart';




function App() {


  return (
    <CartContextProvider>
      <BrowserRouter>
        
          <NavBar />

          <Container maxWidth="true">
          <Switch>
            <Route exact path="/">
              <ItemListContainer greeting='Bienvenidos al planeta fitness' />
            </Route>
            <Route exact path="/categoria/:categoryID">
              <ItemListContainer greeting='Bienvenidos al planeta fitness' />
            </Route>
            <Route path="/detail/:prodID">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
