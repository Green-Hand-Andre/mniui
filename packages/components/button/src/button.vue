<template>
    <button :class="bem.b()" :style="style">
        <slot></slot>
    </button>
</template>


<script lang="ts" setup> 
    import { computed, CSSProperties } from "vue";
    import { createNamespace } from "../../../utils/create";
    import { iconProps } from "./button";
    const props = defineProps(iconProps);
    const bem = createNamespace("icon");
    // defineOptions({name: "ZIcon"
    // });
    
    const style = computed<CSSProperties>(() => {
        if (!props.color && !props.size) {
            return {};
        }
        return {
            ...(props.size ? { "font-size": props.size + "px" } : {}),
            ...(props.color ? { color: props.color } : {}),};
    });
</script> 