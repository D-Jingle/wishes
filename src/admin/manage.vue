<template>
    <div class="box">
      <div class="Mgap"></div>
      <div class="Mcontainer">
        <div class="Micon">
          <img src="../../static/icon/set.png" alt="" >
        </div>
        <div class="Mtext">人员管理</div>
      </div>
      <div class="Mcontainer">
        <div class="Micon">
          <img src="../../static/icon/message.png" alt="" >
        </div>
        <div class="Mtext">消息推送</div>
      </div>
      <div class="Mfooter2" @click="logout">
        <button>注   销</button>
      </div>
    </div>
</template>

<script>
    export default {
      name: "manage",
      methods:{
        logout(){
          localStorage.account = '';
          localStorage.password = '';
          location.reload();
        },
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
