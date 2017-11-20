const defaultState = {
  appName: "Meowdium",
  artiles: null,
  token: null
};

export default(state= defaultState, action) => {
  switch(action.type){
    case "APP_LOAD":
     return {
       ...state,
       token: actiontoken || null,
       currentUser: action.payload ? action.payload.user: null,
       appLoaded: true
     };

     case "REDIRECT":
     return{...state, redirectTo: null };

     case "LOGIN":
      return{
      ...state,
      redirectTo: action.error ? null : "/",
      token: action.error ? null : action.payload.user.token,
      currentUser: action.error ? null : action.payloader.user
      };

      case "REGISTER":
      return{
        ...state,
        returnTo: action.error ? null : "/",
        token: action.error ? null : action.payload.user.token,
        currentUser: action.error ? null  : action.payload.user

      };
      
      default:
      return state;
    }
  };