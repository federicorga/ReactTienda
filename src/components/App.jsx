
import './App.css';
import Navbar from './navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
const App = () => {

  return (
    <>
     <Navbar/>
     <ItemListContainer greeting={"Lista de Juegos"}/>
     </>
  );
}

export default App;
