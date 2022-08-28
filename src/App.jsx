import React from 'react';
import './App.css';


//components
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App () {
  
 return (
      <div className="App">
 <NavBar />
 <ItemListContainer greeting={'Bienvenido a mi Ecommerce'} />

      </div>
    );
  
  }
 


export default App;
