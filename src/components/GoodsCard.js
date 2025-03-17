import React, { Component } from 'react'

export default class GoodsCard extends Component {
  data = this.props.data
  addons = this.props.addons
  render() {
    return (
      <div className='card'>
        <img className='card-photo' src={`./images/${this.data.title}.png`} alt={`${this.data.title}`}/>
        <div className='card-content'>
          <h3>{this.data.title}</h3>
          <p>{this.data.description}</p>
          <p>{this.data.type === "coffee" ? `От ${this.data.price[0]}₽` : `${this.data.price}₽`}</p>
          <button className='add-button' type='button' onClick={()=>this.props.toggleDrawer(this.data)}>Добавить</button>
        </div>       
      </div>
    )
  }
}
