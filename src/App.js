import './App.css';
import React, { Component } from 'react';
import api from './services/api';

class App extends Component{

  state = {
    produtos: [],
    index: 0
  }

  async componentDidMount(){
    const response = await api.get('/product/camiseta-basica-1');
    

    this.setState({produtos: response.data});
    
  }

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i = 0; i < images.length; i++){
      images[i].className = images[i].className.replace("active", "")
    }
    images[index].className = "active";
  }


  render(){

    const {produtos, index} = this.state;

    let titulo = produtos.map(item => (item.product));
    let imagem = produtos.map(item => (item.image));
    
    let price = produtos.map(item => (item.price));
    let detalhes = produtos.map(item => (item.description));
    let id = produtos.map(item => (item.id));

    
    return(
      <div className='app'>
      
        
      <div className="detalhes" key={id}>
            <div className="big-img">
              <img src={imagem[index]} alt=""/>
            </div>
            <div className="box">
              <div className="row">
                <h2>{titulo[index]}</h2>
                <span>{price[index]}</span>
              </div>
              <div className="colors">
                
              </div>
              <p>{detalhes}</p>
              <h3>Cores:</h3>

              <div className="thumb" ref={this.myRef}>
              {  
                  imagem.map((img, index) =>(
                    <img src={img} alt="" key={index}
                    onClick={() => this.handleTab(index)}
                    />
                  ))
              
              }
              </div>
            
            
              <button type='submit' className="cart">Adicionar ao carrinho</button>

            </div>
          </div>
      
          
        </div>
    );
  };

};

export default App;