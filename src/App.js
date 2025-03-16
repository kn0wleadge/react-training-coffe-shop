import React, { Component } from 'react'
import './App.css';
import Header from './components/Header';
import TabsMenu from './components/TabsMenu';
import Footer from './components/Footer';
import CoffeeAddForm from './components/CoffeeAddForm';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isCoffeAddDrawerOpen: false,
      coffeAddDrawerData: {},
      coffeaddonslist:[
        {
          id: 1,
          title: "Сироп 1",
          price: 30
        },
        {
          id: 2,
          title: "Сироп 2",
          price: 20
        },
        {
          id: 3,
          title: "Сахар",
          price: 0
        },
      ],
       goodslist:[
        {
          id: 1,
          type: "coffee",
          title: "Латте",
          description: "Текст с описанием латте и тому подобное",
          sizes: [200, 300, 400, 500],
          price: [189, 229, 289, 319]
        },
        {
          id: 2,
          type: "coffee",
          title: "Американо",
          description: "Текст с описанием американо и тому подобное",
          sizes: [200, 300, 400],
          price: [149, 189, 229]
        },
        {
          id: 3,
          type: "bakery",
          title: "Большая пицца с ветчиной и сыром",
          description: "Описание, может про вес или бжу или ещё что-нибудь",
          price: 129
        },
        {
          id: 4,
          type: "bakery",
          title: "Маленькая пицца с крабовыми палочками",
          description: "Описание, может про вес или бжу или ещё что-нибудь",
          price: 79
        },
        {
          id: 5,
          type: "dessert",
          title: "Шоколадный чизкейк",
          description: "Описание, может про вес или бжу или ещё что-нибудь",
          price: 229
        },
       ],
       orderlist:[]
    }
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  

  render() {
    return (
      <div>
        <Header />
        <TabsMenu data={this.state.goodslist} addons={this.state.coffeaddonslist} order={this.state.orderlist} toggleDrawer={this.toggleDrawer}/>
        <Footer orderNum={this.state.orderlist.length}/>
        <CoffeeAddForm isOpen={this.state.isCoffeAddDrawerOpen} toggleDrawer={this.toggleDrawer} data={this.state.coffeAddDrawerData}/>
      </div>
    )
  }

  toggleDrawer(coffee){
    this.setState({isCoffeAddDrawerOpen: !this.state.isCoffeAddDrawerOpen});
    if (coffee.type==="coffee")
      this.setState({coffeAddDrawerData: coffee});
  }
}