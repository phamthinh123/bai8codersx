import React, { Component } from 'react';
import "./RecommendedFriends.css";
import '../App.css';

import FollowFriend from './FollowFriend';

class RecommendedFriends extends Component {
	

  render() {
    return (
      <div className="RecommendedFriends">
      <div className="header"> 
 <span className="content1">Gợi ý cho bạn</span> 
  <a href="#" className="content2">Xem tất cả</a> 
   </div>
      {
      	this.props.friends.map((friend) =>
      		<FollowFriend user={friend} />
      		)
      }
      </div>
      )
    
  }
 
}

export default RecommendedFriends;
