import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const Auth = new Vuex.Store({
  state: {
    email: "",
    password: "",
    isLogin: false,
  },
  mutations: {
    setUser(state, { email, password }) {
      state.email = email;
      state.password = password;
    },
    setLoginStatus(state, status) {
      state.isLogin = status;
    },
  },
  actions: {
    signIn(context, { email, password }) {
      // axios.post(`https://getvideo-api.vietlach.vn/auth/v1/token?grant_type=password&username=${email}&password=${password}`).then((result) => {
      //   console.log(result);
      //   context.commit("setUser", {email, password});
      //   context.commit("setLoginStatus", true);
      // }).catch((err) => {
      //   console.log(err)
      // });
      context.commit("setUser", { email, password });
      context.commit("setLoginStatus", true);
    },
    signOut(context) {
      context.commit("setUser", {});
      context.commit("setLoginStatus", false);
    },
    async signUp(context, { email, password }) {
      axios
        .post("https://getvideo-api.vietlach.vn/auth/v1/signup", {
          email: email,
          password: password,
        })
        .then((result) => {
          return result;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    },
  },
  getters: {
    userInfo(state) {
      return {
        email: state.email,
        password: state.password,
      };
    },
  },
});
