import React, { Component } from 'react'
import './App.css';
import Header from './components/Header';
import TabsMenu from './components/TabsMenu';
import Footer from './components/Footer';
import CoffeeAddForm from './components/CoffeeAddForm';
import OrderList from './components/OrderList'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isCoffeAddDrawerOpen: false,
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
          id: 4,
          title: "Сироп 3",
          price: 30
        },
        {
          id: 5,
          title: "Сироп 4",
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
      coffeAddDrawerData: {
        info: 'init state',
        sizes: []
      },
       orderlist:[],
       footerTab: 0,
    }
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.addOrderItem = this.addOrderItem.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.changeOrderItemAmount = this.changeOrderItemAmount.bind(this);
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.footerTab !== this.state.footerTab)
    {
      const el = document.getElementById("footer-tabs")
      let i = 0;
      for (const child of el.children){
        child.className = i === this.state.footerTab ? 'tab-selected' : 'tab-not-selected'
        i++;
      }
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.footerTab===0 ?
        <TabsMenu data={this.state.goodslist} order={this.state.orderlist} toggleDrawer={this.toggleDrawer}/>
        :(<OrderList data={this.state.orderlist} onItemAmountChange={this.changeOrderItemAmount}/>)}
        <Footer orderNum={this.state.orderlist.length} onTabChange={this.changeTab}/>
        <CoffeeAddForm isOpen={this.state.isCoffeAddDrawerOpen} toggleDrawer={this.toggleDrawer} data={this.state.coffeAddDrawerData} addons={this.state.coffeaddonslist} onAdd={this.addOrderItem}/>
      </div>
    )
  }

  changeTab(index){
    this.setState({footerTab: index})
  }

  toggleDrawer(coffee){
    this.setState({isCoffeAddDrawerOpen: !this.state.isCoffeAddDrawerOpen});
    if (coffee.type==="coffee")
      this.setState({coffeAddDrawerData: coffee});
  }

  addOrderItem(item){
    let newOrderList = this.state.orderlist
    newOrderList.push({...item, amount: 1, id: newOrderList.length+1})
    this.setState({orderlist: newOrderList})
  }

  changeOrderItemAmount(id, newAmount){
    let item = this.state.orderlist.filter((el)=>el.id===id)
    let newOrderList = this.state.orderlist.filter((el)=>el.id!==id)
    if (newAmount > 0){
      item[0].amount = newAmount
      newOrderList.push(...item)
    }
    this.setState({orderlist: newOrderList})
  }
}