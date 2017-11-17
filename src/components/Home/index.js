import React, { Component } from "react";
import { connect } from "react-redux";
import MainView from "./MainView";
import Banner from "./Banner";

import agent from "../../agent";
<<<<<<< HEAD
//const Promise = global.Promise;
=======

const Promise = global.Promise;
>>>>>>> 8fdcd6776794960c824b18c71e0c9052b30e4999

const mapStateToProps = state => ({
  appName: state.common.appName
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: "HOME_PAGE_LOADED", payload })
});

<<<<<<< HEAD
=======
//class Home extends React.Component
>>>>>>> 8fdcd6776794960c824b18c71e0c9052b30e4999
class Home extends Component {
  componentWillMount() {
    this.props.onLoad(agent.Articles.all());
  }
  render() {
    return (
      <div className="home-page">
        <Banner appName={this.props.appName} />
        <div className="container page">
          <div className="row">
            <MainView />
            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

<<<<<<< HEAD
export default connect(mapStateToProps, mapDispatchToProps)(Home);
=======
export default connect(mapStateToProps, mapDispatchToProps)(Home);
>>>>>>> 8fdcd6776794960c824b18c71e0c9052b30e4999
