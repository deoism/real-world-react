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