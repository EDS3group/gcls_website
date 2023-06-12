<template>
  <div v-if="setting">
    <GMapMap
      locale="en"
      v-if="setting"
      :center="{ lat: +setting.lat, lng: +setting.long }"
      :zoom="10"
      map-type-id="terrain"
      style="width: 100%; height: 450px;"
    >
      <GMapMarker
        :position="{ lat: +setting.lat, lng: +setting.long }"
        :clickable="false"
        :draggable="false"
      />
    </GMapMap>
  </div>
</template>

<script>
export default {
  computed: {
    setting() {
      return this.$store.getters.mainSettings;
    },
  },
  // setup() {
  //   const center = { lat: 40.689247, lng: -74.044502 };
  //   // const API_KEY = "AIzaSyA8qi0TK3EDod0LlTXbQFf_DyEptiGgPFU";
  //   return { center, API_KEY };
  // },
};
</script>
