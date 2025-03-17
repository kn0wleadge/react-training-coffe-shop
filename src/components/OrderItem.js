import React, { Component } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";

export default class OrderItem extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       amount: 1
    }
  }
  
  render() {
    return (
      <div className='card'>
        <img className='card-photo' src={`./images/${this.props.data.title}.png`} alt={`${this.props.data.title}`}/>
        <div className='card-content'>
          <h3>{this.props.data.title} {this.props.data.size} мЛ</h3>
          {this.props.data.addons.length>0 && 
          this.props.data.addons.map((el)=>{return(<p key={`${this.props.data.id}-${el.title}`}>
            {el.title} {el.amount>1 && <>{el.amount} ложек</>}
          </p>)})}
          <p>{this.props.data.price}₽</p>
          <div className='coffee-addon-sugar'>
            <IoIosRemoveCircle className='coffee-addon-sugar-remove' onClick={()=>{
              this.setState({amount: this.state.amount-1})
              this.props.onItemAmountChange(this.props.data.id, this.state.amount-1)
              }}/>
              <var>{this.state.amount}</var>
            <IoIosAddCircle className='coffee-addon-sugar-add' onClick={()=>{
              this.setState({amount: this.state.amount+1})
              this.props.onItemAmountChange(this.props.data.id, this.state.amount+1)
              }}/>
          </div>
        </div>       
      </div>
    )
  }
}
