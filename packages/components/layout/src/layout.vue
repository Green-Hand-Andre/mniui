<template>
  <section :class="bem.b()">
    <slot/>
  </section>

</template>



<script lang="ts" setup>
  import { computed, CSSProperties,useSlots } from "vue";
  import { createNamespace } from "../../../utils/create";
  import { layoutProps } from "./layout";
  const bem = createNamespace("layout");
  const slot = useSlots()
  debugger
  console.log(slot)



</script>
