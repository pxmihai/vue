<template>
  <div>
      <h1>{{part.title}}</h1>
      <div>{{part.description}}</div>
  </div>
</template>

<script>
    // import parts from  '../data/parts'
    import getPartsMixin from './get-parts-mixin';
    export default {
        name: "PartInfo",
        mixins: [getPartsMixin],
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

                const{partType, id}=this;
                /*decoupled compoent from the route*/
                return this.parts[partType].find(part=> part.id===+id);/*cast to number*/
                    // title:'Part Title',
                    // description:'Part Description',



            }
        },

};
</script>

<style scoped>

</style>