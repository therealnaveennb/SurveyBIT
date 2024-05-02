<template>
    <NavBar />
    <div class="form-container">
        <h1>Form Page</h1>
        <form @submit.prevent="submitForm">
            <label for="rollNumber">Roll Number:</label>
            <select id="rollNumber" v-model="rollNumber">
                <option value="1">1</option>
                <option value="2">2</option>
                <!-- Add more options as needed -->
            </select>

            <h2>Questions:</h2>
            <div v-for="(question, index) in questions" :key="index">
                <p>{{ question }}</p>
                <div>
                    <label v-for="rating in ratings" :key="rating">
                        <input type="radio" :value="rating" v-model="answers[index]">
                        {{ rating }}
                    </label>
                </div>
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
    data() {
        return {
            rollNumber: '',
            questions: [
                'Question 1',
                'Question 2',
                // Add more questions as needed
            ],
            ratings: [0, 1, 2, 3, 4, 5],
            answers: [],
        };
    },
    methods: {
        submitForm() {
            // Handle form submission logic here
            console.log('Form submitted!');
            console.log('Roll Number:', this.rollNumber);
            console.log('Answers:', this.answers);
        },
    },
    components: {
        NavBar,
    }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>