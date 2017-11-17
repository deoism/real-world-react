import agent from "./agent";



const promiseMiddleware = store => next => action =>{

    if(isPromise(action.payload)){
        action.payload.then(
            res=>{
                action.payload =  res;
                store.dispatch(action);
        },
        error => {
            action.error = true;
            action.payload = error.response.body;
            store.dispatch(action);
        }
        
    );
return;
};

next(action);

};


const localStorageMiddleware = store => next => action =>{
    if(action.type === "LOGIN" || action.type === "REGISTER"){
        if(action.error){
            window.localStorage.setItem("jwt",action.paylload.user.token);
            //agent.setToken(action.payload.user.token);
        } else if(action.type==="LOGOUT"){
            window.localStorage.setItem("jwt","");
            //agent.setToken(nul);
        }
        }
        next(action);

    }



function isPromise(v){
    return v && typeof v.then === 'function';
}

    export{
    promiseMiddleware,
    localStorageMiddleware
     }
    
