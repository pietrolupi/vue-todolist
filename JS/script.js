
const {createApp} = Vue;

createApp({
  data(){
    return{
      toDo: [
        
      ],

      textInsert: '',

      lengthControl: false

    }
  },

  methods: {
    addList(string){
      if(this.textInsert.length < 5){
        this.lengthControl = true;
        console.log(this.lengthControl);
      }else{

        this.toDo.push({text: string, done: false})
        console.log(this.toDo);
        this.textInsert = '';
        this.lengthControl = false;
      }
    },

    completeTask(index){
      console.log('cliccatoooo')
      this.toDo[index].done = !this.toDo[index].done;
      console.log(this.toDo[index].done);
    },

    removeTask(index){
      if(this.toDo[index].done){
        this.toDo.splice(index,1)
      }else{
        alert('WARNING: click on a task to mark it as "completed" before removing it!')
      }
    }
  },

  mounted(){
   
  }
}).mount('#app')