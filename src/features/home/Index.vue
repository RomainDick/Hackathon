<template>
  <section class="home">
    <div v-if="areaZone" class="block-home">
      <div class="info">
        <div class="info_title-area">
          <h1 class="info_title-area_title">Pollution de l'air à {{ city}}</h1>
          <div class="meteo">Température actuelle : {{meteo.temp}}°C</div>
        </div>
        <div class="info_content-area">
          <h3>PM2.5 en direct</h3>
          <div
            class="info_content-area_quality"
            v-if="areaZone.fields.measurements_value >= 0 && areaZone.fields.measurements_value < 8.5"
          >
            <div class="info_content-area_quality_title">
              <h2>Très correcte</h2>
              <p
                class="info_content-area_quality_value"
              >{{ areaZone.fields.measurements_value + ' ' + areaZone.fields.measurements_unit}}</p>
            </div>
            <i class="fas fa-check-circle very-correct info_content-area_quality_correct"></i>
          </div>
          <div
            class="info_content-area_quality"
            v-if="areaZone.fields.measurements_value >= 8.5 && areaZone.fields.measurements_value < 13"
          >
            <h2 class="info_content-area_quality_title">Correcte</h2>
            <i class="fas fa-check-circle correct info_content-area_quality_correct"></i>
            <p
              class="info_content-area_quality_value"
            >{{ areaZone.fields.measurements_value + ' ' + areaZone.fields.measurements_unit}}</p>
          </div>
          <div
            class="info_content-area_quality"
            v-if="areaZone.fields.measurements_value >= 13 && areaZone.fields.measurements_value < 18"
          >
            <h2 class="info_content-area_quality_title">Moyen</h2>
            <i class="fas fa-check-circle medium info_content-area_quality_correct"></i>
            <p
              class="info_content-area_quality_value"
            >{{ areaZone.fields.measurements_value + ' ' + areaZone.fields.measurements_unit}}</p>
          </div>
          <div
            class="info_content-area_quality"
            v-if="areaZone.fields.measurements_value >= 18 && areaZone.fields.measurements_value < 22"
          >
            <h2 class="info_content-area_quality_title">Mauvais</h2>
            <i class="fas fa-times-circle bad info_content-area_quality_correct"></i>
            <p
              class="info_content-area_quality_value"
            >{{ areaZone.fields.measurements_value + ' ' + areaZone.fields.measurements_unit}}</p>
          </div>
          <div
            class="info_content-area_quality"
            v-if="areaZone.fields.measurements_value >= 22 && areaZone.fields.measurements_value < 100000"
          >
            <h2 class="info_content-area_quality_title">Très mauvais</h2>
            <i class="fas fa-times-circle very-bad info_content-area_quality_correct"></i>
            <p
              class="info_content-area_quality_value"
            >{{ areaZone.fields.measurements_value + ' ' + areaZone.fields.measurements_unit}}</p>
          </div>
          <div class="info_content-area_quality_first" v-if="areaZone">
            <h2 class="info_content-area_quality_title">Liste d'activités conseillés:</h2>
          </div>
          <div class="info_content-area_quality" v-if="areaZone">
            <h2 class="info_content-area_quality_title">#Marche</h2>
            <i class="fas fa-check-circle very-correct info_content-area_quality_correct"></i>
          </div>
          <div class="info_content-area_quality" v-if="areaZone">
            <h2 class="info_content-area_quality_title">#Course</h2>
            <i class="fas fa-check-circle very-correct info_content-area_quality_correct"></i>
          </div>
        </div>
      </div>
      <div v-if="coordinates" class="map">
        <GmapMap
          :center="{lat:coordinates.lat, lng:coordinates.lng}"
          :zoom="13"
          map-type-id="terrain"
          style="width: 100%; height: 100%"
        >
          <gmap-marker
            :key="ownMarker"
            :position="ownMarker.position"
            :icon="ownMarker.icon"
            @click="center=ownMarker.position"
          ></gmap-marker>
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            @click="center=m.position"
          ></gmap-marker>
          <GmapCircle
            :key="index"
            v-for="(m, index) in markers"
            :center="m.position"
            :radius="2000"
            :options="{fillColor:m.color,fillOpacity:0.1}"
          ></GmapCircle>
        </GmapMap>
      </div>
    </div>
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
      markers: [],
      ownMarker: null,
      city: "",
      meteo: null
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
          "https://public.opendatasoft.com/api/records/1.0/search/?dataset=openaq&rows=1&refine.measurements_parameter=PM2.5&sort=measurements_lastupdated&geofilter.distance=" +
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
    this.$getLocation({}).then(coordinates => {
      axios
        .get(
          "http://api.openweathermap.org/data/2.5/weather?lat=" +
            coordinates.lat +
            "&lon=" +
            coordinates.lng +
            "&appid=5df8aa66c048c4e24edbdc1968460933"
        )
        .then(response => {
          this.meteo = { temp: (response.data.main.temp - 273.15).toFixed(0) };
          this.city = response.data.name;
        });
    });
  },

  methods: {
    addMarkers() {
      const marker = {
        lat: this.areaZone.fields.coordinates[0],
        lng: this.areaZone.fields.coordinates[1]
      };
      this.markers.push({ position: marker, color: "blue" });
    },
    addMarkerOwnPosition() {
      const marker = {
        lat: this.coordinates.lat,
        lng: this.coordinates.lng
      };
      this.ownMarker = {
        position: marker,
        icon: "http://maps.google.com/mapfiles/kml/shapes/man.png"
      };
    }
  }
};
</script>


<style scoped lang="scss">
@import "../../assets/stylesheets/variables";

.home {
  .block-home {
    display: grid;
    grid-template-areas: "info map";
    grid-template-columns: 2fr 3fr;
    margin: 30px 10%;
    height: 500px;

    .info {
      grid-area: info;
      background-color: white;
      margin-right: 2%;
      border-radius: 10px;
      box-shadow: 1px 1px 5px #555;
      &_title-area {
        background-color: $grey;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        height: 100px;
        text-align: center;
        color: $titleColor;

        &_title {
          padding-top: 20px;
        }
        .meteo {
          margin: 5%;
        }
      }

      &_content-area {
        padding: 5%;

        .very-correct {
          color: #4bb0af;
          font-size: 100px;
        }

        .correct {
          color: #009600;
          font-size: 100px;
        }

        .medium {
          color: #ee8818;
          font-size: 100px;
        }

        .bad {
          color: #ff0600;
          font-size: 100px;
        }

        .very-bad {
          color: #000000;
          font-size: 100px;
        }

        &_quality {
          display: grid;
          grid-template-areas: "title logo";
          grid-template-columns: 4fr 1fr;

          &_title {
            grid-area: title;
            padding-top: 35px;
          }

          &_logo {
            grid-area: logo;
          }

          &_value {
            margin-top: 10px;
            margin-left: 10px;
          }
          &_first {
            border-top: 1px solid black;
            margin-top: 30px;
          }
        }
      }
    }

    .map {
      grid-area: map;
      margin-left: 2%;
      box-shadow: 1px 1px 5px #555;
    }
  }
}
</style>
