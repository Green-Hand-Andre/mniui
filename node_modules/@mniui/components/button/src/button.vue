<template>
    <button :disabled="disabled!=undefined" :class="bem.b()" :style="style">
        <span>
          <slot></slot>
        </span>
    </button>
</template>


<script lang="ts" setup>
    import { computed, CSSProperties } from "vue";
    import { createNamespace } from "../../../utils/create";
    import { buttonProps } from "./button";
    const props = defineProps(buttonProps);
    const bem = createNamespace("button");
    // defineOptions({name: "ZIcon"
    // });
debugger
    const style = computed<CSSProperties>(() => {
        if (!props.color && !props.size) {
            return {};
        }
        return {
            ...(props.size ? { "font-size": props.size + "px" } : {}),
            ...(props.color ? { color: props.color } : {}),};
    });
</script>
