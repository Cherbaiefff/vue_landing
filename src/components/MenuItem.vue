<template>
   <li class="menu__item">
      <a :href="menuItem.link" class="menu__item_link">{{ menuItem.text }}</a>
   </li>
</template>

<script>
export default {
   props: {
      menuItem: Object,
   },
};
</script>

<style lang="scss"></style>
