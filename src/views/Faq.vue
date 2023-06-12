<template>
  <Loader v-if="loading" />
  <div class="home-wrapper" v-else>
    <intro :item="serviceIntro" :links="introRoutes" />
    <div class="main-content">
      <Faq />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import Faq from "@/components/faq/Faq.vue";
import i18n from "@/i18n";

const serviceIntro = {
  image: require("@/assets/media/images/service-header.jpeg"),
  head_title: i18n.global.t("headers.thisIsTheRightPlace"),
  name: i18n.global.t("headers.allTheQuestions"),
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
