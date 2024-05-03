<template>
        <div class="main"> 
    <NavBar />
    <div class="dash-container">
        <DashCard heading="Total Users" :value=50 />
        <DashCard heading="Revenue" :value=51 />
        <DashCard heading="Revenue" :value=51 />
    </div>


        <div class="logo">
           
        </div>
        
    </div>
</template>

<script >

import DashCard from "@/components/DashCard.vue";
import NavBar from '@/components/NavBar.vue';
export default {
  components: {
    NavBar,
    DashCard }
};
</script>
<style scoped>
body{
    background-color: #e8e4ec;
}
.dash-container{
max-width: fit-content;
 display: grid;
 grid-template-columns: auto auto ;
 column-gap: 3rem;
 row-gap: 4rem;
    
}


</style>