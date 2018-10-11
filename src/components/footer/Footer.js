import React, { Component } from 'react';
import { Icon } from 'antd';
import ali from '../../img/ali.jpg'
import './footer.css'
export default class Footer extends Component {
  constructor () {
    super();
    this.state = {
     
    }
  };
  render() {
    return <div className="footer">
      <div className="song">
      <img src={ali} alt="图片加载失败"/>
      <p>
        <span>欢迎使用多米音乐</span><br/>
        <small>让音乐跟我走</small>
      </p>
      </div>
      <div className="play">
      <span><Icon type="play-circle" theme="outlined" /></span>
      <span><Icon type="menu-fold" theme="outlined" /></span>
      </div>

    </div>
  }
}