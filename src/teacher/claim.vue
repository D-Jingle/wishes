<template>
<div class="box">
  <div class="box">
    <div class="Gcontainer">
      <ul class="Gcontainer-ul" v-for="(item,index) in task" v-bind:key="index + 'b'">
        <li class="Gcontainer-li"  @click="touncomdetail(item.id)">
          <div class="Gcircle">
            <div></div>
          </div>
          <div class="Gcontent">{{item.content}}</div>
          <div class="Gguy">待完成</div>
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
        return {
          task:[]
        }
      },
      methods:{
        touncomdetail(id){
          this.$router.push({name:'claimde',params:{Id:id}})
        },
        getData(){
          axios({
            url:this.GLOBAL.BASE_URL + 'apis/Home/wish/tealist',
          }).then((response)=>{
            if(response.data.code == 0){
              console.log(response);
              this.task = response.data.data.undone;
              console.log(this.task);
            } else {
              alert('fail');
            }
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
