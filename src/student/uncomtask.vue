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
        task: {},
      }
    },
    methods:{
      getData(){
        axios({
          url:this.GLOBAL.BASE_URL + 'apis/Home/wish/stulistall',
        }).then((response)=>{
          if(response.data.code == 0){
            console.log(response);
            this.task = response.data.data.undone;
            console.log(this.task);
          } else {
            alert('fail');
          }
        }).catch((error)=>{
          console.log(error)
        })
      },
      touncomtaskde(id){
        this.$router.push({name:'uncomtaskde',params:{Id:id}});
      },
      confirm(id){
        axios({
          url:this.GLOBAL.BASE_URL + 'apis/Home/wish/stuconfirm?id=' + id,
        }).then((response)=>{
          console.log(response);
          if(response.data.code == 0){
            console.log(response);
            alert('success');
          } else {
            alert('fail');
          }
        }).catch((error)=>{
          console.log(error)
        })
      }
    },
    created(){
      this.getData();
    }
  }
</script>

<style scoped>


</style>
