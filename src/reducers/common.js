const defaultState = {
  appName: "Meowdium",
  articles: null,
  token: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "APP_LOAD":
      return {
        ...state,
        token: action.token || null,
        currentUser: action.payload ? action.payload.user : null,
        appLoaded: true
      };
    case "REDIRECT":
      return { ...state, redirectTo: null };
    case "LOGIN":
      return {
        ...state,
        redirectTo: action.error ? null : "/",
        token: action.error ? null : action.payload.user.token,
        currentUser: action.error ? null : action.payload.user
      };
    case "REGISTER":
      return {
        ...state,
        redirectTo: action.error ? null : "/",
        token: action.error ? null : action.payload.user.token,
        currentUser: action.error ? null : action.payload.user
      };

    case "ARTICLE_SUBMITTED":
      const redirectUrl = `article/${actioin.payload.article.slug}`;
      return{ ...state, redireToo:redirectUrl};
      case "DELETE_ARTICLE":
      return{
        ...state,
        redirectTo: "/"

      };
    case "SETTINGS_SAVED":
      return{
        ...state,
        redirectTo: action.error ? null : "/",
        currentUser: acction.error ? null : action.payload.user
      };
    default:
      return state;
  }
};
