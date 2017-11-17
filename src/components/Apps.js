
import React, { Component } from 'react';
import { connect } from 'react-redux';
 
import agent from "../agent";
import Header from "./Header";
import Home from "./Home";

//
const mapStateToProps = state => ({
	appName: state.common.appName,  
	redirectTo: state.common.redirectTo,
	currentUser: state.common.currentUser
});


const mapDispatchToProps = dispatch => ({
	onLoad: (payload,token) => dispatch({type:"APP_LOAD",payload,token}),
	onRedirect:()=> dispatch({type:"REDIRECT"})
});

class App extends Component {
	state = {};

	componentWillMount(){
		const token = window.locationStorage.getItem("jwt");
		if(token){
			//set wwith agent
		//	agent.setToken(token);
		}
		this.props.onload(token ? agent.Auth.current() : null, token);

	}
 
	componentWillReceiveProps(nextProps){
		if(nextProps.redirectTo){ 
			this.context.router.replace(nextProps.redirectTo);
			this.props.onRedirect();
		}
	}

  render() {
		// find out if url setting isRoot?
	  const appName = this.props.appName;
    return (
		<div> 
			<Header 
			appName={appName} 
			rootURL={true}
			currentUser={this.props.currentUser} 
			/>
			{this.props.children} 
		</div>
    );
  }	
}


App.contenxtTypes = {
	router: React.PropTypes.object.isRequired
};


export default connect(mapStateToProps,mapDispatchToProps)(App);