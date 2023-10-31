<template>
  <div>home</div>
  <div class="wrap">
    <svg-icon name="user" />
  </div>
</template>
<script setup name="BaseHome">
import { onMounted } from 'vue';
import { getInfo } from '@/api/user.js';

const a = 1;
console.log(a);
onMounted(async () => {
  const res = await getInfo();
  console.log('res', res);
});
</script>
<style scoped lang="scss">
.wrap {
  width: 32px;
  height: 32px;
}
</style>
