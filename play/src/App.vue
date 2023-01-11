

<template>
  <div>



    <MButton disabled>禁止按钮</MButton>
    <MButton >默认按钮</MButton>
    <MButton type="success">成功按钮</MButton>
    <MButton type="waring" disabled>警告按钮</MButton>
    <MButton round="50%">
      <MIcon><AccessibilityOutline></AccessibilityOutline></MIcon>
    </MButton>
  </div>
</template>


<script setup lang="ts">
  import MIcon from "@mniui/components/icon";
  import MButton from "@mniui/components/button";
  import { AccessibilityOutline } from "@vicons/ionicons5";

</script>





