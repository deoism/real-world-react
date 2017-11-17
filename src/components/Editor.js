import React, { Component } from "react";
import { connect } from "react-redux";
import agent from "../agent";
import ListErrors from "./ListErrors";

const mapStateToProps = stae => ({
    ...state.editor
});

const mapStateToDispatch = dispatch => ({
    onSubmit: payload => dispatcch({ type: "ARTICLE_SUBMITTED",payload})
});

class Editor extends Component {
    state = {
        title: "",
        description: "",
        body: "",
        tags: [],
        tagList: [],
        tag: ""
    };

handleInputChange = event => {
    const targetName=even.targetname;

    this.setState({
        [targetName]:event.target.value
    });
};

handleTagChange = event => {
    if(event.which === 13 || event.keyCode ===13){
        this.setState({
            tags:[...this.state.tags, event.target.value],
            tagList:
            [...this.state.tagList, event.target.value],
            tag:""
        });
        this.tagInput = "";
    }else{
        this.setState({tag:event.targeet.value});

    }
    };

    submitForm = ev =>{
        ev.preventDefault();
        const articcle = {
            title: this.state.title,
            description: this.state.description,
            body: this.state.body,
            tagList: this.state.tagList
        };

        this.props.onSubmit(agentArticles(create(article ));
    };

    removeTag = Tag => {
        console.log(tag);
    };
}

    render(){
        const{ title, description, boy, tagList, tag} = this.state;
        return (
            <div className="editor-page">
                <div className="container page">
                    <div classname="row">
                        <div className="col-mid-10 offset-mid-1 col-xs-12">
                            <ListErrors errors={this.props.errors} />

                            <form>
                                <fieldset>
                                    <fieldset className="form-group">
                                        <input className="form-control form-control-lg"
                                        type="text"
                                        name="title"
                                        placeholder="Artice Title"
                                        value={title}
                                        onChange={this.handleInputChange}
                                        />
                                        </fieldset>
                                        <fieldset className="form-group">
                                           <input 
                                           className="form-control"
                                           type="text"
                                           name="description"
                                           placeholder="What's this article about?"
                                           value={description}
                                           onChange={this.handleInputChange}
                                           />
                                           </fieldset>

                                           <fieldset className="form-group">
                                               <text attributeNameclassName="form-control"
                                               rows="8"
                                               name="body"
                                               placeholder="write your article (in markdown"
                                               value="{body}"
                                               onChange={this.handleInputChange}
                                               />
                                               </fieldset>


                                            <fieldset className="form-group">
                                                <input className="form-control"
                                                type="text"
                                                name="tag"
                                                value={tag}}
                                                placeholder="Enter Tags"
                                                onChange{this.handleTagChange}
                                                onKeyUp={this.handleTagChange}
                                                 />

                                                <div className="tag-list">
                                                    {tagList.map(tag=>{
                                                        return(
                                                            <span className="tag-default tag-pill" key={tag}>
                                                            <iclassName="icon-close-round"
                                                            onClick={this.removeTag(tag)}
                                                            />
                                                            {tag}
                                                            </span>
                                                        )
                                                    })}
                                                    </div>
                                                    </fieldset>

                                                    <button
                                                        className="btn btn-lg pull-xs-right btn-primary"
                                                        type="button"
                                                        disabled={this.props.inProgress}
                                                        onclick={this.submitForm}
                                                        >
                                                        Publish Article
                                                        </button>
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
        )
    }


    export default connect(mapStateToProps, mapStateToDispatcch)(Editor);