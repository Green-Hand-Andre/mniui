<template>
    <button :disabled="disabled"
     :class="[bem.b(),
     bem.is('disabled',disabled),
     bem.m(type)
     ]"
     :style="style">
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

    const style = computed<CSSProperties>(() => {
        if (!props.color && !props.size &&props.backgroundColor) {
            return {};
        }
        return {
            ...(props.size ? { "font-size": props.size + "px" } : {}),
            ...(props.color ? { color: props.color } : {}),
            ...(props.round?{"border-radius":props.round,"width":"50px","height":"50px"} : {})

          };


    });
</script>
