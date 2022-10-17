<script setup>
   defineProps(['img', 'title', 'desc'])


</script>

<template>
   <div class="col-12 col-lg-3">
      <div class="skill-card">
         <img class="skill-img" :src="img">
         <div class="skill-info">
            <h1 class="skill-title">{{ title }}</h1>
            <p>
               {{ desc }}
            </p>
         </div>
      </div>
   </div>
</template>

<style scoped>
   .skill-card {
      display: block;
      position: relative;
      width: 100%;
      height: 215px;
      margin-top: 25px;
      padding: 20px;
      align-items: center;
      text-align: center;
      border-radius: 12px;
      background-color: #21354736;
      box-shadow: 4px 4px 20px 5px rgba(0,0,0,0.3);
      color: #213547;
   }
   .skill-img {
      width: auto;
      height: 75px;
   }
   .skill-info {
      margin-top: 10px;
      margin-bottom: 0px;
   }
   .skill-title {
      font-size: 25px;
   }
</style>