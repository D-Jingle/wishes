<template>
  <div class="box">
    <div class="none" v-if="!isData"> 暂无数据</div>
    <div class="Bcontainer">
      <ul class="Bcontainer-ul" v-for="(item,index) in task" v-bind:key="index + 'e'">

        <li class="Bcontainer-li" @click="tounclaimde(item.id)">
          <div class="Bcircle">
            <div></div>
          </div>
          <div class="Bcontent">{{item.content}}</div>
          <!--<div class="Bguy">-->
            <!--<button @click="resend(item.id)">再次发送</button>-->
          <!--</div>-->
          <div class="Bguy">
            <button @click="resend(item.id)">取消心愿</button>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: "unclaim",
      data(){
        return {
          task:[],
          isData: true

        }
      },
      methods:{
        getData(){
          axios({
            url:this.GLOBAL.BASE_URL + 'apis/Home/wish/tealist',
          }).then((response)=>{
            if(response.data.code == 0){
              console.log(response);
              this.task = response.data.data.unaccepted;
              console.log(this.task);
              if(this.task.length == 0){
                this.isData = false;
              }
            } else {
              alert('fail');
            }
          }).catch((error)=>{
            console.log(error)
          })
        },
        tounclaimde(id){
          this.$router.push({name:'unclaimde',params:{Id:id}})
        },
        resend(id){
          axios({
            url:this.GLOBAL.BASE_URL + 'apis/Home/wish/tealist',
          }).then((response)=>{
            if(response.data.code == 0){
              console.log(response);
              this.task = response.data.data.unaccepted;
              console.log(this.task);
            } else {
              alert('fail');
            }
          }).catch((error)=>{
            console.log(error)
          })
        }
      },
      created(){
        this.getData();
        this.$route.params.active = 0;
        console.log(this.$route.params.active);

        // if(this.$route.params.active){
        //   this.$route.params.active = 0;
        // }
      }
    }
</script>

<style scoped>

</style>
