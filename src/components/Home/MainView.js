import React from 'react'

import { connect } from "react-redux";

import ArticleList from "../ArticleList";

const mapStateToProps = state => ({
	articles: state.articles
});

const MainView = props => {
	return(
		<div className="col-mid-9">
			<div className="feed-toggle">
				<ul className="nav nav-pills outLine-active">
					<li className="nav-item">
						<a href="" className="nav-link active">
							Global Deoism
						</a>
					</li>
				</ul>
			</div>
		<ArticleList articles={props.articles}/>
		</div>
	);
}; 
export default connect(mapStateToProps)(MainView);