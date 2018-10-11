import React,{ Component } from 'react';
import { List, Avatar } from 'antd';
import axios from 'axios';
import './Newsong.scss'
import c2 from '../../../img/c2.jpg'
class NewSong extends Component {
  constructor () {
    super();
    this.state = {
      data:[]
    }
  }
  componentDidMount() {
    axios.get('/kugou/?json=true').then(res =>{
      this.setState({
        data:res.data.data
      })
    })
  }
  render () {
    return (
      <div className="NewSong">
        <div className="newsong_tit">
          <span>新歌速递</span>
        </div>
        <List
          itemLayout="horizontal"
          dataSource={this.state.data}
          renderItem={item => (
        <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={c2} />}
          title={item.filename}
          description={item.remark}
        />
        </List.Item>
          )}
        />
      </div>
    )
  }
}
export default NewSong