import React, { Component } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";

export default class CoffeeAddons extends Component {
    addons = this.props.addons
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
                {this.props.sugarCount>0 && <>
                <IoIosRemoveCircle className='coffee-addon-sugar-remove' onClick={()=>this.props.removeSugar()}/>
                    <var>{this.props.sugarCount}</var>
                </>}
                <IoIosAddCircle className='coffee-addon-sugar-add' onClick={()=>this.props.addSugar()}/>
                    </div>)
         : <input type='checkbox' onChange={(event)=>{
          if (event.target.checked)
            this.props.onAdd(el);
          else 
            this.props.onRemove(el);
         }}/>}
        </div>)})}
      </div>
    )
  }
}