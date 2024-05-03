<template>
    <div  class="container">
        <NavBar/>
    <div class="profile-page">
      <h1>User Profile</h1>
      <ProfileCard :profile="userProfile" />
    </div>
</div>
  </template>
  
  <script>
  import ProfileCard from '@/components/ProfileCard.vue';
  import NavBar from '@/components/NavBar.vue';
  import userpic from '@/assets/usersample.jpeg'
  export default {
    components: {
      ProfileCard,
      NavBar
    },
    data() {
      return {
        userProfile: {
          photo: userpic,
          name: 'John Doe',
          rollNumber: '12345',
          email: 'john.doe@example.com',
          department: 'Engineering'
        }
      };
    }
  }
  </script>
  
  <style scoped>
  .profile-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  </style>
  