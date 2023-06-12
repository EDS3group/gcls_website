<template>
  <Loader v-if="loading" />
  <div class="home-wrapper" v-else>
    <intro :item="serviceIntro" :links="introRoutes" />
    <div class="main-content" v-if="!$route.params.id">
      <Services />
    </div>
    <router-view v-else />
  </div>
</template>

<script setup>
import { ref } from "vue";

import Services from "@/components/services/Services.vue";
import i18n from "@/i18n";

const serviceIntro = {
  image: require("@/assets/media/images/service-header.jpeg"),
  head_title: i18n.global.t("headers.thisIsTheRightPlace"),
  name: i18n.global.t("headers.ourServices"),
};
const introRoutes = [
  {
    link: "/contact-us",
    icon: "fa-regular fa-comment",
    name: "nav.contactUs",
  },
];

const loading = ref(false);
</script>
