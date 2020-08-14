import axios from "axios";

export default {
  signIn: function(userData) {
    return axios.post("/api/users/signin", userData);
  },
  signUp: function(userData) {
    return axios.post("/api/users/signup", userData);
  },
  
};
