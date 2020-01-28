import Vue from 'vue';
import Vuex from 'vuex';


import bananaModule from "@/store/modules/robots";
import usersModule from'./modules/users';
//replaced robotsModule with bananaModule as name for fun


Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        fruit:bananaModule,
        users:usersModule,
    }
});