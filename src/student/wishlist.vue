<template>
  <div class="box">
    <div class="none" v-if="!isData"> 暂无数据</div>
    <div class="task">
      <div v-for="(item,index) in task" :key="index + 'sk'" class="task-item">
        <div class="icon">
          <img src="../../static/icon/heart.png" alt="">
        </div>
        <div class="content">
          {{item.content}}
        </div>
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
          isData: true
        }
      },
      methods:{
        towishdetail(id){
            axios({
              url: this.GLOBAL.BASE_URL + 'Home/user/stu_info',
            }).then((response)=>{
              console.log(response);
              if(response.data.code ==0){
                this.userinfo = response.data.data;
                console.log(this.userinfo);
                if(this.userinfo.name == '' || this.userinfo.phone == ''){
                  alert('请跳转个人信息页面填写个人信息后再认领信息！')
                } else {
                  this.$router.push({name:'wishdetail',params:{Id:id}});
                }
              }
            }).catch((error)=>{
              console.log(error);
            })
        },
        getData(){
          axios({
            url:this.GLOBAL.BASE_URL + 'Home/wish/stulist',
          }).then((response)=>{
            console.log(response);
            if(response.data.code == 0) {
              console.log(response);
              this.task = response.data.data.unaccepted;
              if(this.task.length == 0){
                this.isData = false;
              }
            } else {
              alert("请求失败！");
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
    /*display: flex;*/
    /*flex-direction: row;*/
  }
  .task-item{
    display: flex;
    flex-direction: row;
    margin: 0.5rem 0;
    height: 2rem;
    align-items: center;
    justify-content: center;
  }
  .icon{
    /*flex-grow: 1;*/
    margin-left: 2%;
    height: 1.5rem;
  }
  .content{
    /*flex-grow: 4;*/
    width: 60%;
    margin: 0 5%;
    overflow: hidden;
  }
  .btn-box{
    /*flex-grow: 1;*/
    color: white;
    text-align: center;
  }
  .btn-box button {
    width: 100%;
    height: 100%;
    background-color: dodgerblue;
  }
  .icon img{
    height: 1.5rem;
    width: 1.5rem;
  }

</style>
