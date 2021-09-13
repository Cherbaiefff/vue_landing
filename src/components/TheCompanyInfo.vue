<template>
   <section class="company">
      <div class="container">
         <div class="company-info">
            <h1 class="company-info__heading">
               The Spirit of Digital Agency.
            </h1>
            <p class="company-info__text">
               Vestibulum ac diam sit amet quam vehicula elementum amet est on
               dui. Nulla porttitor accumsan tincidunt.
            </p>
            <div class="btns_wrapper">
               <base-button>More About Us</base-button>
               <base-button>Get In Touch</base-button>
            </div>
         </div>
         <div class="slider_wrapper">
            <!-- <Slider /> -->
            <div class="slider">SHOULD'VE BEEN A SLICK SLIDER :(</div>
         </div>
      </div>
   </section>
</template>

<script>
import BaseButton from './BaseButton.vue';
export default {
   components: {
      BaseButton,
   },
};
</script>

<style lang="scss">
.company {
   &-info {
      width: 100%;

      &__heading {
         font-family: WorkSans;
         font-size: 40px;
         font-weight: 600;
         text-align: center;
         color: #314584;
         line-height: 1.32;
         padding-bottom: 20px;
      }

      &__text {
         font-family: WorkSans;
         font-size: 18px;
         line-height: 1.67;
         letter-spacing: 0.18px;
         text-align: center;
         color: #6e757a;
         padding: 10px 10px 45px 10px;
      }
   }

   .slider_wrapper {
      display: none;
   }
}
@media screen and (min-width: 768px) {
   .company {
      padding-bottom: 100px;

      &-info {
         width: 100%;
      }

      &_text {
         width: 100%;
         text-align: left;
         padding: 0 0 44px 0;
      }
   }
   .company-info__heading {
      text-align: left;
      width: 100%;
      font-size: 50px;
   }

   .company-info__text {
      width: 100%;
      text-align: left;
      padding-bottom: 44px;
   }

   .btns_wrapper {
      width: 100%;
      display: flex;
   }
}

@media screen and (min-width: 1024px) {
   .company {
      padding-bottom: 340px;

      & .container {
         display: flex;
         justify-content: space-around;
      }

      &-info {
         width: 45%;

         &__text {
            width: 80%;
            padding: 0 0 84px 0;
         }
      }
      .slider_wrapper {
         display: block;
         width: 45%;

         .slider {
            font-size: 50px;
            text-align: center;
            font-family: WorkSans;
            font-weight: 600;
            line-height: 1.5;
         }
      }
   }

   @media screen and (min-width: 1200px) {
      .company-info__heading {
         width: 530px;
         font-size: 73px;
         padding-right: 10px;
      }

      .company-info__text {
         width: 530px;
         padding-right: 10px;
      }
   }
}
</style>
