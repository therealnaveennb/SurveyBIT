<template>
  <div class="login-container">
    <div class="login-form">
      <center>
        <h1>BIT Survey</h1>
        <img
          :src="require('@/assets/bitLogo.png')"
          alt="Logo"
          style="height: 10rem; align-items: center"
        />
      </center>

      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <router-link to="/home">
          <button type="submit">Login</button>

          
        </router-link>
       
      </form>
    </div>
  </div>
  <GoogleLogin :callback="callback"/>
</template>

<script>

  export default {

    data() {
      return {
        username: '',
        password: '',

      };
    },
    methods: {
      login() {
        // Add your login logic here
        console.log('Username:', this.username);
        console.log('Password:', this.password);
      },
        callback(response) {
            console.log(response);
        }
   
    }

  };
</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e8e4ec;
}

.login-form {
  max-width: 400px;
  padding: 4rem 7rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

h2 {
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 2rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 0.5rem 0.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

button {
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
