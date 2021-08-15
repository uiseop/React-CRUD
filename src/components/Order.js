import { Component } from "react";

class Order extends Component{
    render(){
        let pCountList = this.props.pizzaCount
        let CountList = []
        let totalPay = 0
        for(let c of pCountList){
            CountList.push(<div key={c.id} className="cList">
                {c.name} : {c.cnt}개
                <a href="/" className="btn" name={c.id} onClick={function(e){
                    e.preventDefault()
                    this.props.onChangePage('add',e.target.name)
                }.bind(this)}>추가</a>
                <a href="/" className="btn" name={c.id} onClick={function(e){
                    e.preventDefault()
                    this.props.onChangePage('minus',e.target.name)
                }.bind(this)}>빼기</a>
            </div>)
            totalPay += c.price * c.cnt
        }
        return(
            <div className="OrderList">
                {CountList}<br></br>
                <hr></hr>
                <p>총 : {totalPay}원</p>
            </div>
        )
    }
}

export default Order