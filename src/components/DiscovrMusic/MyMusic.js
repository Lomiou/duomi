import React, { Component } from 'react';
import { Icon } from 'antd';
import './MyMusic.scss'
import SongList from './SongList'
export default class MyMusic extends Component {
  render() {
    return (
      <div className="MyMusic">
        <div className="login">
          <div className="user">
            <Icon type="user" theme="outlined" />
          </div>
          <p>立即登录</p>
        </div>
        <div className="Music">
          <div className="item">
            <p>
              <Icon type="customer-service" theme="twoTone" />
              <span>本地音乐</span>
            </p>
            <p>
              <em>0首</em>
              <Icon type="right" theme="outlined" />
            </p>
          </div>
          <div className="item">
            <p>
              <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
              <span>我喜欢的</span>
            </p>
            <p>
              <em>0首</em>
              <Icon type="right" theme="outlined" />
            </p>
          </div>
          <div className="item">
            <p>
              <Icon type="upload" theme="outlined" />
              <span>下载歌曲</span>
            </p>
            <p>
              <em>0首</em>
              <Icon type="right" theme="outlined" />
            </p>
          </div>
          <div className="item">
            <p>
              <Icon type="clock-circle" theme="twoTone" />
              <span>最近播放</span>
            </p>
            <p>
              <Icon type="right" theme="outlined" />
            </p>
          </div>
        </div>
        <div className="SongList">
          <div className="song">
              <p>
            <Icon type="menu-unfold" theme="outlined" />
            <span>我创建的歌单<em>(0)</em></span>
            <Icon type="right" theme="outlined" />
          </p>
          <p>
            <Icon type="plus" theme="outlined" />
            <Icon type="form" theme="outlined" />
          </p>
          </div>
          <div className="song">
              <p>
            <Icon type="menu-unfold" theme="outlined" />
            <span>我收藏的歌单<em>(0)</em></span>
            <Icon type="right" theme="outlined" />
          </p>
          <p>
            <Icon type="form" theme="outlined" />
          </p>
          </div>
        </div>
        <SongList></SongList>
      </div>
    )
    
  }
}