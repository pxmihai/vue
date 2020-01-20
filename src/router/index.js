import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../home/HomePage'
import RobotBuilder from "@/build/RobotBuilder";
import PartInfo from "@/parts/PartInfo";

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: HomePage,
    }, {
        path: '/build',
        name: 'Build',
        component: RobotBuilder,
    },{
        path:'/parts/:partType/:id',
        name:'Parts',
        component:PartInfo,
        props:true,/*why does this work like this*/
/*passes teh params that it identifies as rout as props instead of route params */
    }],
});