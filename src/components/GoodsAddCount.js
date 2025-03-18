import React, { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";

export default function GoodsAddCount(props) {
    const [count, setCount] = useState(0)
    const addCount = () => {
        if (count<1){
            props.onAdd({
                title: props.data.title,
                addons:[],
                price: props.data.price,
            })
        }
        else{
            props.onItemAmountChange(props.data.id, count+1, 'not-order-tab')
        }
        setCount(count+1)
    }
    const subCount = () => {
        props.onItemAmountChange(props.data.id, count-1, 'not-order-tab')
        setCount(count-1)
    }
  return (
    <div className='goods-buttons'>
      {count>0 ? <>
        <IoIosRemoveCircle className='goods-button-remove' onClick={subCount}/>
            <var>{count}</var>
        <IoIosAddCircle className='goods-button-add' onClick={addCount}/></>
        :<button className='add-button' type='button' onClick={addCount}>Добавить</button>
        }

    </div>
  )
}
