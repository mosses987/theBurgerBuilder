import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom'
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/checkout/Checkout'
import Orders from '../src/containers/Orders/Orders'

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/orders" exact component={Orders}/>
            <Route path="/" exact component={BurgerBuilder}/>           
            <Checkout/>
          </Switch>
          
        </Layout>
      </div>
    );
  }
}

export default App;