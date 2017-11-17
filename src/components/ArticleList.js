import React from "react";
 import ArticlePreview from "./ArticlePreview";

const ArticleList = props =>{
    console.log(props.articles);
    if(!props.articles){
        return <div className="article-preview">Loading...</div>;
    }

    if(props.articles.length === 0){
        console.log(props.articles);
        return(
            <div className="article-preview"> errors or - no articles few...meow</div>
        );
    
    }

    return(
        <div >
        {props.articles.map((article, index) => (
          <div key={article.slug}>
              <h2>{article.title}</h2>
              <ArticlePreview article={article} />
        </div>
        ))}
        </div>
    );
};
             
export default ArticleList;