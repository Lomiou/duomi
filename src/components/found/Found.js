import React,{Component} from 'react';
import { Icon } from 'antd';
import './Found.scss'
import s1 from '../../img/s1.jpeg'
import s2 from '../../img/s2.jpeg'
import s3 from '../../img/s3.jpeg'
import s4 from '../../img/s4.jpeg'
import s5 from '../../img/s5.jpeg'
class Found extends Component {
  render() {
    return (
      <div className="Found">
        <div className="music0">
          <p>
            <Icon type="clock-circle" theme="twoTone" />
            <span>音乐圈</span>
          </p>
          <span>
            <Icon type="right" theme="outlined" />
          </span>
        </div>
        <div className="music0">
          <p>
            <Icon type="clock-circle" theme="twoTone" />
            <span>多米VIP专区</span>
          </p>
          <span>
            <Icon type="right" theme="outlined" />
          </span>
        </div>
        <div className="serverList">
          <div className="serverList_item">
            <Icon type="setting" theme="outlined" />
            <p>炫铃包月</p>
          </div>
          <div className="serverList_item">
            <Icon type="setting" theme="outlined" />
            <p>炫铃包月</p>
          </div>
          <div className="serverList_item">
            <Icon type="setting" theme="outlined" />
            <p>炫铃包月</p>
          </div>
          <div className="serverList_item">
            <Icon type="setting" theme="outlined" />
            <p>炫铃包月</p>
          </div>
          <div className="serverList_item">
            <Icon type="setting" theme="outlined" />
            <p>炫铃包月</p>
          </div>
          <div className="serverList_item">
            <Icon type="setting" theme="outlined" />
            <p>炫铃包月</p>
          </div>
        </div>
          <ul>
            <li><img src={s1} alt="sd"/></li>
            <li><img src={s2} alt="sd"/></li>
            <li><img src={s3} alt="sd"/></li>
            <li><img src={s4} alt="sd"/></li>
            <li><img src={s5} alt="sd"/></li>
          </ul>
      </div>
    )
  }
}

export default Found