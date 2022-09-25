import './App.css';
import React, { Component } from 'react';
import api from './services/api';

class App extends Component{

  state = {
    produtos: [],
    
  }

  async componentDidMount(){
    const response = await api.get('/product/2');
    

    this.setState({produtos: response.data});
  }


  render(){

    const {produtos} = this.state;
    console.log(produtos);

    return(
      <div className="detalhes" key={produtos.id}>
            <div className="big-img">
              <img src={produtos.image} alt=""/>
            </div>
            <div className="box">
              <div className="row">
                <h2>{produtos.product}</h2>
                <span>${produtos.price}</span>
              </div>
              <div className="colors">
                
              </div>
              <p>{produtos.description}</p>
              <p>{produtos.content}</p>

              <div className="thumb" ref={this.myRef}>
                
              </div>
              <button className="cart">Adicionar ao carrinho</button>

            </div>
          </div>
    );
  };

};

export default App;