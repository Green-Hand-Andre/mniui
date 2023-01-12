

<template>
  <div>





    <MButton>
      <router-link to="/layout">
        布局
      </router-link>

      </MButton>
      <router-view></router-view>


  </div>
</template>


<script setup lang="ts">
  import {useRouter,useRoute} from 'vue-router'
  import MButton from "@mniui/components/button";


  const router = useRouter();
  const route = useRoute();

   let  goLayout = ()=>{
    router.push({
    name:"layout"
  })

  }







</script>


<!--

  浏览原始信息    编辑信息  保存   移出
 -->


