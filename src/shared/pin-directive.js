export default {
    bind: (element,binding)=>{
        // console.log('arg:',binding.arg,'modifiers:',binding.modifiers);
        // if(binding.arg!=='position') return ;
        // Object.keys(binding.modifiers).forEach(key=>{
        Object.keys(binding.value).forEach(position=>{
                  element.style[position]=binding.value[position];
            //  modifiers that are passed in are rigth and top, will set them to ,
            //  set to true if they exist
            //  sets element.style.top=5px and
            //  sets  element.style.right=5px
        })
        element.style.position='absolute';
        // element.style.bottom='5px';
        // element.style.right='5px';

    },
};