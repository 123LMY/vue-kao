import store from '../../store'
import router from '../../router'
import axios from 'axios';

const data = {
  state: {
    data: {}
  },
  mutations: {
    SET_DATA: (state, data) => {
      state.data = data;
    },
  },
  actions: {
    getData (context) {
      axios.get("/static/data.json").then(data => {
        context.commit("SET_DATA", data.data.data);
      }).catch(err => {

      })
    }
  }
}
export default data
