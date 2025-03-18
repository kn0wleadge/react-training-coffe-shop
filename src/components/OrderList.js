import React, { Component } from 'react'
import OrderItem from './OrderItem'

export default class OrderList extends Component {
  render() {
    return (
      <div className='oder-list'>
        {this.props.data.map((el)=><OrderItem key={el.id} data={el} onItemAmountChange={this.props.onItemAmountChange}/>)}
        {this.props.data.length>0&&<button className='order-submit-button' type='button' onClick={()=>window.Telegram.WebApp.sendData(this.props.data)}>Заказать</button>}
      </div>
    )
  }
}
