<template>
    <NavBar/>
    <div class="NotFound">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <svg  width="24"
      height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
    name: 'NotFound',
    components: {
        NavBar
    }
};
</script>

<style scoped>
h1 {
    font-size: 24px;
    color: #333;
}

p {
    font-size: 16px;
    color: #666;
}
.NotFound {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>