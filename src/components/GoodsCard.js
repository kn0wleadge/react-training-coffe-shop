import React, { Component } from 'react'
import GoodsAddCount from './GoodsAddCount'

export default class GoodsCard extends Component {
  data = this.props.data
  render() {
    return (
      <div className='card'>
        <img className='card-photo' src={`./images/${this.data.title}.png`} alt={`${this.data.title}`}/>
        <div className='card-content'>
          <h3>{this.data.title}</h3>
          <p>{this.data.description}</p>
          <p>{this.data.type === "coffee" ? `От ${this.data.price[0]}₽` : `${this.data.price}₽`}</p>
          {this.data.type === "coffee" && <button className='add-button' type='button' onClick={()=>this.props.toggleDrawer(this.data)}>Добавить</button>}
          {this.data.type !== "coffee" && <GoodsAddCount onAdd={this.props.onAdd} onItemAmountChange={this.props.onItemAmountChange} data={this.data}/>}
        </div>       
      </div>
    )
  }
}
