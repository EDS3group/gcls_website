<template>
  <Loader v-if="loading" />
  <div class="home-wrapper" v-else>
    <slider :sliders="sliders" v-if="sliders" />
    <!-- <features /> -->
    <services />
    <testimonials />
    <our-values />
    <map-section />
  </div>
</template>

<script setup>
import Slider from "@/components/global/Slider.vue";
// import Features from "@/components/home/Features.vue";
import Services from "@/components/home/Services.vue";
import Testimonials from "@/components/home/Testimonials.vue";
import OurValues from "@/components/home/OurValues.vue";
import MapSection from "@/components/home/MapSection.vue";
// import { useMeta } from "vue-meta";
import axios from "axios";
import { ref, onMounted } from "vue";

// const { head } = useMeta();
const loading = ref(false);

const sliders = ref(null);

// head.value.title = "My Page Title";
// head.value.meta.push({ name: "description", content: "My page description" });

function getSliders() {
  loading.value = true;
  axios
    .get("get-slider")
    .then((res) => {
      loading.value = false;
      sliders.value = res.data.data;
    })
    .catch(() => (loading.value = false));
}

onMounted(() => getSliders());
</script>
