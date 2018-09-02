<template>
    <div class="box">
      <div class="none" v-if="!isData"> 暂无数据</div>
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
</template>

<script>
  export default {
    name: "claim",
    data(){
      return {
        task:[],
        isData: true
      }
    },
    methods:{
      tocomdetail(id){
        this.$router.push({name:'comdetailtea',params:{Id:id}})
      },
      getData(){
        axios({
          url:this.GLOBAL.BASE_URL + 'Home/wish/tealist',
        }).then((response)=>{
          if(response.data.code == 0){
            console.log(response);
            this.task = response.data.data.done;
            console.log(this.task);
            if(this.task.length == 0){
              this.isData = false;
            }
          } else {
            alert("请求失败！");
          }
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
