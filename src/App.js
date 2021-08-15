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
      // selected_pizza_id : 0,
      pizzaCount:[
        {id:1,name:"원하는대로반반",cnt:0,price:16900},
        {id:2,name:"4가지맛 포메이징 쿼터 피자",cnt:0,price:18900},
        {id:3,name:"클래식 수제직화불고기",cnt:0,price:14900},
        {id:4,name:"고구마단짠체다치즈",cnt:0,price:15900},
        {id:5,name:"매쉬드쉬림프골드피자",cnt:0,price:16900},
      ],
      pizzaList:[
        {id:1, name:"원하는대로반반", price:'16,900원', img:'pizzaImg/1.jpg'},
        {id:2, name:"4가지맛 포메이징 쿼터 피자", price:'18,900원', img:'pizzaImg/2.jpg'},
        {id:3, name:"클래식 수제직화불고기", price:'14,900원', img:'pizzaImg/3.jpg'},
        {id:4, name:"고구마단짠체다치즈", price:'15,900원', img:'pizzaImg/4.jpg'},
        {id:5, name:"매쉬드쉬림프골드피자", price:'16,900원', img:'pizzaImg/5.jpg'},
      ]
    }
  }
  render(){
    
  return (
    <div className="App">
      <Navigation pizzaList={this.state.pizzaList}
      onChangePage={function(_id){
        let result = Array.from(this.state.pizzaCount)
        // console.log(result);
        for(let idx in result){
          if(result[idx].id === Number(_id)){
            console.log(result[idx]);
            result[idx].cnt += 1
            break
          }
        }
        this.setState({
          pizzaCount:result
        })
      }.bind(this)}></Navigation>
      <Order pizzaCount={this.state.pizzaCount}
      onChangePage={function(_func, _id){
        // console.log(_func,_id);
        let result = Array.from(this.state.pizzaCount)
        if(_func === 'add'){
          for(let idx in result){
            if(result[idx].id === Number(_id)){
              result[idx].cnt += 1
              break
            }
          }
        }
        else if(_func === 'minus'){
          for(let idx in result){
            if(result[idx].id === Number(_id)){
              if(result[idx].cnt == 0){
                alert('최소주문은 0개 이상입니다')
                break
              }
              result[idx].cnt -= 1
            }
          }
        }
        this.setState({
          pizzaCount:result
        })
      }.bind(this)}></Order>
    </div>
  );
}
}

export default App;
