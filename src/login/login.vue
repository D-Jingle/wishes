<template>
  <div>
    <div class="pic">
      <img src="../../static/img/111.jpg" alt="">
    </div>
    <div class="container">
      <div class="text">用户名</div>
      <input type="text" v-model="account">
      <div class="gap"></div>
      <div class="text">密码</div>
      <input type="password" v-model="password">
      <button @click="submit()" class="btn">登陆</button>
      <!--<button @click="submit('/teacher')" class="btn">登陆教师端</button>-->
      <!--<button @click="submit('/admin')" class="btn">登陆管理端</button>-->
    </div>
  </div>
</template>

<script>
    export default {
      name: "login",
      data(){
        return {
          account:'2016224408',
          password:'Daijing88',
        }
      },
      created(){
        console.log(this.$store.state.count);
      },
      methods:{
        submit(){
          console.log(this.account);
          console.log(this.password);
          axios({
            url:'/apis/Home/user/login',
            data:{
              account:this.account,
              password:this.password
            },
            method:'post',
          }).then((response)=>{
            console.log(response);
            if(response.data.code == 0){
              if(response.data.data.admin == 3){
                this.$router.push('/student');
              } else if (response.data.data.admin == 2){
                this.$router.push('/teacher');
              } else if (response.data.data.admin == 1){
                this.$router.push('/admin');
              } else {
                alert("用户名或密码输入错误，请重新输入！");
              }
            } else {
              alert("用户名或密码输入错误，请重新输入！");
            }

          }).catch((error)=>{
            console.log(error);
            alert('登陆失败');
          })
        }
      },

    }
</script>

<style scoped>
  .pic img{
    width: 100%;
    height: 10rem;
  }
  .container{
    padding: 2rem;
  }
  .container input{

  }
  .gap{
    width: 100%;
    height: 1rem;
  }
  .text{
    display: inline;
  }
  .btn{
    display: inline;
    width: 80%;
    height: 2rem;
    background-color: dodgerblue;
    margin-top: 2rem;
  }

</style>
