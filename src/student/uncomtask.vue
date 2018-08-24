<template>
  <div class="box">
    <div class="Bcontainer">
      <ul class="Bcontainer-ul" v-for="(item,index) in task" v-bind:key="index + 'a'">
        <li class="Bcontainer-li" @click="touncomtaskde(item.id)">
          <div class="Bcircle">
            <div></div>
          </div>
          <div class="Bcontent">{{item.content}}</div>
          <div class="Bguy">
            <button @click.stop="confirm(item.id)">确认完成</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "comtask",
    data(){
      return{
        task: {}
      }
    },
    methods:{
      getData(){
        axios({
          url:'https://api.myjson.com/bins/1a85wg',
        }).then((response)=>{
          console.log(response);
          this.task = response.data.data.unaccepted;
          console.log(this.task);
        }).catch((error)=>{
          console.log(error)
        })
      },
      touncomtaskde(id){
        this.$router.push({name:'uncomtaskde',params:{Id:id}});
      },
      tocomdetail(){
        this.$router.push('/student/comdetail');
      },
      confirm(id){
        // 留坑待写
        console.log(id);
      }
    },
    created(){
      this.getData();
    }
  }
</script>

<style scoped>


</style>
