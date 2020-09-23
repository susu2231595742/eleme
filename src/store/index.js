import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export default new Vuex.Store({
  //state相当于组件中的data,专门用来存放全局的数据
  state: {
    name: '',
    password: '',
    user: [],
    info: [] 
  },
  //getters相当于组件中的computed  getters是全局的，computed是组件内部使用的
  getters:{},
  //mutations相当于组件中的methods，但是它不能使用异步方法（定时器、axios）
  mutations: {
    setInfo(state, info){
      this.state.info = info;
    },
    getUser(state, id){
      var userInfo = localStorage.getItem(id);
      this.state.user = JSON.parse(userInfo)
    },
    addUser(state, userData){
      const data = {
        id: userData.id,
        password: userData.password,
        cart: [],
        cartnum: 0,
        paymoney: 0
      }
      localStorage.setItem(data.id, JSON.stringify(data));
    },
    addCart(state, data) {
      var user = this.state.user
      for (var i = 0; i < user.cart.length; i++) {
        if (data.name == user.cart[i].name) {
          user.cart[i].num++;
          user.cartnum++;
          user.paymoney += parseFloat(user.cart[i].price)
          localStorage.setItem(user.id, JSON.stringify(user));
          return
        }
      }
      user.cart.push(data)
      user.cartnum++
      user.paymoney += parseFloat(user.cart[i].price)
      localStorage.setItem(user.id, JSON.stringify(user));
    },
    reduceCart(state, data) {
      var user = this.state.user
      for (var i = 0; i < user.cart.length; i++) {
        if (data.name == user.cart[i].name) {
          if (user.cart[i].num == 1) {
            return alert("商品已经不能再减少了")
          }
          user.cart[i].num--;
          user.cartnum--;
          user.paymoney -= parseFloat(user.cart[i].price)
          localStorage.setItem(user.id, JSON.stringify(user));
          return
        }
      }
      user.cart.push(data)
      user.cartnum++
      localStorage.setItem(user.id, JSON.stringify(user));
    },
    cancelGoods(state, data){
      var user = this.state.user
      for(var i=0; i<user.cart.length; i++){
        if(data.name == user.cart[i].name){
          user.cartnum -= user.cart[i].num;
          user.paymoney -= parseFloat(user.cart[i].price * user.cart[i].num)
          localStorage.setItem(user.id, JSON.stringify(user))
          return
        }
      }
     
    }
    ,
    changePassword(state, newpassword) {
      this.state.user.password = newpassword;
      localStorage.setItem(this.state.user.id, JSON.stringify(this.state.user));
    },
    exit() {
      localStorage.setItem(this.state.user.id, JSON.stringify(this.state.user));
      this.state.user = []
    },
    cancel() {
      localStorage.removeItem(this.state.user.id);
      this.state.user = []
    }
  },
  // actions专门用来护理异步，实际修改状态值的，依然还是mutations
  actions: {
  },
  modules: {
  }
})
