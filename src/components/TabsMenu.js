import React, { Component } from 'react';
import GoodsList from './GoodsList';


export default class TabsMenu extends Component {
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
      const el = document.getElementById("tabs")
      let i = 0;
      for (const child of el.children){
        child.className = i === this.state.tab ? 'tab-selected' : 'tab-not-selected'
        i++;
      }
    }
  }
  

  render() {
    return (
      <>
      <nav className='goodsTabs' id="tabs">
        <div className='tab-selected' onClick={()=>this.changeTab(0)}>
          Кофе
        </div>
        <div className='tab-not-selected' onClick={()=>this.changeTab(1)}>
          Выпечка
        </div>
        <div className='tab-not-selected' onClick={()=>this.changeTab(2)}>
          Десерты
        </div>
      </nav>
      {this.state.tab===0 && <GoodsList data={this.props.data.filter((el)=> el.type === "coffee")} toggleDrawer={this.props.toggleDrawer}/>}
      </>
    )
  }

  changeTab(ind){
    this.setState({tab: ind})
  }

}
