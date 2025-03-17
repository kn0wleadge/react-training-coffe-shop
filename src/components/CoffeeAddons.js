import React, { Component } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";

export default class CoffeeAddons extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         sugarCount: 0,
      }
      this.removeSugar = this.removeSugar.bind(this)
      this.addSugar = this.addSugar.bind(this)
    }
    

    addons = this.props.addons
    removeSugar(){
        this.setState({sugarCount: this.state.sugarCount-1})
    }
    addSugar(){
        this.setState({sugarCount: this.state.sugarCount+1})
    }

    render() {
    return (
      <div className='coffee-addons-list'>
        {this.addons.map((el)=>{return(<div className='coffee-addon-card' key={el.id}>
            <img src={`./images/${el.title}.png`} alt={`${el.title}`}/>
            <div>
                <h3>{el.title}</h3>
                <h5>{el.price}₽</h5>
            </div>
            {el.price===0 ? (<div className='coffee-addon-sugar'>
                {this.state.sugarCount>0 && <>
                <IoIosRemoveCircle className='coffee-addon-sugar-remove' onClick={()=>this.removeSugar()}/>
                    <var>{this.state.sugarCount}</var>
                </>}
                <IoIosAddCircle className='coffee-addon-sugar-add' onClick={()=>this.addSugar()}/>
                    </div>)
         : <input type='checkbox' />}
        </div>)})}
      </div>
    )
  }
}
