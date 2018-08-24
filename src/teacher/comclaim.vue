<template>
  <div class="box">
    <div class="box">
      <div class="Gcontainer">
        <ul class="Gcontainer-ul" v-for="(item,index) in task" v-bind:key="index + 'd'">
          <li class="Gcontainer-li"  @click="tocomdetail(item.id)">
            <div class="Gcircle">
              <div></div>
            </div>
            <div class="Gcontent">{{item.content}}</div>
            <div class="Gguy">已完成</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "claim",
    data(){
      return {
        task:[],
      }
    },
    methods:{
      tocomdetail(id){
        this.$router.push({name:'comdetailtea',params:{Id:id}})
      },
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
    },
    created(){
      this.getData();
    }
  }
</script>

<style scoped>

</style>
