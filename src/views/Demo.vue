<template>
  <div class="wrap">
    demo
    {{ userStore.userInfo.name }}
    <hello-world></hello-world>
  </div>
</template>
<script setup>
import HelloWorld from '../components/HelloWorld.vue';
import useUserStore from '@/store';

const a = 12;
console.log(a);
const userStore = useUserStore();
</script>
<style scoped lang="scss">
.wrap {
  color: $primary-color;
  background: $background-color;
}
</style>
