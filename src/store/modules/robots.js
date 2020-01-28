import axios from "axios";

export default{
//adding data to the store using mutations
    state:{
        cart:[],/*important to add a default value to everything that is added to the store.*/
            parts:null,
    },
    mutations:{
        addRobotToCart(state,robot){
            state.cart.push(robot);
        },
        updateParts(state,parts){
            state.parts=parts;
        }
    },
    actions:{
        getParts({commit}){
            axios.get('/api/parts')
                .then(result=>commit('updateParts',result.data))
                .catch(console.error);
        },
        addRobotToCart({commit,state},robot){
            const cart=[...state.cart,robot];
            return axios.post('/api/cart',cart)
                .then( ()=>commit('addRobotToCart',robot));
            //  add to local state, add a then so axio post returns a promise anonymous then call the
            //  addtocart mutation to add the robot to the cart, with commit anonymous function
        },
        //
    }
,
    getters:{
        cartSaleItems(state){
            return state.cart.filter(item=>item.head.onSale);
        },
    },
}