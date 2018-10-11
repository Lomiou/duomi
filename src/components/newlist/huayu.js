import React , { Component } from 'react';
import axios from 'axios';
import { Icon ,Button,Carousel } from 'antd';
class Huayu extends Component {
  constructor () {
    super();
    this.state = {
      data:[],
      banner:[]
    }
  }
  componentDidMount() {
    axios.get('/kugou/?json=true').then(res =>{
      this.setState({
        data:res.data.data,
        banner:res.data.banner
      })
    })
  }
  render () {
    return (
      <div className="Huayu">
      <Carousel autoplay>
        {
          this.state.banner.map((item , idx) => {
            return <div key={idx}>
              <img src={item.imgurl} alt="图片加载失败"/>
              </div>
          })
        }
      </Carousel>
        <p>
          <span>大家都在听</span>
          <Button type="danger">全部播放</Button>
        </p>
          {
            this.state.data.map((item , idx) => {
              return <div className="list_item" key={idx}>
                <div className="songname">
                  <h4>{item.filename}</h4>
                  <small>{ item.remark }</small>
                </div>
                <div className="songedit">
                  <Icon type="dash" theme="outlined" />
                </div>
              </div>
            })
          }
      </div>
    )
  }
}
export default Huayu