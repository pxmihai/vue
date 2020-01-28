export default{
    created(){
            this.$store.dispatch('getParts');
},
    computed:{
        parts(){
            return this.$store.state.fruit.parts || {
                heads: [], arms: [], torsos: [], bases: [],
            };
        },
    },
};