import React, { Component } from 'react';
// import { Icon } from 'antd';
import axios from 'axios';
import { List, Avatar } from 'antd';
import './PlayListSel.scss'
class PlayListSel extends Component {
  constructor () {
    super();
    this.state = {
      data:[

      ]
    }
  }
  componentDidMount () {
    axios.get('/kugou/plist/index&json=true').then( res => {
      this.setState({
        data:res.data.plist.list.info.slice(0,5)
      })
    });
    
  }
  
  render() {
    return (
      <div className="PlayListSel">
        <div className="tit">
          <span>歌单精选</span>
        </div>
        <List
          itemLayout="horizontal"
          dataSource={this.state.data}
          renderItem={item => (
        <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={item.user_avatar} />}
          title={item.specialname}
          description={item.intro}
        />
      </List.Item>
    )}
        />
      </div>
    )
  }
}
export default PlayListSel