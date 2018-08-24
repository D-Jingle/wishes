<template>
  <div class="box">
    <div class="Mcontent">
      lalalalalallalalalalalalalalalalalalalalalalalla
    </div>
    <div class="Mcontainer">
      <div class="Mleft">发布人</div>
      <div class="Mright">渣渣辉</div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">联系方式</div>
      <div class="Mright">18888888888</div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">认领人</div>
      <div class="Mright">渣渣辉</div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">联系方式</div>
      <div class="Mright">18888888888</div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">完成质量</div>
      <div class="Mright">
        <img src="../../static/icon/goodactive.png" alt="">
      </div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">志愿时长</div>
      <div class="Mright">待开发</div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "comdetailtea",
      created(){
        console.log(this.$route.params.Id);
      }
    }
</script>

<style scoped>

</style>
