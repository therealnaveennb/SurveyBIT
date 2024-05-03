<template>
    <div class="profile-card">
      <div class="profile-picture">
        <img :src="profile.photo" alt="Profile Picture">
      </div>
      <div class="profile-details">
        <h2>{{ profile.name }}</h2>
        <p><strong>Roll Number:</strong> {{ profile.rollNumber }}</p>
        <p><strong>Email:</strong> {{ profile.email }}</p>
        <p><strong>Department:</strong> {{ profile.department }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      profile: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .profile-card {
    display: grid;
    grid-template-columns: auto auto;
    width: auto;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    text-align: left;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  }
  
  .profile-picture {
    margin-bottom: 20px;
  }
  
  .profile-picture img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .profile-details{
    border-left: 2px solid black;
    padding-left: 0.5rem;
    margin-left: 0.5rem;
  }
  .profile-details h2 {
  
    margin-bottom: 10px;
  }
  
  .profile-details p {
    margin-bottom: 5px;
    border-bottom: 1px dotted black;

  }
  </style>
  