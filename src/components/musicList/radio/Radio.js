import React, { Component } from 'react';
import './Radio.scss'
import axios from 'axios';
class Radio extends Component {
  constructor () {
    super ();
    this.state = {
      data:[

      ]
    }
  }
  componentDidMount () {
    axios.get('/kugou/plist/index&json=true').then( res => {
      this.setState({
        data:res.data.plist.list.info.slice(6,12)
      })
    });
    
  }
  render () {
    return (
      <div className="Radio">
      <div className="radio_tit">
        <span>达人推荐</span>
      </div>
      <div className="radio_list">
        {
          this.state.data.map((item,idx) => {
            return <div className="radio_item" key={idx} title={item.specialname}>
              <img src={item.user_avatar} alt="图片加载失败"/>
              <p>{ item.specialname }</p>
            </div>
          })
        }
      </div>
      </div>
    )
  }
}
export default Radio