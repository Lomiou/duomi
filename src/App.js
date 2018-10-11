import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import MyMusic from './components/DiscovrMusic/MyMusic'
import Search from './components/search/Search'
import MusicList from './components/musicList/MusicList'
import Found from './components/found/Found'
import NewList from './components/newlist/NewList'
import Slist from './components/slist/Slist'
import RankList from './components/ranklist/RankList'
import SongerList from './components/songerlist/SongerList'
class App extends Component {
  render() {
    return (
        <div className="App">
          <Header></Header>
          <Switch>
            <Route path="/search" component={Search} />
            <Route path="/musiclist" component={MusicList} />
            <Route path="/found" component={Found} />
            <Route path="/mymusic" component={MyMusic} />
            <Route path="/slist" component={Slist} />
            <Route path="/ranklist" component={RankList} />
            <Route path="/songerlist" component={SongerList} />
            <Route path="/newlist" component={NewList}></Route>
            <Route path="/" component={MyMusic} />
          </Switch>
        
          {/* <MyMusic></MyMusic> */}
          <Footer></Footer>
        </div>
    );
  }
}

export default App;
