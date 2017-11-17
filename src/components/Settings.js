import React, {Component } from "react";
import  { connect } from " react-redux";
import agent from "../agent";
import ListErrors from "./ListErrors";

const mapStateToProps = state => {
    return {
        ...state.settings,
        currentUser: state.common.currentUser
    };
};

const mapDispatchToProps = dispatch =>({
    onClickLogout:() => dispatch({ type: "LOGOUT" }),
    onSubmitForm: user =>
        dispatch({ type: "SETTINGS_SAVED", payload: agent.Auth.save(user)})
})

class Settings extends Component{
    render(){
        return(
            <div classsName="settings-page">
                <div className="container page">
                    <div className="row">
                        <div className="col-mid-6 offset-md-3 col-exs-12">
                            <h1 className="text-xs-center">Your Settings</h1>
                            <ListErrors error={this.props.errors} />

                            <hr />

                            <button className="btn btn-outline-danger"
                            onClick={this.props.onClickLogout}
                            >
                            or Click here to logout.
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);