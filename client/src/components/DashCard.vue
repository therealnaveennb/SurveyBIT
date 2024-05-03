<template>
    <div class="dashboard-card">
      <div class="heading">{{ heading }}</div>
      <div class="value">{{ value }}</div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      heading: String, // Heading for the card
      value: String // Value to be displayed
    }
  };
  </script>
  
  <style scoped>
  .dashboard-card {
    position: relative;
    top: 2rem;
    left: 18rem;
    background-color: #f0f0f0;
    border-radius: 8px;
    width: 20rem;
    padding: 40px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  
  .heading {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .value {
    font-size: 24px;
    color: #007bff; /* Example color */
  }
  </style>
  