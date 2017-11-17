<<<<<<< HEAD
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
=======
import React from "react";
import { connect } from "react-redux";

//shared component
import ArticleList from "../ArticleList";

const mapStateToProps = state => ({
  articles: state.home.articles
});

const MainView = props => {
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <li className="nav-item">
            <a href="" className="nav-link active">
              Global Feline
            </a>
          </li>
        </ul>
      </div>
      <ArticleList articles={props.articles} />
    </div>
  );
};

export default connect(mapStateToProps)(MainView);
>>>>>>> 8fdcd6776794960c824b18c71e0c9052b30e4999
