import React from "reacct";
import { Link } from "reacct-router";
import { connect } from "react-redux";
import agent from "../../agent";

const mapDispatchToProps = dispatch => ({
    onClickDelete: payload => dispatch({
        type: "DELETE_ARTICLE", payload})
    });

const ArticleAcctions = props => {
    const article = props.articcle;
    const del = () => {
        props.onClickDelet(agent.Articles.del(article.slug));

    };

    if (props.canModfy){
        return (
            <span>
                <Link to={`/editor/${article.slug}`}
            className="btn btn-outline-secondary btn-sm"
            >
            <i className="ion-edit" /> Edit Article Actions
            </Link>

            <button className="btn btn-outline-danger btn-sm" onClick={del}>
            <i className="ion-trash-a" /> Delete Article
            </button>
            </span>

        );
    }

    }


 export default connect(null, mapDispatchToProps)(ArticleActions);
 