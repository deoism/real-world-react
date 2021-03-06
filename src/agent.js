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
      .then(responseBody),
  put: (url,body) =>
    superagent
    .get(`${API_ROOT}${url}`)
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

const Comments = {
  create: (slug,comment) => requests.post(`/articles/${slug}/{comments}`),
  forArticle : slug=> requests.get(`/articles/${slug}/{comments}`),
  delete:(slug,commentId)=> requests.delete(`/articles/${slug}/{comments}`)
}
export default { 
  Articles,
  Auth,
  Comments,
  setToken: _token => {
    token = _token;
  }
};
