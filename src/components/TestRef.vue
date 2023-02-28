<template>
    <div>Learn Ref for template</div>
    <p ref="s">
      <span :style="{color:selectedColor}">Learn more and more</span>    
    </p>
</template>

<script lang="ts" setup>
import { onMounted, ref, watchEffect } from 'vue';


const s = ref<HTMLElement>();
const selectedColor = ref("red");


onMounted(()=>{
    const r = s.value
    console.log(r?.innerText);

})
</script>