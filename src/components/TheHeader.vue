<template>
   <header class="header">
      <TheNavigation />
   </header>
</template>

<script>
import TheNavigation from './TheNavigation.vue';
export default {
   components: {
      TheNavigation,
   },
};
</script>

<style lang="scss">
.header {
   width: 100%;
   position: relative;
}
</style>
