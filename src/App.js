import React from 'react';
import './App.css';


class App extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "title": "Detalhe do produto",
        "src": [
  
            "https://github.com/mfugissecruz/hackadev-fashion-shop/blob/main/images/index/product12.jpg?raw=true",
            "https://github.com/mfugissecruz/hackadev-fashion-shop/blob/main/images/index/product13.jpg?raw=true",
            "https://github.com/mfugissecruz/hackadev-fashion-shop/blob/main/images/index/product10.jpg?raw=true",
            "https://github.com/mfugissecruz/hackadev-fashion-shop/blob/main/images/index/product15.jpg?raw=true"
          ],
        "description": "UI/UX designing, html css tutorials",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "price": 23,
        "colors":["red","black","crimson","teal"],
        "count": 1
      }
    ],
    index: 0
  };

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
    const {products, index} = this.state;
    return(
      <div className="app">
      {
        products.map(item => (
          <div className="detalhes" key={item._id}>
            <div className="big-img">
              <img src={item.src[index]} alt=""/>
            </div>
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price}</span>
              </div>
              <div className="colors">
                {
                  item.colors.map((color, index) =>(
                    <button style={{background: color}} key={index}></button>
                  ))
                }
              </div>
              <p>{item.description}</p>
              <p>{item.content}</p>

              <div className="thumb" ref={this.myRef}>
                {
                  item.src.map((img, index) =>(
                    <img src={img} alt="" key={index}
                    onClick={() => this.handleTab(index)}
                    />
                  ))
                }
              </div>
              <button className="cart">Adicionar ao carrinho</button>

            </div>
          </div>
        ))
      }
      </div>
    );
  };
}

export default App;
