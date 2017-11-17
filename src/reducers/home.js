<<<<<<< HEAD
export default (state = {}, action) =>{
    switch(action.type){
        case "HOME_PAGE_LOADER":
            return {
                ...state,
                articles: action.payload.articles,
                articleCount: action.payload.articleCount
                
            };
            default:
                return state;
    }

};
=======
export default (state = {}, action) => {
  switch (action.type) {
    case "HOME_PAGE_LOADED":
      return {
        ...state,
        articles: action.payload.articles,
        articleCount: action.payload.articleCount
      };

    default:
      return state;
  }
};
>>>>>>> 8fdcd6776794960c824b18c71e0c9052b30e4999
