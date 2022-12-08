
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Componentes
import Navbar from './navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/product/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:category' element={<ItemListContainer/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        
      </Routes>
     
    </BrowserRouter>
 
    </>
  );
}

export default App;
