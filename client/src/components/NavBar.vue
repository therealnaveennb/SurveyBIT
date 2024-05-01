<template>
  <nav :class="{ navbar: !isSticky, 'navbar-sticky': isSticky }">
    <div class="navbar-brand">
      <img
        :src="require('@/assets/surveyLogo.png')"
        alt="Logo"
        height="60rem"
      />
     
    </div>

    <div class="navbar-menu">
        <a class="navbar-item" href="#"> My Website </a>
      <div class="navbar-end">
        
        <a class="navbar-item" href="#"> Home </a>
        <a class="navbar-item" href="#"> About </a>
        <a class="navbar-item" href="#"> Services </a>
        <a class="navbar-item" href="#"> Contact </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false,
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
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  
  background-color: #fff;
  text-decoration: none;
  
  padding: 0.5rem;
  transition: 0.2s ease-in-out;
}

.navbar-sticky {
  display: flex;
  position: sticky;
  top: 0;
  padding: 0.5 rem;
  background-color: #fff;

  transition: 0.2s ease-in-out;
}

.navbar-brand {
  font-weight: bold;
}
.navbar-menu {
  display: flex;
}
.navbar-item {
  flex-direction: row-reverse;
  justify-content: end;
  justify-content: center;
  color: black;
  margin-right: 1rem;
}
</style>
