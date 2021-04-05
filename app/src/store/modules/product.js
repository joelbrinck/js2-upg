import axios from '@/axios'

export default {
  state: {
    product: null,
  },
  getters: {
    product: state => state.product,
  },
  mutations: {
    SET_PRODUCT: (state, product) => {
      state.product = product
    },
    CLEAR_PRODUCT: state => state.product = null
  },
  actions: {
    getProduct: async ({ commit }, id) => {
      const res = await axios.get('/products/' + id)
      commit('SET_PRODUCT', res.data)
    },
    clearProduct: ({ commit }) => {
      commit('CLEAR_PRODUCT')
    }
  }
}