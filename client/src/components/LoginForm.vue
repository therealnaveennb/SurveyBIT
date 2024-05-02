<template>
  <div class="login-container">
    <div class="login-form">
      <div class="logo">
        <h1>BIT Survey</h1>
        <img
          :src="require('@/assets/bitLogo.png')"
          alt="Logo"
          style="height: 8rem; align-items: center"
        />
      </div>
      <div class="login-form">
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" v-model="username" required />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required />
           
          </div>
         
            <button type="submit">Login</button>
           

        </form>
      </div>
    </div>
  </div>
  <GoogleLogin :callback="callback" />
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Predefined username and password
      const predefinedUsername = "example";
      const predefinedPassword = "password";

      // Check if entered username and password match predefined values
      if (this.username === predefinedUsername && this.password === predefinedPassword) {
        // Login successful, navigate to home page
        this.$router.push("/home");
      } else {
        // Login failed, show error message or handle accordingly
        alert("Invalid username or password!");
      }
    },
  },
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

.logo{
  display: flex ;
  flex-direction: column;
  justify-self: center;
  align-items: center;
}
.login-form {
  padding:1rem 4rem 1rem 4rem;
  
  border-radius: 10px;
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
