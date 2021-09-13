<template>
   <button class="hamburger" @click="toggle">
      <i class="fas fa-bars"> </i>
   </button>

   <ul :class="showMenu ? 'menu visible' : 'menu hidden'">
      <MenuItem
         v-for="menuItem in menuItems"
         :menu-item="menuItem"
         :key="menuItem.id"
      />
   </ul>
</template>

<script>
import MenuItem from './MenuItem.vue';

export default {
   components: {
      MenuItem,
   },
   data() {
      return {
         showMenu: false,
         menuItems: [
            {
               id: 0,
               text: 'Home.',
               link: '#',
            },
            {
               id: 1,
               text: 'About us.',
               link: '#',
            },
            {
               id: 3,
               text: 'Portfolio.',
               link: '#',
            },
            {
               id: 4,
               text: 'Blog.',
               link: '#',
            },
            {
               id: 5,
               text: 'Contact us.',
               link: '#',
            },
         ],
      };
   },
   methods: {
      toggle() {
         this.showMenu = !this.showMenu;
      },
   },
};
</script>

<style lang="scss">
.menu {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   &__item {
      // margin-right: 46px;
      margin-top: 10px;
      list-style-type: none;
      font-size: 18px;
      font-family: WorkSans;
      font-weight: 600;
      text-align: left;
   }

   &__item_link {
      text-decoration: none;
      cursor: pointer;
   }
}

.hidden {
   display: none;
}

.visible {
   display: flex;
}

.hamburger {
   padding-top: 10px;
   display: block;
   width: 30px;
   background-color: transparent;
   border: 0;
   color: #314584;
   font-size: 30px;
   cursor: pointer;
   &:focus {
      outline: none;
   }
}

@media screen and (min-width: 768px) {
   .hamburger {
      display: none;
   }

   .menu {
      display: flex;
      flex-direction: row;

      &__item {
         margin-right: 15px;
      }
   }
}

@media screen and (min-width: 1024px) {
   .menu__item {
      margin-right: 44px;
   }
}
</style>
