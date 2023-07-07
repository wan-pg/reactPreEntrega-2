import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';

import {ItemDetailContainer} from "./views/ItemDetailContainer";
import {ItemListContainer} from "./views/ItemListContainer";
import {Barra} from "./components/Navbar";




function App() {
  return (
    <>
      <Barra />
      <Routes>
        <Route path = "/" element = {<ItemListContainer/>} />
        <Route path = "/category/:id" element = {<ItemListContainer/>} />
        <Route path = "/item/:id" element = {<ItemDetailContainer/>}/>        
      </Routes>
    </>
    
    
  );
}

export default App;
