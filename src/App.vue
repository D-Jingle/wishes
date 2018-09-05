<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
    }
  },
  created(){
    if(localStorage.account && localStorage.password && localStorage.account != '' && localStorage.password != ''){
      axios({
        url:this.GLOBAL.BASE_URL + 'Home/user/login',
        data:{
          account:localStorage.account,
          password:localStorage.password
        },
        method:'post',
      }).then((response)=>{
        console.log(response);
        if(response.data.code == 0){
          if(response.data.data.admin == 3){
            this.$router.push('/student');
          } else if (response.data.data.admin == 2){
            this.$router.push('/teacher/wishlisttea/unclaim');
          } else if (response.data.data.admin == 1){
            this.$router.push('/admin/wishlistadm/unallotadm');
          } else {
            alert('请输入用户名密码');
          }
        } else {
          alert("请重新输入用户名密码");
        }
      }).catch((error)=>{
        console.log(error);
        alert('登陆失败');
      })
    } else {
      localStorage.account = '';
      localStorage.password = '';
      this.$router.push('/login');
    }
  }
};
</script>

<style>
  .box{
    margin-bottom: 5rem;
  }
body {
  background-color: #f8f8f8;
}

.van-cell__title .van-icon {
  font-size: 18px;
}
.Mcontainer{
  height: 2.7rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  margin: 1rem 0;
}
.Micon{
  display: flex;
  padding: 0 1rem;
}
.Micon img{
  width: 2rem;
  height: 2rem;
}
.Mgap{
  height: 3rem;
}
.Mtext{

}
.Mleft{
  position: absolute;
  left: 1rem;
}
.Mright{
  position: absolute;
  right: 1rem;
  display: flex;
  color: #aaa;
}
.Mright img{
  height: 2rem;
}
.Mcontent{
  padding: 1rem;
  min-height: 7rem;
  background-color: white;
}
.Mfooter{
  position: absolute;
  bottom: 5rem;
  width: 100%;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: dodgerblue;
  border-radius: 10%;
  color: white;
}
.Mfooter button{
  color: white;
  background-color: dodgerblue;
  border: 0;
  border-color: dodgerblue;
}
.Mfooter2 button{
  color: white;
  background-color: dodgerblue;
  border: 0;
  border-color: dodgerblue;
}

.Gcontainer{
  padding: 1rem 0;
}
.Gcontainer-ul{

}
.Gcontainer-li{
  height: 1.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
}
.Gcircle{
  width: 13%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.Gcircle div{
  width: .5rem;
  height: .5rem;
  background-color: rgb(11,197,238);;
  border-radius: 50%;
}
.Gcontent{
  height: 100%;
  overflow: hidden;
  width: 60%;
}
.Gguy{
  position: absolute;
  color: #aaa;
  font-size: .9rem;
  right: 10%;
}
.Gguy button{
  background-color: rgb(11,197,238);
  color: white;
  border-radius: 40%;
}
.Gguy span{
  color: rgb(11,197,238);
}
.Bcontainer{
  padding: 1rem 0;
}
.Bcontainer-ul{

}
.Bcontainer-li{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
  height: 1.2rem;
}
.Bcircle{
  /*flex-grow: 2;*/
  display: flex;
  padding-left: 7%;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.Bcircle div{
  width: .5rem;
  height: .5rem;
  background-color: rgb(11,197,238);;
  border-radius: 50%;
}
.Bcontent{
  /*flex-grow: 5;*/
  margin: 0 5%;
  height: 100%;
  width: 53%;
  overflow: hidden;
}
.Bguy{
  flex-grow: 2;
  color: #aaa;
  font-size: .9rem;
}
.Bguy button{
  background-color: rgb(11,197,238);
  color: white;
  border-radius: 40%;
}



.Acontainer{
  padding: 1rem 0;
}
.container-ul{

}
.Acontainer-li{
  height: 1.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
}
.Acircle{
  /*flex-grow: 2;*/
  /*width: 20%;*/
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-left: 7%;
}
.Acircle div{
  width: .5rem;
  height: .5rem;
  background-color: rgb(11,197,238);;
  border-radius: 50%;
}
.Acontent{
  margin: 0 5%;
  height: 100%;
  width: 53%;
  overflow: hidden;
}
.Aguy{
  /*flex-grow: 2;*/
  width: 37%;
  color: #aaa;
  font-size: .9rem;
}
.Aguy button{
  background-color: rgb(11,197,238);
  color: white;
  border-radius: 40%;
}
.none{
  height: 30rem;
  width: 100%;
  text-align: center;
  line-height: 30rem;
  color: #bbb;
  font-size: 2rem;
}
</style>
