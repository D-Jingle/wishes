<template>
  <div class="box">
    <div class="Gcontainer">
      <ul class="Gcontainer-ul" v-for="(item,index) in task" v-bind:key="index + 'un'">
        <li class="Gcontainer-li"  @click="tocomdetail(item.id)">
          <div class="Gcircle">
            <div></div>
          </div>
          <div class="Gcontent">{{item.content}}</div>
          <div class="Gguy"><span>已完成</span></div>
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
            this.task = response.data.data.accepted;
            console.log(this.task);
          }).catch((error)=>{
            console.log(error)
          })
        },
        tocomdetail(id){
          this.$router.push({name:'comdetail',params:{Id:id}});
        }
      },
      created(){
        this.getData();
      }
    }
</script>

<style scoped>

</style>
