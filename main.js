Vue.component('tabs',{
    template:'<div>' +
        '<div class="tabs">' +
        '<ul>' +
        '<li class="is-active"><a>Pictures</a></li>'+
        '<li><a>Music</a></li>' +
        '<li><a>Videos</a></li>' +
        '<li><a>Documents</a></li>' +
        '</ul>' +
        '</div>' +


        '<div class="tabs-details">' +
        '<slot></slot>' +
        '</div>' +
        '</div>',

    mounted(){
        console.log(this.$children);
    }

});
vue.component('tab',{
    template:'<div><slot></slot></div>'

});

Vue.component('message',{
props:['title','body'],
    data(){
    return{
        isVisible:true
    }
    },
   template:
       '<article class="message" v-show="isVisible">' +
       ' <div class="message-header">' +
       '{{title}}' +
       '<button @click="hideModal" class="close">x</button>'+

       '  </div>' +
       ' <div class="message-body">' +
       '{{body}}' +
       '</div>' +
       '</article>',
methods:{
    hideModal(){
        this.isVisible=false
    }
}
});

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
