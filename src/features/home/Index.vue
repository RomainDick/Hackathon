<template>
  <section class="home">
    <h1 v-if="areaZone">{{ areaZone.fields.location }}</h1>

    <GmapMap
      v-if="coordinates"
      :center="{lat:coordinates.lat, lng:coordinates.lng}"
      :zoom="13"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </GmapMap>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "home",

  data() {
    return {
      coordinates: null,
      areaZone: null,
      markers: []
    };
  },

  components: {
    // Banner,
  },

  computed: {},

  mounted() {
    this.$getLocation({}).then(coordinates => {
      axios
        .get(
          "https://public.opendatasoft.com/api/records/1.0/search/?dataset=openaq&rows=1&sort=measurements_lastupdated&geofilter.distance=" +
            coordinates.lat +
            "%2C" +
            coordinates.lng +
            "%2C3000"
        )
        .then(response => {
          this.areaZone = response.data.records[0];
          this.addMarkers();
        });
      this.coordinates = coordinates;
      this.addMarkerOwnPosition();
    });
  },

  methods: {
    addMarkers() {
      const marker = {
        lat: this.areaZone.fields.coordinates[0],
        lng: this.areaZone.fields.coordinates[1]
      };
      this.markers.push({ position: marker });
    },
    addMarkerOwnPosition() {
      const marker = {
        lat: this.coordinates.lat,
        lng: this.coordinates.lng
      };
      this.markers.push({ position: marker });
    }
  }
};
</script>


<style scoped lang="scss">
@import "../../assets/stylesheets/variables";
.home {
}
</style>
