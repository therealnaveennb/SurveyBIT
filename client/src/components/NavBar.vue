<template>
  <nav
    :class="{
      navbar: !isSticky,
      'navbar-sticky': isSticky,
      'navbar-open': isOpen,
    }"
  >
    <div class="navbar-container">
      <div class="navbar-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          @click="toggleSidebar"
          viewBox="0 0 448 512"
          style="width: 24px; height: 24px"
        >
          <path
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </div>
      <div class="navbar-brand">
        <img
          :src="require('@/assets/surveyLogo.png')"
          alt="Logo"
          height="50rem"
        />
      </div>
      <div class="navbar-menu">
        <h2>BIT Survey</h2>
      </div>
      <div class="navbar-profile">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
          />
        </svg>
      </div>
    </div>
  </nav>
  <div class="sidebar" :class="{ 'sidebar-open': isOpen }">
    <div class="sidebar-container">
      <div class="sidebar-name">
        <h4>Hi! Naveen</h4>
      </div>

      <div class="sidebar-menu">
       
        <div class="sidebar-menu-item">
          <router-link to="/home"><h4> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="1rem"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg> Home</h4></router-link>
          
          
        </div>
        <div style="border-bottom: 1px solid black;margin-top: 0.5rem "></div>
        
        <div class="sidebar-menu-group">
          <h3 style="font-weight: bold;">Form </h3>
        <div class="sidebar-menu-item">
          
          <router-link to="/home"><h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="1.1rem"><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/></svg> Available Forms</h4></router-link>
        </div></div>
        <div class="sidebar-menu-item">
          <router-link to="/home"><h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="1.1rem"><path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg> Completed Forms</h4></router-link>
        </div>
        <div class="sidebar-menu-item">
          <router-link to="/home"><h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="1.1rem"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg> Profile</h4></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false,
      isOpen: true, // Initial state of the sidebar
      windowWidth: window.innerWidth, // Store initial window width
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleScroll() {
      this.isSticky = window.scrollY > -1;
    },
    toggleSidebar() {
      this.isOpen = !this.isOpen; // Toggle sidebar state
    },
    handleResize() {
      // Close sidebar if window width is decreased
      if (window.innerWidth < this.windowWidth) {
        this.isOpen = false;
      }
      // Update stored window width
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<style scoped>
router-link {
  text-decoration: none;
  color: black;
}
.navbar-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  justify-content: space-around;
  padding: 0rem 1rem 0rem 1rem; /* Add horizontal padding */
}

.navbar,
.navbar-sticky {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  text-decoration: none;
  padding: 0.2rem;
  transition: 0.3s ease-in-out;
  z-index: 1000;
}

.navbar-sticky {
  position: sticky;
  top: 0;
}
.navbar-container > div {
  margin-right: 2rem;
}

.navbar-button {
  align-self: center;
}
.navbar-brand {
  font-weight: bold;
  margin-right: 3rem;
}
.navbar-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-right: 1rem;
}
.navbar-item {
  flex-direction: row-reverse;
  color: black;
  margin-right: 1rem;
}

.sidebar {
  position: fixed;
  top: 4.5rem;
  left: 0;
  width: 200px;
  height: 100vh;
  background-color: #f0f0f0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-200px);
}
.sidebar-container {
  display: grid;
  grid-template-columns: auto ;
}
.sidebar-open {
  transform: translateX(0);
}

.sidebar-name {
  
  justify-content: center;
  align-self: center;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid black;
  border-radius: 0 0 0.5rem 0.5rem;
}
.sidebar-menu {
  display: grid;
  grid-template-columns: auto;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  
}

.sidebar-menu-item {
  text-align: left;
  border-radius:1.5rem;
  margin: 0;
  padding:0;
 
  transition: background-color 0.3s ease; /* Add transition for smoother hover effect */
}

.sidebar-menu-item:hover {
  background-color: #d0cccc; 
  border-radius: 2rem/* Change background color on hover */
}
.sidebar-menu-item a {
  
  text-decoration: none; /* Remove underline */
  color: #000; /* Set link color */
  display: block; /* Make links block elements to take full width */
  padding: 10px; /* Add padding */
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
