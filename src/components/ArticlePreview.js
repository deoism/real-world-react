import React from "react";
 
const ArticlePreview = ({article}) => {
    return(
        <div classname="article-preview">
            <div className="article-meta">
                <a>
                    <img src={article.author.image}  alt="deopic" />
                </a>
                <div className="info">
                    <a className="authot">{article.author.username}</a>
                    <span className="date">
                        {new Date(article.createdAt).toDateString()}
                    </span>
                </div>
                <div className="pull-xs-right">
                    <button className="btn btn-sm btn-outline-primary">
                        <i className="ion-hear" />
                        {article.favoritesCount}
                    </button>
                    </div>
            </div>
            <a to={`articles/${article.slug}`} className="preview-link">
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <span> Read more...</span>
            <ul className="tag-last">
                {article.tagList.map(tag =>(
                    <li className="tag-default tag-pill tag-outline"   key={tag}>
                    {tag}
                    </li>
                ))}
                </ul>
                </a>
                </div>
                 
    );
};

export default ArticlePreview;