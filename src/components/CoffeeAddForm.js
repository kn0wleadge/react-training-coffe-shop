import React, { Component } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { MdCancel } from "react-icons/md";
import CoffeeAddons from './CoffeeAddons';

export default class CoffeeAddForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       selectedAddons: [],
       selectedSize: 0,
    }
    this.addAddon = this.addAddon.bind(this);
    this.removeAddon = this.removeAddon.bind(this);
    this.handleSizeSelecte = this.handleSizeSelecte.bind(this);
  }
  handleSizeSelecte(size){
    this.setState({selectedSize: size});
    for (let el of document.getElementById('coffee-sizes').children)
      el.className="coffee-drawer-size-inactive"
    document.getElementById(`coffe-size-${size}`).className = "coffee-drawer-size-active";
  }
  addAddon(id){
    if (!this.state.selectedAddons.find(id))
    {
      this.setState({selectedAddons: {...this.state.selectedAddons, id}})
    }
  }
  removeAddon(id){
    if (this.state.selectedAddons.find(id))
      {
        let newList = this.state.selectedAddons.filter((el)=>el!==id);
        this.setState({selectedAddons: {newList}})
      }
  }

  render() {
    const calcPrice = () => {
      return (100)
    }
    return (
    <Drawer direction='bottom' open={this.props.isOpen} onClose={this.props.toggleDrawer} size='{75}vh'>
        <div className='coffee-drawer'>
            <div className='coffee-drawer-title'>
              <img src={`./images/${this.props.data.title}.png`} alt={`${this.props.data.title}`} />
              <h3>{this.props.data.title}</h3>
              <MdCancel className='coffee-drawer-cancel' onClick={()=>this.props.toggleDrawer({type:'close'})}/>
            </div>
            <div className='coffee-drawer-addons'>
              <h3>Настроить {this.props.data.title}</h3>
              <div className='coffee-drawer-sizes' id='coffee-sizes'>
              {this.props.data.sizes.map((el)=>{
                return (<div key={`coffe-size-${el}`} id={`coffe-size-${el}`} className='coffee-drawer-size-inactive' onClick={()=>this.handleSizeSelecte(el)}>{el}</div>)
              })}
              </div>
              <CoffeeAddons addons={this.props.addons} />
            </div>
            <div className='coffee-drawer-description'>
              Итоговое описание, возможно КБЖУ в виде таблицы, будет очень удобно
            </div>
            <div className='coffee-drawer-result'>
              <h3>Итого: {calcPrice()}₽</h3>
              <button className='coffee-drawer-button-add' type='button'>Добавить</button>
            </div>
        </div>
    </Drawer>
    )
  }
}