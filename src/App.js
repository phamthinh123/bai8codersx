import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import RecommendedFriends from './components/RecommendedFriends'
import pxt from './img/95656721_641193913277978_7891943316239941632_n.png';
import vhl from './img/96017573_564874234442218_3389986844572647424_n.png';

import dhd from './img/97732522_539306073691536_6164080129132724224_n.jpg';

class App extends Component {
	constructor(){
		super();
		this.friends=[
		{
			name:"Phạm Xuân Thịnh",
			avatar:pxt
		},
		{
			name:"Vũ Hải Long",
			avatar:vhl
		},
		{
			name:"Đồng Hải Đăng",
			avatar:dhd
		}
		];
	}

  render() {
    return (
      <div className="App">
      
      		<RecommendedFriends friends={this.friends} />
      
      		
      
      </div>
      )
    
  }
 
}

export default App;
