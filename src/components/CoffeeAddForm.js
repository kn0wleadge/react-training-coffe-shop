import React, { Component } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

export default class CoffeeAddForm extends Component {
  render() {
    console.log(this.props.data)
    return (
    <Drawer direction='bottom' open={this.props.isOpen} onClose={this.props.toggleDrawer} size='{75}vh'>
        <div className='coffee-drawer'>
            <div className='coffe-drawer-title'>
              <img src={`./images/${this.props.data.title}.png`} />
              <h1>{this.props.data.title}</h1>
            </div>
        </div>
    </Drawer>
    )
  }
}