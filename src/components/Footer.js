import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           tab: 0,
        }
        this.changeTab = this.changeTab.bind(this);
      }
      
      componentDidUpdate = (prevProps, prevState) => {
        if (prevState.tab !== this.state.tab)
        {
          const el = document.getElementById("footer-tabs")
          let i = 0;
          for (const child of el.children){
            child.className = i === this.state.tab ? 'tab-selected' : 'tab-not-selected'
            i++;
          }
        }
      }

  render() {
    return (
      <footer>
        <nav className='footerTabs' id="footer-tabs">
        <div className='tab-selected' onClick={()=>this.changeTab(0)}>
          Меню
        </div>
        <div className='tab-not-selected' onClick={()=>this.changeTab(1)}>
          Корзина {this.props.orderNum > 0 && (<div className='order-count'>{this.props.orderNum}</div>)}
        </div>
      </nav>
    </footer>
    )
  }

  changeTab(ind){
    this.setState({tab: ind})
  }

}