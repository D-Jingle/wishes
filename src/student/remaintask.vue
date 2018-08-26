<template>
  <div class="box">
    <div class="Gcontainer">
      <ul class="Gcontainer-ul" v-for="(item,index) in task" v-bind:key="index + 'un'">
        <li class="Gcontainer-li" @click="toremaintaskde(item.id)">
          <div class="Gcircle">
            <div></div>
          </div>
          <div class="Gcontent">{{item.content}}</div>
          <div class="Gguy"><span>待评价</span></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: "remaintask",
      data(){
        return {
          task:{}
        }
      },
      methods:{
        getData(){
          axios({
            url:this.GLOBAL.BASE_URL + 'apis/Home/wish/stulistall',
          }).then((response)=>{
            console.log(response);
            if(response.data.code == 0){
              this.task = response.data.data.unevaluate;
              console.log(this.task);
            } else {
              alert("fail");
            }
          }).catch((error)=>{
            console.log(error);
          })
        },
        toremaintaskde(id){
          this.$router.push({name:'remaintaskde',params:{Id:id}});
        },
      },
      created(){
        this.getData();
      }
    }
</script>

<style scoped>

</style>
