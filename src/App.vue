<template>
   <TheHeader />
   <TheCompanyInfo />
   <TheGallery />
   <TheFooter />
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheCompanyInfo from './components/TheCompanyInfo.vue';
import TheGallery from './components/TheGallery.vue';
import TheFooter from './components/TheFooter.vue';
export default {
   components: {
      TheHeader,
      TheCompanyInfo,
      TheGallery,
      TheFooter,
   },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

html {
   font-family: 'Work Sans', sans-serif;
}

.container {
   width: 80vw;
   margin: 0 auto;
}

@media screen and (min-width: 1200px) {
   .container {
      width: 1200px;
   }
}
</style>
