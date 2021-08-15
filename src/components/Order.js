import { Component } from "react";

class Order extends Component{
    render(){
        let pCountList = this.props.pizzaCount
        let CountList = []
        let totalPay = 0
        for(let c of pCountList){
            CountList.push(<div key={c.id}>
                {c.name} : {c.cnt}개
                <button>추가</button>
                <button>빼기</button>
            </div>)
            totalPay += c.price * c.cnt
        }
        return(
            <div className="OrderList">
                {CountList}
                <hr></hr>
                <p>총 : {totalPay}원</p>
            </div>
        )
    }
}

export default Order