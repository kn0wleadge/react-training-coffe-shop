import React, { Component } from 'react'
import GoodsCard from './GoodsCard'

export default class GoodsList extends Component {
  data = this.props.data
  addons = this.props.addons
  render() {
    return (
      <div className='goods-list'>
        {this.data.map((el)=><GoodsCard key={el.id} data={el} toggleDrawer={this.props.toggleDrawer} onAdd={this.props.onAdd} onItemAmountChange={this.props.onItemAmountChange}/>)}
      </div>
    )
  }
}
