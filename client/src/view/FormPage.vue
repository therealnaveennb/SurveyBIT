<template>
    <NavBar />
    <FormsList/>
    
   
</template>

<script>
import FormsList from '@/components/FormList.vue';
import NavBar from '@/components/NavBar.vue';
export default {
    data() {
        return {
           
        };
    },
    methods: {
        submitForm() {
            // Handle form submission logic here
           
        },
    },
    components: {
        NavBar,
        FormsList
    }
};
</script>

<style scoped>

</style>