import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <nav className='footerTabs' id="footer-tabs">
        <div className='tab-selected' onClick={()=>this.props.onTabChange(0)}>
          Меню
        </div>
        <div className='tab-not-selected' onClick={()=>this.props.onTabChange(1)}>
          Корзина {this.props.orderNum > 0 && (<div className='order-count'>{this.props.orderNum}</div>)}
        </div>
      </nav>
    </footer>
    )
  }
}