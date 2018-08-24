<template>
  <div class="box">
    <div class="box">
      <div class="Bcontainer">
        <ul class="Bcontainer-ul" v-for="(item,index) in task" v-bind:key="index + 'c'">
          <li class="Bcontainer-li"  @click="tocomdetail(item.id)">
            <div class="Bcircle">
              <div></div>
            </div>
            <div class="Bcontent">陪伴读报一小时</div>
            <div class="Bguy">
              <button>确认完成</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "claim",
    data(){
      return{
        task:{}
      }
    },
    methods:{
      tocomdetail(id){
        this.$router.push({name:'uncomdetailtea',params:{Id:id}})
      },
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
    },
    created(){
      this.getData();
    }
  }
</script>

<style scoped>

</style>
