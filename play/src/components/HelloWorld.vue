<script setup lang="ts">
  import MIcon from "@mniui/components/icon";
  // import {MIcon} from "@mniui"
  import MButton from "@mniui/components/button";
  import MLayout from "@mniui/components/layout";
  import { AccessibilityOutline } from "@vicons/ionicons5";


</script>

<template>
  <div>
    <MButton disabled>禁止按钮</MButton>
    <MButton >默认按钮</MButton>
    <MButton type="success">成功按钮</MButton>
    <MButton type="waring" disabled>警告按钮</MButton>
    <MButton>
      <MIcon><AccessibilityOutline></AccessibilityOutline></MIcon>图标
    </MButton>
    <MLayout>
      main
    </MLayout>


  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
