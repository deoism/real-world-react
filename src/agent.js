<<<<<<< HEAD
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
=======
import superagentPromise from "superagent-promise";
import _superagent from "superagent";

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = "https://codercamps-conduit.herokuapp.com/api";

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set("Authorization", `Token ${token}`);
  }
};
const responseBody = res => res.body;

const requests = {
  get: url =>
    superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .then(responseBody),
  post: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody)
};

const Articles = {
  all: page => requests.get(`/articles?limit=10`)
};

const Auth = {
  current: () => requests.get("/user"),
  login: (email, password) =>
    requests.post("/users/login", { user: { email, password } }),
  register: (username, email, password) =>
    requests.post("/users", { user: { username, email, password } })
};

export default {
  Articles,
  Auth,
  setToken: _token => {
    token = _token;
  }
};
>>>>>>> 8fdcd6776794960c824b18c71e0c9052b30e4999
