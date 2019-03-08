import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    refDate: {}
  },
  mutations: {
    setRefDate(state, refDate) {
      state.refDate = refDate;
      console.log(`new refDate set. (${refDate.format("YYYY-MM-DD")})`);
    }
  },
  getters: {
    getRefDate: state => {
      return state.refDate;
    }
  }
});
