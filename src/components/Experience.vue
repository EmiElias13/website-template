<script setup>
   defineProps(['id','company','dates','position','desc'])

</script>

<template>
   <div class="accordion-item">
      <h2 class="accordion-header" :id="`heading-${id}`">
         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse-${id}`" aria-expanded="false" :aria-controls="`collapse-${id}`">
            <div class="col-3"> {{company}} </div>
            <div class="col-5 offset-1 offset-lg-0 "> {{dates}} </div>
            <div class="col-3"> {{position}} </div>
         </button>
      </h2>
      <div :id="`collapse-${id}`" class="accordion-collapse collapse"  data-bs-parent="#accordionExample" style="">
         <div class="accordion-body">
            <p> {{desc}} </p>
         </div>
      </div>
   </div>
</template>

<style scoped>

</style>