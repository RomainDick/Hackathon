<template>
  <section class="home">
    <h1 v-if="areaZone">{{ areaZone.fields.location }}</h1>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: "home",

  data() {
    return {
      coordinates: null,
      areaZone: null
    }
  },

  components: {
    // Banner,
  },

  computed: {
  },

  mounted() {
    this.$getLocation({
    }).then(coordinates => {
      axios.get('https://public.opendatasoft.com/api/records/1.0/search/?dataset=openaq&rows=1&sort=measurements_lastupdated&geofilter.distance=' + coordinates.lat+ '%2C' + coordinates.lng + '%2C3000')
              .then((response) => {
                this.areaZone = response.data.records[0]
              })
      this.coordinates = coordinates
    });
  },

  methods: {}
};
</script>


<style scoped lang="scss">
@import "../../assets/stylesheets/variables";
.home {
}
</style>
