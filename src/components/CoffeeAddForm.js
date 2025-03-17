import React, { Component } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { MdCancel } from "react-icons/md";
import CoffeeAddons from './CoffeeAddons';

export default class CoffeeAddForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        sugarCount: 0,
       selectedAddons: [],
       selectedSize: 300,
    }
    this.addAddon = this.addAddon.bind(this);
    this.removeAddon = this.removeAddon.bind(this);
    this.handleSizeSelecte = this.handleSizeSelecte.bind(this);
    this.removeSugar = this.removeSugar.bind(this)
    this.addSugar = this.addSugar.bind(this)
  }
  

  removeSugar(){
    this.setState({sugarCount: this.state.sugarCount-1})
  }
  addSugar(){
    this.setState({sugarCount: this.state.sugarCount+1})
  }

  handleSizeSelecte(size){
    this.setState({selectedSize: size});
    for (let el of document.getElementById('coffee-sizes').children)
      el.className="coffee-drawer-size-inactive"
    document.getElementById(`coffe-size-${size}`).className = "coffee-drawer-size-active";
  }
  addAddon(addon){
    if (this.state.selectedAddons.find((el)=>el.id===addon.id)===undefined)
    {
      let newArray = this.state.selectedAddons
      newArray.push(addon)
      this.setState({selectedAddons: newArray})
    }
  }
  removeAddon(addon){
    if (this.state.selectedAddons.find((el)=>el.id===addon.id)!==undefined)
      {
        let newArray = this.state.selectedAddons.filter((el)=>el.id!==addon.id)
        this.setState({selectedAddons: newArray})
      }
  }

  render() {
    const calcPrice = () => {
      try {
        let resultSum = this.props.data.price[this.props.data.sizes.findIndex((el)=>{
          if (el === this.state.selectedSize)
            return true;
          return false;
        })]
        this.state.selectedAddons.map((el)=>{
            resultSum += el.price
            return "";
        })
        return resultSum;
      } catch(error) {
        //console.error(error)
      }
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
                return (<div key={`coffe-size-${el}`} id={`coffe-size-${el}`} className={el===this.state.selectedSize?
                  'coffee-drawer-size-active':
                  'coffee-drawer-size-inactive'} 
                  onClick={()=>this.handleSizeSelecte(el)}>{el}</div>)
              })}
              </div>
              <CoffeeAddons sugarCount={this.state.sugarCount} addons={this.props.addons} onAdd={this.addAddon} onRemove={this.removeAddon} removeSugar={this.removeSugar} addSugar={this.addSugar}/>
            </div>
            <div className='coffee-drawer-description'>
              Итоговое описание, возможно КБЖУ в виде таблицы, будет очень удобно
            </div>
            <div className='coffee-drawer-result'>
              <h3>Итого: {calcPrice()}₽</h3>
              <button className='coffee-drawer-button-add' type='button' onClick={()=>{
                let finalAddons = this.state.selectedAddons.map((el)=>{
                  return el = {
                    title: el.title,
                    amount: 1,
                  }
                })
                if (this.state.sugarCount>0){
                  let sugar = this.props.addons.find((el)=>el.title==="Сахар")
                  finalAddons.push({title: sugar.title, amount: this.state.sugarCount})
                }
                this.props.onAdd({
                  title: this.props.data.title,
                  size: this.state.selectedSize,
                  addons: finalAddons,
                  price: calcPrice(),
                })
                this.props.toggleDrawer({type:'close'})
              }}>Добавить</button>
            </div>
        </div>
    </Drawer>
    )
  }
}