import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
//adding data to the store using mutations
        state:{
                cart:[],/*important to add a default value to everything that is added to the store.*/
                },
                mutations:{
                    addRobotToCart(state,robot){
                        state.cart.push(robot);
                    },
                 },
});