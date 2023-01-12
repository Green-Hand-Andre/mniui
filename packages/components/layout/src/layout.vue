<template>
  <section :class="bem.b()">
    <slot/>
  </section>

</template>



<script lang="ts" setup>
  import { computed, CSSProperties } from "vue";
  import { createNamespace } from "../../../utils/create";
  import { layoutProps } from "./layout";
  const bem = createNamespace("layout");



</script>
