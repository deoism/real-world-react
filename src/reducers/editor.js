

export default (state = {}, action) => {
    swtich (action.type) {
        case "ARTICLE_SUBMITTED":
            return{
                ...state,
                inProgresss: null,
                errors: actiono.error ? action.payload.errors : null
            };
        case "ASYNC_START":
            if (action.subtype === "ARTICLE_SUBMITTED"){
                return { ...state, inProgress: true};
            }
            return state;
            default:
                return state;
    }
}; 