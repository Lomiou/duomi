import React , { Component } from 'react';
import { Route,NavLink,Switch } from 'react-router-dom';
import './NewList.scss'
import Huayu from './huayu'
class NewList extends Component {
  constructor () {
    super();
    this.state = {

    }
  }

  render () {
    return (
      <div className="NewList">
        <div className="new_tit"></div>
        <ul className="new_list_nav">
          <li> <NavLink to="/newlist/huayu" activeStyle={{ borderBottom:'2px solid red' }}>华语</NavLink></li>
          <li> <NavLink to="/newlist/oumei" activeStyle={{ borderBottom:'2px solid red' }}>欧美</NavLink></li>
          <li> <NavLink to="/newlist/hanyu" activeStyle={{ borderBottom:'2px solid red' }}>韩国</NavLink></li>
          <li> <NavLink to="/newlist/riyu" activeStyle={{ borderBottom:'2px solid red' }}>日本</NavLink></li>
        </ul>
        <Switch>
          <Route path="/newlist/huayu" component={ Huayu }></Route>
          <Route path="/newlist" component={ Huayu }/>
        </Switch>
        
      </div>
    )
  }
}
export default NewList;