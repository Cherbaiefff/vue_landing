<template>
   <button class="main_btn" @click="setBtnHandler"><slot></slot></button>
</template>

<script>
export default {
   methods: {
      setBtnHandler() {
         alert('Worked');
      },
   },
};
</script>

<style lang="scss">
.main_btn {
   display: block;
   margin: 0 auto;
   width: 250px;
   padding: 15px 8px;
   margin-bottom: 15px;
   border-radius: 50px;
   outline: none;
   border: none;
   background-color: transparent;
   font-family: WorkSans;
   font-size: 18px;
   font-weight: 600;
   letter-spacing: 0.18px;
   color: #314584;
}

.main_btn:hover {
   box-shadow: 0px 5px 10px 0 rgba(255, 57, 70, 0.15);
   background-color: #ff3946;
   color: #fff;
}
</style>
