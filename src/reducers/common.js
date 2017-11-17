const defaultState = {
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
                token: action.error ?null : action.payload.user.token,
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
                currentUser : acttion.payload? action.payload.user : null,
                appLoaded: true
            };
            default:
                return state;
        case "LOGOUT":
            return{
                ...state,
                redirectTo: "/",
                token:null,
                currentUser:null
            }
       case "SETTINGS_SAVED":
        return{
            ...stateredirectTo: action.error ?null : "/",
            currentUser: action.error? null: action.payload.user
        }
        case "REGISTER":
        return{
            ...state,
            redirectTo: "/",
            token:null,
            currentUser:null
        }
        
        
            default: return state;
    }
};
     