<template>
<div class="box">
  <div class="Mcontent">
    lalalalalallalalalalalalalalalalalalalalalalalla
  </div>
  <div class="Mcontainer">
    <div class="Mleft">联系人</div>
    <div class="Mright">古天乐</div>
  </div>
  <div class="Mcontainer">
    <div class="Mleft">联系方式</div>
    <div class="Mright">18888888888</div>
  </div>
  <div class="Mcontainer">
    <div class="Mleft">分配至</div>
    <div class="Mright">
      <input type="text" placeholder="点击填写">
    </div>
  </div>
  <div class="Mcontainer">
    <div class="Mleft">联系方式</div>
    <div class="Mright">自动获取</div>
  </div>
  <div class="Mfooter">
    <button @click="submit">分   配</button>
  </div>
</div>
</template>

<script>
    export default {
      name: "remainwishes",
      methods:{
        submit(){

        }
      },
      create(){

      }
    }
</script>

<style scoped>
  .Mright input{
    text-align: right;
    color:#aaa;
  }

</style>
