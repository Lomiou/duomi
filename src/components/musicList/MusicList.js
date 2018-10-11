import React,{Component} from 'react';
// import { Icon } from 'antd';
import { Carousel } from 'antd';
import c1 from '../../img/c1.jpg'
import c2 from '../../img/c2.jpg'
import c3 from '../../img/c3.jpg'
import c4 from '../../img/c4.jpg'
import newsong from '../../img/newsong.jpg'
import songlist from '../../img/songlist.jpg'
import sab from '../../img/sab.jpg'
import songer from '../../img/songer.jpg'
import './MusicList.scss'
import PlayListSel from './playlistSel/PlayListSele'
import NewSong from './newsong/Newsong'
import Radio from './radio/Radio'
class MusicList extends Component {
  constructor () {
    super()
    this.state = {
      carousel:[
        c1,c2,c3,c4
      ],
      cards:[
        {
          imgurl:newsong,
          text:'新歌速递',
          url:'/newlist'
        },
        {
          imgurl:songlist,
          text:'歌单',
          url:'/slist'
        },
        {
          imgurl:sab,
          text:'排行榜',
          url:'/ranklist'
        },
        {
          imgurl:songer,
          text:'歌手',
          url:'/songerlist'
        }
      ]
    }
  }
  golist(item) {
    let {history} = this.props;
    history.push(item.url)
  }
  render() {
    return (
      <div className="MusicList">
      <Carousel autoplay>
        {
          this.state.carousel.map((item , idx) => {
            return <div key={idx}>
              <img src={item} alt="图片加载失败"/>
              </div>
          })
        }
      </Carousel>
        <div className="cards">
          {
            this.state.cards.map((item , idx) => {
              return <div className="new" key={idx} onClick={this.golist.bind(this,item)}>
                <img src={item.imgurl} alt="图片加载失败"/>
                <p>{item.text}</p>
                </div>
            })
          }
        </div>
        <PlayListSel />
        <NewSong />
        <Radio />
      </div>
    )
  }
}

export default MusicList