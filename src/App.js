import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Navigation from './components/Navigation'
import Order from './components/Order'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      mode : 'show',
      pizzaList:[
        {id:1, name:"원하는대로반반", price:'16900원', img:'pizzaImg/1.jpg'},
        {id:2, name:"4가지맛 포메이징 쿼터 피자", price:'18900원', img:'pizzaImg/2.jpg'},
        {id:3, name:"클래식 수제직화불고기", price:'14900원', img:'pizzaImg/3.jpg'},
        {id:4, name:"고구마단짠체다치즈", price:'15900원', img:'pizzaImg/4.jpg'},
        {id:5, name:"매쉬드쉬림프골드피자", price:'16900원', img:'pizzaImg/5.jpg'},
      ]
    }
  }
  render(){
    
  return (
    <div className="App">
      <Navigation pizzaList={this.state.pizzaList}></Navigation>
      <Order></Order>
    </div>
  );
}
}

export default App;
