
const {createApp} = Vue;

createApp({
  data(){
    return{
      toDo: [
        
      ],

      textInsert: '',

      lengthControl: false,
      optionControl: false,

      isStarted: false,
      clock: null,
      minuti: 0,
      secondi: 0,
      millisecondi: 0,

      selectedTime: 'Select the available time:',
      
      timeList: [],

      clockList: [],

      overtimeList: [],
      completedList:[]

    }
  },

  methods: {
    addList(string){
      if(this.textInsert.length < 5){
        this.optionControl = false;
        this.lengthControl = true;
        
      }else if(this.selectedTime === 'Select the available time:'){
        this.lengthControl = false;
        this.optionControl = true;
        
      } else{

        this.toDo.push({text: string, done: false})
        
        
        this.textInsert = '';
        this.lengthControl = false;
        this.optionControl = false;

        this.timeList.push(this.selectedTime);

        this.overtimeList.push({overtime:false, done: false})

        this.clockList.push({
          isStarted: false,
          clock: null,
          minuti: 0,
          secondi: 0,
          millisecondi: 0})

        this.selectedTime = 'Select the available time:'

        console.log(this.clockList)
      }
    },

    completeTask(index){
      
      this.toDo[index].done = !this.toDo[index].done;
      this.overtimeList[index].done = !this.overtimeList[index].done
    },

    removeTask(index){
      if(this.toDo[index].done){
        this.toDo.splice(index,1);
        this.timeList.splice(index,1);
        this.overtimeList.splice(index,1);
        this.clockList.splice(index,1);
      }else{
        alert('WARNING: click on a task to mark it as "completed" before removing it!')
      }
    },

    startChrono(index) {
      this.clockList[index].isStarted = true;
      console.log(this.clockList);
      this.clockList[index].clock = setInterval ( () => {
        this.clockList[index].millisecondi += 1
        
        

        if(this.clockList[index].millisecondi === 100) {
          this.clockList[index].millisecondi = 0;
          this.clockList[index].secondi++
        }
        if (this.clockList[index].secondi === 60) {
          this.clockList[index].secondi = 0;
          this.clockList[index].minuti++
        }else if(this.clockList[index].secondi == this.timeList[index] && this.clockList[index].secondi){
          
          this.pauseChrono(index)
          this.overtimeList[index].overtime = true;
        }
      
      }, 10)
    },

    resetChrono (index) {
      this.pauseChrono(index);
      this.clockList[index].minuti = 0;
      this.clockList[index].secondi = 0;
      
    },

    pauseChrono(index) {
      this.clockList[index].isStarted = false;
      clearInterval(this.clockList[index].clock);
    },

   
  },

  computed: {

    secondiZerofill (index) {
      return this.clockList[index].secondi.toString().padStart(2, '0')
    },
    minutiZerofill (index) {
      return this.clockList[index].minuti.toString().padStart(2, '0')
    }
      
  },

  mounted(){
   alert('NOTA: il lavoro è impostato in SECONDI solo per osservarne le funzionalità, ovviamente è da intendersi in minuti/ore')
  }
}).mount('#app')