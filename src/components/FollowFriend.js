import React, { Component } from 'react';
import "./FollowFriend.css"
class FollowFriend extends Component{
	render(){
		
		return(

<div className="FollowFriend">
<div className="header"> 
 <span className="content1">Gợi ý cho bạn</span> 
  <a href="#" className="content2">Xem tất cả</a> 
   </div>
<div className="main">
<span className="content3">
<img src={this.props.friend.avatar} width="80" height="80"/>
<span className="content3a">
<p>{this.props.friend.name}</p>
<p>Gợi ý cho bạn</p>
</span>
</span>
<span className="content4">
<a href="#">Theo dõi</a>
</span>

</div>
</div>
			)
	}
}
export default FollowFriend