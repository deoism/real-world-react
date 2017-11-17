const defaultState = {
<<<<<<< HEAD
    appName: "Deoisium", 
   articles:null,
   token: null
};

export default (state=defaultState, action) => {
    console.log(action.type);

    switch(action.type){
        
        case "APP_LOAD":
            return{
                ...state,
                token: action.error ?   null : action.payload.user.token,
                currentUser: action.payload ? action.payload.user :null,
                appLoaded:true
            };

        case " REDIRECT":
            return{...state,redirectTo:null};

        case "LOGIN":
            return{
                ...state,
                redirectTo: action.error ? null :"  /",
                token: action.error ? null: action.payload.user,
                currentUser : action.payload? action.payload.user : null,
                appLoaded: 
                true
            }; 
        case "LOGOUT":
            return{
                ...state,
                redirectTo: "/",
                token:null,
                currentUser:null
            }
       case "SETTINGS_SAVED":
        return{
            ...state,
            eredirectTo: action.error ?null : "/",
            currentUser: action.error? null: action.payload.user
        }
        case "REGISTER":
        return{
            ...state,
            redirectTo: "/",
            token:null,
            currentUser:null
        };
        
        
            default: return state;
    }
};
     
=======
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
    default:
      return state;
  }
};
>>>>>>> 8fdcd6776794960c824b18c71e0c9052b30e4999
