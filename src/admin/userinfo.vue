<template>
    <div class="box">
      <div class="Mcontainer">
        <div class="Mleft">姓名</div>
        <div class="Mright">{{userinfo.name}}</div>
      </div>
      <div class="Mcontainer">
      <div class="Mleft">学号</div>
      <div class="Mright">{{userinfo.acc}}</div>
      </div>
      <div class="Mcontainer">
        <div class="Mleft">学号</div>
        <div class="Mright">{{userinfo.acc}}</div>
      </div>
      <div class="Mcontainer">
        <div class="Mleft">学院</div>
        <div class="Mright">{{userinfo.college}}</div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "user-info",
      data(){
          return {
            id:'',
            userinfo:{}
          }
      },
      created(){
          this.id = this.$route.params.Id;
          this.getUserinfo();
      },
      methods:{
          getUserinfo(){
            axios({
              url:this.GLOBAL.BASE_URL + 'Home/user/stu_info',
              data:{
                acc:this.id
              },
              method:'post',
            }).then((res)=>{
              if(res.data.code ==0){
                this.userinfo = res.data.data;
              } else {
                alert('请求失败！')
              }
            }).catch((err)=>{
              console.log(err);
            })
          }
      }
    }
</script>

<style scoped>
  .Mleft{
    position: absolute;
    left: 1rem;
  }
  .Mright{
    position: absolute;
    right: 1rem;
    color: #aaa;
  }

</style>
