import  React, { Comonent } from "react";
import { connect } from "react-redux";

import agent from ".././/agent";
import ListErrors from "../ListErrors";
import SettingsForm from "./SettingsForm";

const mapStateToProps = state => ({
    ...state.settings,
    currentUser: state.common.currentUser
});

const mapDispatchToPorps = dispatch => ({
    onClickLogout: () => dispatch({
        type: "LOGOUT" }),
    onSubmitForm: user =>
        dispatch({ type: "SETTINGS_SAVED",
    payload: agent.Auth.save(user)})
    });

class Settings extends Component {
    render(){
        return(

            <div className="setting-page">
                <div className="container page">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 col-xs-12">
                            <h1 className="text-xs-center">Your Settings</h1>
                            
                            <ListErrors errors={this.props.errors} />
                            <SettingsForm
                                currentUser={this.props.currentUser}
                                onSubmitForm={this.props.onSubmitForm}
                                />
                                <hr />


                                <button 
                                    className="btn btn-outline-danger"
                                    onClick={this.props.onClickLogout}
                                    >
                                    Or click here to logout.
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToPorps)(Settings);


        )
    }

}