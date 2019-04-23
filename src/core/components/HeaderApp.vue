<template>
  <header class="HeaderApp">header</header>
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
}
</style>
