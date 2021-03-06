export default (state = {}, action) => {
    switch (action.type) {
      case "ARTICLE_SUBMITTED":
        return {
          ...state,
          inProgress: null,
          errors: action.error ? action.payload.errors : null
        };
      case "ASYNC_START":
        if (action.subtype === "ARTICLE_SUBMITTED") { 
          return { ...state, inProgress: true };
        } else {
            return state;
        }
       
      default:
        return state;
    }
  };
