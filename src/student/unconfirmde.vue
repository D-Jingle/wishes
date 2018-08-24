<template>
  <div class="box">
    <div class="Mcontent">
      lalalalalallalalalalalalalalalalalalalalalalalla
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
      <div class="Mleft"></div>
      <div class="Mright">待教师确认</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "unconfirmde",
      created(){
          console.log(this.$route.params.Id);
      }
    }
</script>

<style scoped>

</style>
