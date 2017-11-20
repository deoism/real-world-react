import React, { Component } from "react";
import { connect} from "react-redux";
import marked from "marked";
import agent from "../../agent";

const mapStatetoProps = state => ({
    ...state.article,
    currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
    onLoad: payoad => dispatch({ type: "ARTICLE_PAGE_LOADED", payload})
});

class Article extends Component {
    componentWillMount(){
        const articleId = this.props.params.id;
        this.props.onLoad(
                Promise.all([
                    agent.Articles.get(articleId),
                    agent.Comments.forArticle(articleId)
                ])
        );
    }


render(){
    const article = this.props
    if(!article){
        return null;
    }

const markeup = {__html: marked(article.body)}

return ( 
    <div className="article-page">
        <div className="banner">
            <div className="container">
                <h1> {article.title}</h1>
                </div>
            </div>

            <div className="container page">
                <div className="row article-content">

                    <div className="col-xs-12">
                        <div dangerouslySetInnerHTML={markup}/>
                        <ul className="tag-list">
                            {article.tagList.map(tag => {
                                return (
                                    <li className="tag-default tag-pill tag-outline" key={tag}>
                                    {tag}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="article-actions" />
                    <div className="row" />
                        <CommentContainer
                        comments={this.props.comments || []}
                        errors={this.props.commentErrors}
                        slug={this.props.params.id}
                        currentUsers={this.props.currentUser}
                        />
                        </div>
                    </div>       );

export default connect(mapStateToProps, mapDispatchToProps)(Article);