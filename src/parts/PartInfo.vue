<template>
  <div>
      <hi>{{part.title}}</hi>
      <div>{{part.description}}</div>
  </div>
</template>

<script>
    import parts from  '../data/parts'
    export default {
        name: "PartInfo",
        // props:['partType','id'],
        props:{
            partType:{type:String},
            id:{type:Number,String},
            validator(value){
                return Number.isInteger(Number(value));
            },
        },
        computed:{
            part(){
                // const partType=this.$route.params.partType;
                // const id=this.$route.params.id;
                // const {partType, id}= this.$route.params;
                const{partType, id}=this;
                /*decoupled compoent from the route*/
                return parts[partType].find(part=> part.id===+id);/*cast to number*/
                    // title:'Part Title',
                    // description:'Part Description',



            }
        },
        // data(){
        //     return{
        //         part:{
        //
        //         },
        //     };
        // },
};
</script>

<style scoped>

</style>