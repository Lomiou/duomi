import React,{Component} from 'react';
import { Input } from 'antd';
import './Search.scss'
import searchimg from '../../img/search.jpg'
import s1 from '../../img/s1.jpeg'
import s2 from '../../img/s2.jpeg'
import s3 from '../../img/s3.jpeg'
import s4 from '../../img/s4.jpeg'
import s5 from '../../img/s5.jpeg'
const Search = Input.Search;
class Searchs extends Component {
  constructor () {
    super();
    this.state = {
      data:[
        {
          classfiy:'场景',
          classfiylist:[
           {
             imgurl:s1,
             tally:'文艺'
           },
           {
             imgurl:s1,
             tally:'一个人'
           },
           {
             imgurl:s1,
             tally:'在路上'
           },
           {
             imgurl:s1,
             tally:'夜店'
           },
           {
             imgurl:s1,
             tally:'学习'
           }
          ]
        },
        {
          classfiy:'主题',
          classfiylist:[
           {
             imgurl:s2,
             tally:'单曲循环'
           },
           {
             imgurl:s2,
             tally:'网络电台'
           },
           {
             imgurl:s2,
             tally:'动漫'
           },
           {
             imgurl:s2,
             tally:'歌词控'
           },
           {
             imgurl:s2,
             tally:'古风'
           },
           {
             imgurl:s2,
             tally:'90后'
           }
          ]
        },
        {
          classfiy:'语种',
          classfiylist:[
           {
             imgurl:s3,
             tally:'华语'
           },
           {
             imgurl:s3,
             tally:'英文'
           },
           {
             imgurl:s3,
             tally:'粤语'
           },
           {
             imgurl:s3,
             tally:'韩语'
           },
           {
             imgurl:s3,
             tally:'小语种'
           },
           {
             imgurl:s3,
             tally:'日语'
           }
          ]
        },
        {
          classfiy:'心情',
          classfiylist:[
           {
             imgurl:s4,
             tally:'安静'
           },
           {
             imgurl:s4,
             tally:'伤感'
           },
           {
             imgurl:s4,
             tally:'回忆'
           },
           {
             imgurl:s4,
             tally:'温暖'
           },
           {
             imgurl:s4,
             tally:'轻松'
           },
           {
             imgurl:s4,
             tally:'正能量'
           }
          ]
        },
        {
          classfiy:'风格',
          classfiylist:[
           {
             imgurl:s5,
             tally:'流行'
           },
           {
             imgurl:s5,
             tally:'摇滚'
           },
           {
             imgurl:s5,
             tally:'轻音乐'
           },
           {
             imgurl:s5,
             tally:'民谣'
           },
           {
             imgurl:s5,
             tally:'电子'
           },
           {
             imgurl:s5,
             tally:'舞曲'
           }
          ]
        },
      ]
    }
  }
  render() {
    return (
      <div className="Search">
        <div className="sea">
          <img src={searchimg} alt="图片加载失败"/>
        </div>
        <div>
        <Search
          placeholder="歌曲名/歌手/歌单/歌词"
          onSearch={value => console.log(value)}
          style={{ width: '100%' }}
        />
        </div>
        <div className="classfiy">
          {                                                               
            this.state.data.map((item , idx) => {                           //遍历第一层的数据
              return <div className="classfiy_item" key={idx}>
                <div className="classfiy_tit">
                  {item.classfiy}
                </div>
                <div className="classfiy_cont">
                  {
                    item.classfiylist.map((a,idx) => {                      //遍历第二层的数据
                      return <div className="pic" key={idx}>
                        <img src={a.imgurl} alt="miss"/>
                        <p>{ a.tally }</p>
                      </div>
                    })
                  }
                </div>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}

export default Searchs