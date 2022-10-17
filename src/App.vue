<script setup>
   import { ref, onMounted } from 'vue'
   import Navbar from './components/Navbar.vue'
   import Skills from './components/Skills.vue'
   import Banner from './components/Banner.vue'
   import Experience from './components/Experience.vue'
   import { collection, getDocs } from 'firebase/firestore'
   import { db } from '@/firebase'

   const banner = ref({
      img: '/img/banner-img.png',
      title: 'Emiliano Elias',
      subtitle: 'Fullstack Developer',
      button: 'Get in touch',
      link: 'https://api.whatsapp.com/send?phone=526863183875'
   })

   const skills = ref([
      { id: 1, title: 'Vue&Nuxt', desc:'SPAs & Multipage frontend apps', img: '/img/vue-icon.png' },
      { id: 2, title: 'Django', desc:'Fullstack apps & APIs', img: '/img/dj-icon.png' },
      { id: 3, title: 'WordPress', desc:'Websites for clients', img: '/img/wp-icon.png' },
      { id: 4, title: 'Python', desc:'Software development', img: '/img/py-icon.png' }
   ])
   
   const porftolio = ref([
      
   ])
   //get portfolio
   onMounted(async () => {
      const querySnapshot = await getDocs(collection(db, 'portfolio'))
      querySnapshot.forEach((doc) => {
         console.log(doc.id, " => ", doc.data())
      })
   })

   const experience = ref([
      {
         id: 'One',
         company: 'CETYS Universidad',
         dates: 'Nov 2019 - Mar 2020' ,
         position: 'IT Scholar',
         desc: "IT's inventory administration, network and computing equipment maintenance, classrooms' and administrative departments' equipment maintenance."
      },
      {
         id: 'Two',
         company: 'Skyworks Solutions',
         dates: 'Jun 2021 - Dec 2021' ,
         position: 'IT Support Intern',
         desc: "IT's administrative webapp development, network maintenance."
      },
      {
         id: 'Three',
         company: 'Webshau!',
         dates: ' Dec 2021 - Jun 2022' ,
         position: 'Fullstack WP Developer',
         desc: "Fullstack development for client's webapps and websites."
      }
   ])
</script>

<template>
   <Navbar/>

   <section class="banner">
      <div class="container">
         <div class="row">

            <Banner
               :img="banner.img"
               :title="banner.title"
               :subtitle="banner.subtitle"
               :button="banner.button"
               :link="banner.link"
            />

         </div>
      </div>
   </section>
   <section class="skills">
      <h1 class="section-title">Skills & Technologies</h1>
      <div class="container">
         <div class="row">

            <Skills
               v-for="skill in skills"
               :title="skill.title"
               :desc="skill.desc"
               :img="skill.img"
            />

         </div>
      </div>
   </section>
   <section class="experience">
      <h1 class="section-title">Experience</h1>
      <div class="container">
         <div class="row">
            <div class="accordion" id="accordionExample">

               <Experience
                  v-for="job in experience"
                  :id="job.id"
                  :company="job.company"
                  :dates="job.dates"
                  :position="job.position"
                  :desc="job.desc"
               />

            </div>
         </div>
      </div>
   </section>
</template>


<style>
   #app {
      height: 100vh;
      width: 100vw;
   }
   .banner {
      display: block;
      position: relative;
      padding-top: 5px;
      padding-bottom: 10px;
      text-align: center;
   }
   .section-title {
      display: block;
      position: relative;
      margin-bottom: 30px;
      text-align: center;
      color: #213547;
   }
   .skills {
      width: auto;
      height: max-content;
      margin-top: 40px;
      margin-bottom: 20px;
   }
   .experience {
      margin-top: 50px;
      padding-bottom: 50px;
      height: max-content;
   }
</style>
