<template>
  <div class="box">
    <div class="Bcontainer">
      <ul class="Bcontainer-ul" v-for="(item,index) in task" v-bind:key="index + 'e'">

        <li class="Bcontainer-li" @click="tounclaimde(item.id)">
          <div class="Bcircle">
            <div></div>
          </div>
          <div class="Bcontent">{{item.content}}</div>
          <div class="Bguy">
            <button>再次发送</button>
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
          task:[]
        }
      },
      methods:{
        getData(){
          axios({
            url:'https://api.myjson.com/bins/1a85wg',
          }).then((response)=>{
            console.log(response);
            this.task = response.data.data.accepted;
            console.log(this.task);
          }).catch((error)=>{
            console.log(error)
          })
        },
        tounclaimde(id){
          this.$router.push({name:'unclaimde',params:{Id:id}})
        }
      },
      created(){
        this.getData();
      }
    }
</script>

<style scoped>

</style>
