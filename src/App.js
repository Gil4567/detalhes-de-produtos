import './App.css';
import React, { useEffect, useState } from 'react';
import api from './services/api';



function App() {

  const [buscaProdutos, setProdutos] = useState([]);

  useEffect(() => {
    
    api.get('product/7').then(({data}) => {
      setProdutos(data)
    });
    console.log(buscaProdutos)
  }, ['']);


  
}

export default App;