<template>
  <div class="box">
    <div class="none" v-if="!isData"> 暂无数据</div>

    <div class="container">
      <ul class="Acontainer-ul" v-for="(item,index) in task" :key="index + 'g'">
        <li class="Acontainer-li" @click="towishes(item.id)">
          <div class="Acircle">
            <div></div>
          </div>
          <div class="Acontent">{{item.content}}</div>
          <div class="Aguy">接受人：<span @click="touserinfo(item.angel_id)">代靖</span></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: "comwish",
      data(){
          return{
            task:[],
            isData: true
          }
      },
      created(){
          this.getData();
      },
      methods:{
        getData(){
          axios({
            url: this.GLOBAL.BASE_URL + 'Home/wish/admlist',
          }).then((response)=>{
            if(response.data.code == 0){
              console.log(response);
              this.task = response.data.data.done;
              console.log(this.task);
              if(this.task.length == 0){
                this.isData = false;
              }} else {
              alert('请求失败');
            }
          }).catch((error)=>{
            console.log(error)
          })
        },
        towishes(id){
          this.$router.push({name:'comwishdeadm',params:{Id:id}});
        },
        touserinfo(id){
          this.$router.push({name:'userinfo',params:{Id:id}});
        },
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
