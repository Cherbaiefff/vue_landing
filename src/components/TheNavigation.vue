<template>
   <nav class="navigation">
      <div class="navigation__logo">
         DooB
         <span></span>
      </div>
      <div class="container">
         <Menu />
         <div class="navigation_extra">
            <button>EN <span>&#9660;</span></button>
            <a href="#">Contact us &rarr;</a>
         </div>
      </div>
   </nav>
</template>

<script>
import Menu from './Menu.vue';
export default {
   components: {
      Menu,
   },
};
</script>

<style lang="scss">
.navigation .container {
   display: flex;
   flex-direction: column;
   padding-bottom: 30px;
}

.navigation {
   width: 100%;

   &__logo {
      width: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #314584;
      font-weight: 900;
      position: absolute;
      top: 19%;
      right: 15%;

      & span {
         display: block;
         content: '';
         width: 23px;
         height: 5px;
         background-color: #ff3946;
      }
   }

   &_extra {
      display: none;
   }

   & .menu__item_link {
      color: #314584;
   }

   & .menu__item_link {
      color: #314584;
   }
}

@media screen and (min-width: 768px) {
   .navigation .container {
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      padding: 30px 0 110px 0;
   }

   .navigation__logo {
      position: absolute;
      top: 10%;
      left: 2%;
   }

   .navigation_extra {
      display: flex;
      justify-content: space-around;
      width: 30%;

      & a {
         display: block;
         text-decoration: none;
         border: 1px solid #ff3946;
         padding: 10px;
         font-family: WorkSans;
         font-size: 18px;
         font-weight: 600;
         color: #ff3946;
      }

      & button {
         background-color: transparent;
         outline: none;
         border: none;
         font-family: WorkSans;
         font-size: 18px;
         font-weight: 600;
         color: #314584;

         & span {
            font-size: 8px;
         }
      }
   }
}
</style>
