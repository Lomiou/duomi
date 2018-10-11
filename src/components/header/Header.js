import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import logo from '../../img/logo.jpg'
import './Header.scss'
export default class Hearder extends Component {
  
  render() {
    return <div className="Hearder-top">
      <div className="logo">
        <img src={logo} alt="图片加载失败" />
        <span>多米音乐</span>
      </div>
      <ul>
        <li><NavLink to="/mymusic" activeStyle={{ color:'#FE70E0',fontWeight:'bold' }}>我的音乐</NavLink></li>
        <li><NavLink to="/musicList" activeStyle={{ color:'#FE70E0',fontWeight:'bold' }}>音乐架</NavLink></li>
        <li><NavLink to="/search" activeStyle={{ color:'#FE70E0',fontWeight:'bold' }}>搜索</NavLink></li>
        <li><NavLink to="/found" activeStyle={{ color:'#FE70E0',fontWeight:'bold' }}>发现</NavLink></li>
      </ul>
    </div>
  }
}