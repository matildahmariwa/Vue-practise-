
 Vue.component('task-list',{
   template:
       '<div><task v-for="task in tasks">{{task.task}}</task></div>',
     data(){
         return{
             tasks:[
                 {task:'Go to the store',completed:true},
                 {task:'Finish screencast',completed:false},
                 {task:'Make donation',completed:false},
                 {task:'Clear inbox',completed:false},
                 {task:'Make dinner',completed:false},
                 {task:'Clean room',completed:true}

             ]
         };
 }
 });

 Vue.component('task',{
     template:'<li><slot></slot></li>'
 });

new Vue({
    el:'#root'
})
