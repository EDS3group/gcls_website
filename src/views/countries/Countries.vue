<template>
  <Loader v-if="loading" />
  <div class="home-wrapper" v-else>
    <intro :item="serviceIntro" :links="introRoutes" />
    <div class="main-content" v-if="!$route.params.id">
      <Countries />
    </div>
    <router-view v-else />
  </div>
</template>

<script setup>
import { ref } from "vue";

import Countries from "@/components/countries/Countries.vue";
import i18n from "@/i18n";

const serviceIntro = {
  image: require("@/assets/media/images/sliders/2.jpg"),
  head_title: i18n.global.t("headers.thisIsTheRightPlace"),
  name: i18n.global.t("headers.yourCountry"),
};
const introRoutes = [
  {
    link: "/contact-us",
    icon: "fa-regular fa-comment",
    name: "nav.contactUs",
  },
  {
    link: "/services",
    icon: "fa-solid fa-truck-fast",
    name: "headers.ourServices",
  },
];

const loading = ref(false);
</script>
