<template>
 <div class="recommend">
   <div v-for="item in recommends" class="recommomd-item">
     <a :href="item.link" >
       <img class="item-img" :src="item.image" alt="">
       <div class="item-text">{{item.title}}</div>
     </a>
   </div>
 </div>
</template>

<script>
    export default {
        name: "RecommendView",
      props:{
          recommends:{
            type:Array,
            default(){
              return[]
            }
          },
      }
    }
</script>

<style scoped>
.recommend{
  display: flex;
  width: 100%;
  /*box-shadow: 0 0 10px rgba(0, 0, 0, .3);*/
  border-bottom: 10px solid #eeeeee;
}
  .recommomd-item{
    flex:1;
    text-align: center;
    font-size: 12px;
  }
  .recommomd-item .item-text{
    padding: 5px 0 5px;
  }
.recommomd-item:hover{
  color: #F10215;
}
.recommomd-item img{
  width: 100%;

}
</style>
