import { Component } from "react";

class Navigation extends Component{
    render(){
        let pizzaList = this.props.pizzaList
        let list = []
        for(let i of pizzaList){
            list.push(<div key={i.id} className="pizzas">
                <img className="img" src={i.img}></img>
                <div className="words">
                    <p>{i.name}</p>
                    <p>{i.price}</p>
                </div>
            </div>)
        }
        return(
            <nav>
                <h1 className="title">멋쟁이 피자</h1>
                {list}
            </nav>
        )
    }
}

export default Navigation