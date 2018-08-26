<template>
  <div class="box">
    <div class="container">
      <ul class="container-ul" v-for="(item,index) in task" v-bind:key="index + 'h'">

        <li class="container-li" @click="toremain(item.id)">
          <div class="circle">
            <div></div>
          </div>
          <div class="content">{{item.content}}</div>
          <div class="guy" >
            <button>点击分配</button>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: "unallot",
      methods:{
        toremain(id){
          this.$router.push({name:'remainwishes',params:{Id:id}});
        },
        getData() {
          axios({
            url:this.GLOBAL.BASE_URL + '/apis/Home/wish/admlist',
          }).then((response) => {
            if (response.data.code == 0) {
              console.log(response);
              this.task = response.data.data.undone;
              console.log(this.task);
            } else {
              alert('fail');
            }
          }).catch((error) => {
            console.log(error)
          })
        }
      },
      data(){
        return{
          task:[]
        }
      },
      created(){
        this.getData();
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
  .guy button{
    background-color: rgb(11,197,238);
    color: white;
    border-radius: 40%;
  }
</style>
