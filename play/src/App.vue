

<template>
  <div>



    <MButton disabled>禁止按钮</MButton>
    <MButton >默认按钮</MButton>
    <MButton type="success">成功按钮</MButton>
    <MButton type="waring" disabled>警告按钮</MButton>
    <MButton>
      <MIcon><AccessibilityOutline></AccessibilityOutline></MIcon>图标
    </MButton>
  </div>
</template>


<script setup lang="ts">
  import MIcon from "@mniui/components/icon";
  // import {MIcon} from "@mniui"
  import MButton from "@mniui/components/button";
  import { AccessibilityOutline } from "@vicons/ionicons5";

</script>


<!--

  浏览原始信息    编辑信息  保存   移出
 -->


