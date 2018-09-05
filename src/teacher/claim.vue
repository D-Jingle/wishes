<template>
  <div class="box">
    <div class="none" v-if="!isData"> 暂无数据</div>

    <div class="Gcontainer">
      <ul class="Gcontainer-ul" v-for="(item,index) in task" v-bind:key="index + 'b'" v-if="item.college == userinfo.college">
        <li class="Gcontainer-li"  @click="touncomdetail(item.id)">
          <div class="Gcircle">
            <div></div>
          </div>
          <div class="Gcontent">{{item.content}}</div>
          <div class="Gguy">待完成</div>
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
          isData: true,
          userinfo:{}
        }
      },
      methods:{
        touncomdetail(id){
          this.$router.push({name:'claimde',params:{Id:id}})
        },
        getUserinfo(){
          axios({
            url: this.GLOBAL.BASE_URL + 'Home/user/tea_info',
          }).then((response)=>{
            console.log(response);
            if(response.data.code == 0){
              this.userinfo = response.data.data;
              console.log(this.userinfo);
            } else {
              alert("请求用户信息失败！");
            }
          }).catch((error)=>{
            console.log(error);
          })
        },
        getData(){
          axios({
            url:this.GLOBAL.BASE_URL + 'Home/wish/tealist',
          }).then((response)=>{
            if(response.data.code == 0){
              console.log(response);
              this.task = response.data.data.undone;
              console.log(this.task);
              if(this.task.length == 0){
                this.isData = false;
              }
            } else {
              alert("请求失败！");
            }
          }).catch((error)=>{
            console.log(error);
          })
        },
      },
      created(){
        this.getData();
        this.getUserinfo();
      }
    }
</script>

<style scoped>

</style>
