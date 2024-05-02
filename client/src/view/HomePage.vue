<template>
        <div class="main"> 
    <NavBar />
    

        <div class="logo">
            <center>
                <img :src="require('@/assets/logo.png')" alt ="logo">
            </center>
        </div>
        
    </div>
</template>

<script >
import NavBar from '@/components/NavBar.vue';
export default {
  components: {
    NavBar  }
};
</script>
<style scoped>
body{
    background-color: #e8e4ec;
}
.logo{

}

</style>