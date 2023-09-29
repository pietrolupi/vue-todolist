
const {createApp} = Vue;

createApp({
  data(){
    return{
      toDo: [
        
      ],

      textInsert: '',

  

    }
  },

  methods: {
    addList(string){
      this.toDo.push({text: string, done: false})
      console.log(this.toDo);
      this.textInsert = '';
    }
  },

  mounted(){
   
  }
}).mount('#app')