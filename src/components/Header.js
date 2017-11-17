
import React, { Component} from 'react';
import {Link} from "react-router";

const LoggedOutView = props =>{
	if(!props.currentUser){
		return(
			<ul clasNamem="nav navbar-nav pull-xs-right">
				<li className="nav-item">
					<Link to="/" className="nav-link">
				Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="login" className="nav-link">
					Sign in
					</Link>
				</li>
				<li className="nav-item">
					<Link to="register" className="nav-link">
					Sign Up
					</Link>
				</li>

			</ul>
		);
	};
		
	return null;
};

const LoggedInView = ({currentUser}) => {
	if (currentUser){
		return (
			<ul className="nav navbar-nav pull-ex-right">
				<li className="nav-item">
					<Link to="" className="nav-link">
					Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="editor" className="nav-link">
					<i className="ion-cmpose" />&nbsp;New Post
					</Link>
				</li>
				<li className="nav-item">
					<Link to="settings" className="nav-link">
						<i classNAME="ion-gear-a" />&nbsp;Settings
					</Link>
				</li>

				<li className="nav-item">
					<Link to={`@${currentUser.username}`} className="nav-link">
					<img role="presentation"  src={currentUser.image} className="user-pic" />
					{currentUser.username}
					</Link>
				</li>
			</ul>
		);
	}
return null;
};


class Header extends Component {
	render(){
		return (
			<div>
				<nav className="nav navbar-light">
					<div className="container">
						<Link className="navbar-band">
						{this.props.appName.toLowerCase()} 
						</ Link>
					
					<LoggedOutView currentUser={this.props.currentUser} />
					<LoggedInView currentUser={this.props.currentUser} />
					 	 
						
					</div>
				</nav>
			</div>
		);
	}
	
} 
export default Header;