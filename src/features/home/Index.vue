<template>
  <section class="home">Home page</section>
</template>

<script>
// import Banner from '@/shared/Banner';

import * as fromTypes from "@/store/types.js";

export default {
  name: "home",

  components: {
    // Banner,
  },

  computed: {},

  mounted() {
    // this.$store.dispatch(
    //   fromTypes.GET_ITEMS_PREF,
    //   {
    //     department : this.getUserData.department,
    //     categories : this.getUserData.categories,
    //   }
    // );
  },

  methods: {}
};
</script>


<style scoped lang="scss">
@import "../../assets/stylesheets/variables";
.home {
}
</style>