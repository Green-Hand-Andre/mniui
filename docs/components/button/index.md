# Button 图标





## 使用


<script setup lang="ts">
  
</script>
``` vue
<template>
  <MButton>默认按钮</MButton>
  <MButton type="success">成功按钮</MButton>
  <MButton type="waring">警告按钮</MButton>
  <MButton type="fail">失败按钮</MButton>
  <MButton disabled>禁止按钮</MButton>
</template>
```
- 如果你想像用例一样直接使用，你需要全局注册组件，才能够直接在项目里使用。



## API

### Button Props

| 属性名 | 类型 | 默认值| 说明 | 可选值 |
| ----- | ---------------- | --------- | -------- | ----------- |
| display | boolean | false | 是否为禁用状态 | false |
| type | string | ———— | 按钮类型 | success |
| round | string | ———— | 圆角大小 | 1% |


