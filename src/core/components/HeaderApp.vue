<template>
  <header class='HeaderApp'>
    <div class='HeaderApp__content'>

      <router-link to="/">
        <img src="../../assets/logo.png" width="45" height="45" alt="" style="margin-left:15px;">
      </router-link>

      <ul class='HeaderApp__list'>
      
        <li>
          <!-- <router-link class='HeaderApp__link' to="/search">
            <img src="@/assets/image/search.svg" alt="">
          </router-link> -->
        </li>

      </ul>

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

</style>
