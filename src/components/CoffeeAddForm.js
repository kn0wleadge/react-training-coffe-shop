import React, { Component } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

export default class CoffeeAddForm extends Component {
  render() {
    return (
    <Drawer direction='bottom' open={this.props.isOpen} onClose={this.props.toggleDrawer} size='{75}vh'>
        <div className='coffee-drawer'>
            
        </div>
    </Drawer>
    )
  }
}