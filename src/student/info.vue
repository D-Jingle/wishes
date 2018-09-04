<template>
  <div class="box">
    <div class="Mcontainer">
      <div class="Mleft">姓名</div>
      <div class="Mright" v-if="userinfo.name != ''">{{userinfo.name}}</div>
      <div class="Mright" v-if="userinfo.name == '' ">
        <input type="text" placeholder="请输入姓名" v-model="name" style="text-align: right">
      </div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">学号</div>
      <div class="Mright">{{userinfo.acc}}</div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">联系方式</div>
      <div class="Mright" v-if="userinfo.phone != ''">{{userinfo.phone}}</div>
      <div class="Mright" v-if="userinfo.phone == ''">
        <input type="text" placeholder="请输入电话号" v-model="phone" style="text-align: right">
      </div>
    </div>
    <!--<div class="Mcontainer">-->
      <!--<div class="Mleft">志愿总时长</div>-->
      <!--<div class="Mright">{{userinfo.time}}</div>-->
    <!--</div>-->
    <div class="Mfooter" @click="submit" v-if="userinfo.phone == '' || userinfo.name == ''">
      <button>提交联系方式</button>
    </div>
    <div class="Mfooter2" @click="logout">
      <button>注   销</button>
    </div>

  </div>
</template>

<script>
    export default {
      name: "info",
      data(){
        return{
          userinfo:{},
          phone:'',
          name:'',
        }
      },
      created(){
        this.getData();
      },
      methods:{
        logout(){
          localStorage.account = '';
          localStorage.password = '';
          location.reload();
        },
        getData(){
          axios({
            url: this.GLOBAL.BASE_URL + 'Home/user/stu_info',
          }).then((response)=>{
            console.log(response);
            if(response.data.code ==0){
              this.userinfo = response.data.data;
              console.log(this.userinfo);
            }
          }).catch((error)=>{
            console.log(error);
          })
        },

        submit(){
          if(this.phone.length == 11){
            axios({
              url: this.GLOBAL.BASE_URL + 'Home/user/stu_register',
              data:{
                account: this.userinfo.acc,
                phone:this.phone,
                nickname: this.name
              },
              method:'post',
            }).then((response)=>{
              console.log(response);
              if(response.data.code == 0){
                alert('提交成功');
                this.$router.go(-1);
              } else {
                alert("请求失败！");
              }
            }).catch((error)=>{
              console.log(error);
            })
          } else {
            alert('请输入正确的手机号');
          }
        }
      }
    }
</script>

<style scoped>
  .Mfooter2{
    position: absolute;
    bottom: 9rem;
    width: 100%;
    height: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: dodgerblue;
    border-radius: 10%;
    color: white;
  }
</style>
