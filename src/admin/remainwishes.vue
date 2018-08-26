<template>
<div class="box">
  <div class="Mcontent">
    lalalalalallalalalalalalalalalalalalalalalalalla
  </div>
  <div class="Mcontent">
    {{item.content}}
  </div>
  <div class="Mcontainer">
    <div class="Mleft">发布人</div>
    <div class="Mright">{{item.guy}}</div>
  </div>
  <div class="Mcontainer">
    <div class="Mleft">联系方式</div>
    <div class="Mright">{{item.phone}}</div>
  </div>
  <div class="Mcontainer">
    <div class="Mleft">分配至</div>
    <div class="Mright">
      <input type="text" placeholder="点击填写学号" v-model="acc">
    </div>
  </div>
  <div class="Mfooter">
    <button @click="submit">分   配</button>
  </div>
</div>
</template>

<script>
    export default {
      name: "remainwishes",
      data(){
        return {
          id:'',
          acc:'',
          userinfo:{},
          tel:''
        }
      },
      methods:{
        submit(){
          axios({
            url:this.GLOBAL.BASE_URL + 'apis/Home/wish/admchearch',
            method:'post',
            data:{
              angel_id:this.acc
            }
          }).then((response)=>{
            if(response.data.code == 0){
              console.log(response);
              this.userinfo = response.data.data;
              console.log(this.userinfo);
              this.tel = this.userinfo.angel_phone;

              axios({
                url: this.GLOBAL.BASE_URL + 'apis/Home/wish/admassign',
                method:'post',
                data:{
                  id:this.id,
                  angel_id : this.acc,
                  angel_guy : this.userinfo.angel_guy,
                  angel_phone : this.tel
                }
              }).then((res)=>{
                if(res.data.code == 0){
                  console.log(res);
                  alert("success");
                  this.$router.push(-1);
                } else {
                  alert('fail');
                }
              }).catch((error)=>{
                console.log(error);
                alert('fail');
              })

            } else {
              alert('fail');
            }
          }).catch((error)=>{
            console.log(error)
          })
        },
        getData(){
          axios({
            url: this.GLOBAL.BASE_URL + 'apis/Home/wish/info?id=' + this.id,
          }).then((response)=>{
            if(response.data.code == 0){
              console.log(response);
              this.item = response.data.data;
              console.log(this.item);
            } else {
              alert('fail');
            }
          }).catch((error)=>{
            console.log(error)
          })
        },
      },
      created(){
        this.id = this.$route.params.Id;
        this.getData();
      }
    }
</script>

<style scoped>
  .Mright input{
    text-align: right;
    color:#aaa;
  }

</style>
