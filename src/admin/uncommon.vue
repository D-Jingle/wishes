<template>
  <div class="box">
    <div class="container">
      <ul class="container-ul" v-for="(item,index) in task">
        <li class="container-li" @click="towishes(item.id)">
          <div class="circle">
            <div></div>
          </div>
          <div class="content">{{item.content}}</div>
          <div class="guy">接受人：<span @click.stop="touserinfo(item.angel_id)">代靖</span></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "allot",
    data(){
      return{
        task:[]
      }
    },
    created(){
      this.getData();
    },
    methods:{
      getData(){
        axios({
          url:this.GLOBAL.BASE_URL + 'apis/Home/wish/admlist',
        }).then((response)=>{
          if(response.data.code == 0){
            console.log(response);
            this.task = response.data.data.unevaluate;
            console.log(this.task);
          } else {
            alert('fail');
          }
        }).catch((error)=>{
          console.log(error)
        })
      },
      touserinfo(id){
        this.$router.push({name:'userinfo',params:{Id:id}});
      },
      towishes(id){
        this.$router.push({name:'uncommondeadm',params:{Id:id}});
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
