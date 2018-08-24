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
    // 判断是否登陆，登陆过获取信息到各个端，未登陆到登陆页
    this.$router.push('/login');
  }
};
</script>

<style>
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
  height: 7rem;
  background-color: white;
}
.Mfooter{
  position: absolute;
  bottom: 8rem;
  width: 100%;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: dodgerblue;
  border-radius: 10%;
  color: white;
}

.Gcontainer{
  padding: 1rem 0;
}
.Gcontainer-ul{

}
.Gcontainer-li{
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

}
.Gguy{
  position: absolute;
  color: #aaa;
  font-size: .9rem;
  right: 10%;
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
}
.Bcircle{
  flex-grow: 2;
  display: flex;
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
  flex-grow: 5;
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
</style>
