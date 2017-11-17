    import React from "react";
import { connect } from "react-redux";

import agent from "../agent";

//any of the properties on store auth will be spread out to props of 
//login component

const mapStateToProps = state =>({...state.Auth});



const mapDispatchToProps = displatch => ({
    onSubmit: (email,password) => 
    dispatchEvent({type:"LOGIN",payload: agent.Auth.login(email,password)})
});

class Login extends React.Component{
state = {};
handleInputonChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
};

handleOnSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.email, this.state.password);

};

render(){
    return(
        <div classname="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-mid-6 offset-med-3 col-xs-12">
                        <h1 className="text-xs-center">Sign In</h1>
                        <p className="text-xs-center">
                            <a>Need an account?</a>
                        </p>

                        <form onSubmit={this.handleOnsubmit}>
                        <fieldset>
                            <fieldset className="form-group">
                                <input
                                    onChange={this.handleInputonChange}
                                    className="form-control from-control-lg"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    />
                            </fieldset>
                            <fieldset className="form-group">
                                <input
                                    onChange={this.handleInputonChange}
                                    className="form-control form-control-lg"
                                    name="password"
                                    type="password"
                                    placeholder="Pawssword"
                                />
                            </fieldset>
                            <button
                                className="btn btn-lg btn-primary pull-xs-right"
                                type="submit"
                            >
                                Sign in
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);