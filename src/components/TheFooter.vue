<template>
   <footer class="footer">
      <div class="container">
         <div class="footer__logo">DOOB</div>
         <h3 class="footer__heading">CREATIVITY ABOVE</h3>
         <Menu />
         <div class="footer__rights">© 2019 - Doob,All Right Reserved</div>
         <div class="footer__icons">
            <img src="../assets/icons/Facebook.svg" />
            <img src="../assets/icons/Twitter.svg" />
            <img src="../assets/icons/Dribble.svg" />
         </div>
      </div>
   </footer>
</template>

<script>
import Menu from './Menu.vue';
export default {
   components: { Menu },
};
</script>

<style lang="scss">
.footer {
   background-color: #314584;
   width: 100%;

   & .container {
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   &__logo {
      width: 50px;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.17;
      letter-spacing: 0.18px;
      color: #fff;
      padding-top: 40px;
   }

   &__heading {
      padding: 27px 0 30px 0;
      font-size: 30px;
      font-weight: 600;
      line-height: 1.25;
      letter-spacing: 0.48px;
      color: #ff3946;
      text-align: center;
   }

   & .menu {
      display: none;
   }

   &__rights {
      font-size: 10px;
      //14px
      line-height: 1.5;
      letter-spacing: 0.14px;
      color: #fff;
      text-align: center;
   }

   &__icons {
      width: 200px;
      display: flex;
      justify-content: space-around;
      padding: 30px 0 50px 0;

      & img {
         width: 38px;
         height: 38px;
      }
   }
}

@media screen and (min-width: 768px) {
   .footer__logo {
      padding-top: 70px;
   }

   .footer__heading {
      font-size: 48px;
   }

   .footer__rights {
      font-size: 14px;
   }

   .footer__icons {
      width: 350px;
   }
}

@media screen and (min-width: 1024px) {
   .footer .menu {
      display: flex;
      flex-direction: row;
      width: 600px;
      justify-content: space-between;
   }

   .footer .menu .menu__item {
      align-items: center;
   }

   .footer .menu__item_link {
      color: #fff;
      text-align: center;
   }

   .footer__rights {
      padding-top: 58px;
   }
}
</style>
