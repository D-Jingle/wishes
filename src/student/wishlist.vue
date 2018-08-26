<template>
  <div class="box">
    <div class="task">
      <div v-for="(item,index) in task.unaccepted" :key="index + 'sk'" class="task-item">
        <div class="icon">❤️</div>
        <div class="content">{{item.content}}</div>
        <div class="btn-box">
          <button @click="towishdetail(item.id)">认领</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "wishlist",
      data() {
        return {
          task: [],
        }
      },
      methods:{
        towishdetail(id){
          this.$router.push({name:'wishdetail',params:{Id:id}});
        },
        getData(){
          axios({
            url:'apis/Home/wish/stulistall',
          }).then((response)=>{
            console.log(response);
            if(response.data.code == 0) {
              console.log(response);
              this.task = response.data.data.unaccepted;
            } else {
              alert('fail');
            }
          }).catch((error)=>{
            console.log(error);
          })
        }
      },
      created(){
        this.getData();
      }
    }
</script>

<style scoped>
  .task{
    padding: 1rem;
  }
  .task-item{
    display: flex;
    flex-direction: row;
    margin: 1rem 0;
  }
  .icon{
    flex-grow: 1;
  }
  .content{
    flex-grow: 4;
  }
  .btn-box{
    flex-grow: 1;
    color: white;
    text-align: center;
  }
  .btn-box button{
    width: 70%;
    height: 100%;
    background-color: dodgerblue;
  }
</style>
