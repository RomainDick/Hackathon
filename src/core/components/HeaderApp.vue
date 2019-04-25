<template>
  <header class='HeaderApp'>
    <!-- Navbar (sit on top) -->
    <div>
      <div class="w3-bar w3-white w3-card header-text" id="myNavbar">
        <a href="#home" class="w3-bar-item w3-button w3-wide header-text">AIREADY</a>
        <!-- Right-sided navbar links -->
        <div class="w3-right w3-hide-small header">
          <a href="#about" class="w3-bar-item w3-button">ABOUT</a>
          <a href="#team" class="w3-bar-item w3-button"><i class="fa fa-user"></i> TEAM</a>
          <a href="#work" class="w3-bar-item w3-button"><i class="fa fa-th"></i> WORK</a>
          <a href="#pricing" class="w3-bar-item w3-button"><i class="fa fa-usd"></i> PRICING</a>
          <a href="#contact" class="w3-bar-item w3-button"><i class="fa fa-envelope"></i> CONTACT</a>
        </div>
        <!-- Hide right-floated links on small screens and replace them with a menu icon -->

        <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
// import * as fromTypes from "@/store/types.js";

export default {
  name: "HeaderApp",

  computed: {
    getUserLogin() {
      return this.$store.getters.getUserLogin;
    }
  },

  mounted() {},

  methods: {}
};
</script>


<style scoped lang="scss">
@import "../../assets/stylesheets/_variables";

.HeaderApp {
  background-color: $grey;
  width:100%;
}

body,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", sans-serif}

body, html {
  height: 100%;
  line-height: 1.8;
}

/* Full height image header */
.bgimg-1 {
  background-position: center;
  background-size: cover;
  min-height: 100%;
}

.w3-bar .w3-button {
  padding: 16px;
}

.header {
  height: 80px;
}

.header-text {
  padding-top: 25px;
}

</style>
