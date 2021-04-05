import axios from '@/axios'

export default {
  state: {
    cart: [],
    carts: []
  },
  getters: {
    carts: state => state.carts,
    shoppingCart: state => {
      return state.cart
    },
    cartItemCount: state => {
      let items = 0
      state.cart.forEach(item => {
        items += item.quantity
      })
      return items
    },
    sumOfCart: state => {
      return state.cart.reduce((total, item) => {
        return total + item.product.price * item.quantity
      }, 0)
    }
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity }) => {
      let found = state.cart.find(item => item.product._id === product._id)
      if(found) {
        found.quantity += quantity
        return
      }
      state.cart.push({ product, quantity })
    },
    ADD_TO_QTY: (state, item) => {
      item.quantity++
    },
    SUB_FROM_QTY: (state, item) => {
      if(item.quantity > 1) {
        item.quantity--
      } else {
        state.cart = state.cart.filter(i => i.product._id !== item.product._id)
      }
    },
    REMOVE_FROM_CART: (state, item) => {
      state.cart = state.cart.filter(i => i.product._id !== item.product._id)
    },
    SAVE_CART: (state) => {
      state.cart = []
    },
    SET_CARTS: (state, carts) => {
      state.carts = carts
    },
    CLEAR_CART: state => state.carts = null
  },
  actions: {
    addProductToCart: ({ commit }, { product, quantity }) => {
      commit('ADD_TO_CART', { product, quantity })
    },
    addToQty: ({ commit }, item) => {
      commit('ADD_TO_QTY', item)
    },
    subFromQty: ({ commit }, item) => {
      commit('SUB_FROM_QTY', item)
    },
    removeProduct: ({ commit }, item) => {
      commit('REMOVE_FROM_CART', item)
    },
    saveCart: ({ commit }, cart) => {
      axios.post('/carts/new', cart, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
        .then(res => {
          if(res.status === 201) {
            commit('SAVE_CART', cart)
          }
        })
    },
    getCarts: ({ commit }) => {
      axios.get('/carts', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
        .then(res => {
          commit('SET_CARTS', res.data)
        })
    },
    clearSavedCarts: ({ commit }) => {
      commit('CLEAR_CART')
    }
  }
}