import React from "react";
<<<<<<< HEAD
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
=======
import ArticlePreview from "./ArticlePreview";

const ArticleList = props => {
  //fetching articles
  console.log(props.articles);
  if (!props.articles) {
    return <div className="article-preview">Loading...</div>;
  }

  //no articles returned :-)
  if (props.articles.length === 0) {
    return (
      <div className="article-preview">No Articles are here .... meow.</div>
    );
  }

  //3rd, which is sweet, articles list stuff
  return (
    <div>
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
>>>>>>> 8fdcd6776794960c824b18c71e0c9052b30e4999
