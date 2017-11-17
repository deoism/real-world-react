import superagentPromise from 'superagent-promise';
import _superagent from 'superagent'; 
import JWT from "superagent-jwt";

const superagent = superagentPromise(_superagent,global.Promise);

const API_ROOT="https://codercamps-conduit.herokuapp.com/api";
 
const jwt = JWT({
    header: "Authoriztion",
    local: "jwt"
});


const responseBody = res => res.body;

const requests = {
    get:url =>
        superagent  
            .get(`${API_ROOT}${url}`)
            .use(jwt)
            .then(responseBody),
    post: (url,body)=>
        superagent
            .post(`${API_ROOT}${url}`, body)
            .use(jwt)
            .then(responseBody)

};

const Articles = {
    all: page => requests.get(`/articles?limit=10`)

};
  
 

const Auth = {   
    current: () =>requests.get("/user"),
    login: (email,password) =>
    requests.post("/users/login", { user: {email,password}}) 
};


export default {
    Articles,
    Auth  
};