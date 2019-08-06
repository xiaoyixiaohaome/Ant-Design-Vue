import Vue from 'vue'
import Vuex from 'vuex'
// import { admin } from './modules/admin'

Vue.use(Vuex)

export interface IRootState {
  // admin: admin
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})