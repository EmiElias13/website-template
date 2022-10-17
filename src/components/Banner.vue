<script setup>
   defineProps(['img','title', 'subtitle', 'button','link'])

</script>

<template>
   <div class="col-lg-6">
      <div class="banner-img">
         <img :src="img" alt="">
      </div>
   </div>

   <div class="col-lg-6">
      <div class="banner-info">
         <h1> {{title}} </h1>
         <p> {{subtitle}} </p>
         <div class="banner-btns">
            <a :href="`${link}`" class="btn-primario" target="_blank"> {{ button }}</a>
         </div>
      </div>
   </div>
</template>

<style scoped>
   .banner-img {
      display: block;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      padding-top: 45px;
   }
   .banner-img img {
      width: 60%;
      height: auto;
      border-radius: 12px;
   }
   .banner-info {
      display: block;
      position: relative;
      padding-top: 100px;
      color: #213547;
   }
   .banner-info h1 {
      font-weight: bolder;
      color: #213547;
   }
   .btn-primario {
      display: block;
      width: 110px;
      height: 50px;
      margin-left: auto;
      margin-right: auto;
      padding-top: 12px;
      border-radius: 5px;
      background-color: #42b883;
      border: transparent;
      color: #ffffff;
      text-decoration: none;
      font-weight: 700;
      transition: ease-in 0.15s;
   }
   .btn-primario:hover {
      background-color: #35eb9a;
      color: #213547;
      transition: ease-in 0.2s;
      box-shadow: 2px 2px 20px 5px rgba(0,0,0,0.3);
   }
</style>