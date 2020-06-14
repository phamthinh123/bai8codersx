import React, { Component } from 'react';
import "./FollowFriend.css"

class FollowFriend extends Component{
	render(){
		
		return(

<div className="FollowFriend">

<div className="main">
<span className="content3">
<img src={this.props.user.avatar} width="80" height="80"/>
<span className="content3a">
<p>{this.props.user.name}</p>
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