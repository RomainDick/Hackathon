<template>
  <div id="app">
    <HeaderApp></HeaderApp>

    <main class="main">
      <!-- <transition name="fade"> -->
      <router-view></router-view>
      <!-- </transition> -->
    </main>

  </div>
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue";

export default {
  name: "App",

  components: {
    HeaderApp,
  },

  mounted() {},

  methods: {}
};
</script>


<style lang="scss">
@import "../assets/stylesheets/variables";
@import "../assets/stylesheets/reset";

// .fade-enter-active,
// .fade-leave-active {
//   transition: all 0.5s;
// }
// .fade-enter,
// .fade-leave-to {
//   opacity: 0;
//   transform: translateY(-50px);
//   position: absolute;
//   z-index: -1;
// }

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding: 0 $marge;
}

.main {
  flex: 1;
  width: 100%;
}
</style>
