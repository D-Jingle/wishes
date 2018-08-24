<template>
<div class="box">
  <div class="container">
    <ul class="container-ul">
      <li class="container-li" @click="towishes">
        <div class="circle">
          <div></div>
        </div>
        <div class="content">陪伴读报一小时</div>
        <div class="guy">接受人：<span @click.stop="touserinfo">代靖</span></div>
      </li>
      <li class="container-li"  @click="towishes">
        <div class="circle">
          <div></div>
        </div>
        <div class="content">陪伴读报一小时</div>
        <div class="guy">接受人：<span @click.stop="touserinfo">代靖</span></div>
      </li>
      <li class="container-li"  @click="towishes">
        <div class="circle">
          <div></div>
        </div>
        <div class="content">陪伴读报一小时</div>
        <div class="guy">接受人：<span @click.stop="touserinfo">代靖</span></div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
    export default {
      name: "allot",
      methods:{
        touserinfo(){
          this.$router.push('/admin/userinfo');
        },
        towishes(){
          this.$router.push('/admin/wishes');
        }
      }
    }
</script>

<style scoped>
  .container{
    padding: 1rem 0;
  }
  .container-ul{

  }
  .container-li{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2rem 0;
  }
  .circle{
    flex-grow: 2;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  .circle div{
    width: .5rem;
    height: .5rem;
    background-color: rgb(11,197,238);;
    border-radius: 50%;
  }
  .content{
    flex-grow: 5;
  }
  .guy{
    flex-grow: 2;
    color: #aaa;
    font-size: .9rem;
  }
  .guy span{
    color: rgb(11,197,238);
  }


</style>
