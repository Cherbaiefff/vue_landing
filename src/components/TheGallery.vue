<template>
   <section class="gallery">
      <div class="container">
         <h2 class="gallery__heading">See some of our Creative work.</h2>
         <div class="gallery__images-wrapper">
            <div v-for="item in 6" :key="item" class="gallery__image"><!--<img src="#" alt="#" /> --></div>
         </div>
         <a href="#" class="gallery__link">See more of these</a>
      </div>
   </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.gallery {
   width: 100%;

   &__heading {
      font-size: 30px;
      font-weight: 600;
      line-height: 1.25;
      color: #314584;
      text-align: center;
      padding-bottom: 50px;
   }

   &__images-wrapper {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
   }

   &__image {
      width: 250px;
      height: 250px;
      background-color: #c3d0d8;
      margin-bottom: 20px;
   }

   &__link {
      display: block;
      font-size: 18px;
      font-weight: 600;
      text-align: center;
      color: #ff3946;
      text-decoration: none;
      padding-bottom: 60px;
   }
}

@media screen and (min-width: 768px) {
   .gallery__heading {
      font-size: 48px;
      width: 393px;
      margin: 0 auto;
   }
   .gallery__images-wrapper {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      margin: 0 0 32px 0;
      padding-bottom: 56px;
   }
}

@media screen and (min-width: 1024px) {
   .gallery__heading {
      text-align: left;
      margin: 0;
      margin-left: 15px;
   }

   .gallery__image {
      width: 370px;
      height: 280px;
   }
}
</style>
