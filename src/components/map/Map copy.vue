<template>
  <GoogleMap
    v-if="setting"
    :api-key="API_KEY"
    style="width: 100%; height: 450px;"
    mapTypeId="terrain"
    :center="{ lat: +setting.lat, lng: +setting.long }"
    :zoom="13"
  >
    <Marker :options="{ lat: +setting.lat, lng: +setting.long }">
      <!-- <InfoWindow>
        <div id="mapContent">
          <div id="siteNotice"></div>
          <h1 id="firstHeading" class="firstHeading">Uluru</h1>
          <div id="bodyContent">
            <p>
              <b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large
              sandstone rock formation in the southern part of the Northern
              Territory, central Australia. It lies 335&#160;km (208&#160;mi)
              south west of the nearest large town, Alice Springs; 450&#160;km
              (280&#160;mi) by road. Kata Tjuta and Uluru are the two major
              features of the Uluru - Kata Tjuta National Park. Uluru is sacred
              to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people
              of the area. It has many springs, waterholes, rock caves and
              ancient paintings. Uluru is listed as a World Heritage Site.
            </p>
            <p>
              Attribution: Uluru,
              <a
                href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"
              >
                https://en.wikipedia.org/w/index.php?title=Uluru</a
              >
              (last visited June 22, 2009).
            </p>
          </div>
        </div>
      </InfoWindow> -->
    </Marker>
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  computed: {
    setting() {
      return this.$store.getters.mainSettings;
    },
  },
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 };
    const API_KEY = "AIzaSyA8qi0TK3EDod0LlTXbQFf_DyEptiGgPFU";
    return { center, API_KEY };
  },
});
</script>
