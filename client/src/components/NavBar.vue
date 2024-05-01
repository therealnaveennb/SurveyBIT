<template>
  <nav
    :class="{
      navbar: !isSticky,
      'navbar-sticky': isSticky,
      'navbar-open': isOpen,
    }"
  >
    <div class="navbar-container">
      <div class="navbar-sideButtton">
        <button class="toggle-button" @click="toggleSidebar">
          <i class="fa fa-bars"></i>
        </button>
      </div>
      <div class="navbar-brand">
        <img
          :src="require('@/assets/surveyLogo.png')"
          alt="Logo"
          height="60rem"
        />
      </div>
      <div class="navbar-menu">
        <a class="navbar-item" href="#"> My Website </a>
      </div>
    </div>
  </nav>
  <div class="sidebar" :class="{ 'sidebar-open': isOpen }">
    <div class="sidebar-container">
        
        <button class="toggle-button" @click="toggleSidebar"></button>
        <img class="sidebar-image"
        :src="require('@/assets/surveyLogo.png')"
        alt="Logo"
        height="60rem"
        />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false,
      isOpen: true, // Add isOpen data property for controlling sidebar toggle
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isSticky = window.scrollY > 0;
    },
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.navbar-container {
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between; 
  
  padding: 0rem 1rem 0rem 1rem; /* Add horizontal padding */
}
.navbar-container> div{
    text-align: center;
    padding: 1rem
}
.navbar,
.navbar-sticky {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  text-decoration: none;
  padding: 0.5rem;
  transition: 0.2s ease-in-out;
}

.navbar-sticky {
  position: sticky;
  top: 0;
}
.navbar-open {
  padding-left: 12rem;
}

.navbar-brand {
  font-weight: bold;
}
.navbar-menu {
  display: flex;
}
.navbar-item {
  flex-direction: row-reverse;
  
  color: black;

  margin-right: 1rem;
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  background-color: #f0f0f0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-200px);
}
.sidebar-container{
    display: grid;
    grid-template-columns: auto auto;
}
.sidebar-open {
  transform: translateX(0);
}

.toggle-button {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  background-color: black;
  border: none;
  outline: none;
  cursor: pointer;
}

.fa-bars {
  color: #333;
}
</style>
