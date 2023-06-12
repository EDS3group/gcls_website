<template>
  <div class="term-page">
    <Loader v-if="loading" />
    <div class="home-wrapper" v-else>
      <intro :item="item" :links="introRoutes" />

      <div class="container">
        <section class="content term">
          <div class="container">
            <div class="row" v-if="item">
              <div class="">
                <div class="info">
                  <h2 class="mb-0">{{ item.title }}</h2>

                  <!-- <router-link to="/about">{{ $t("nav.aboutUs") }}</router-link> -->
                </div>
                <div class="info" v-html="item.description"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import Loader from "@/components/loader/Loader.vue";

import axios from "axios";

import { ref, onMounted } from "vue";
const item = ref(null);
const loading = ref(false);
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
onMounted(() => {
  loading.value = true;
  axios
    .get("get-about-us")
    .then((data) => {
      item.value = data.data.data[0];

      loading.value = false;
    })
    .catch(() => (this.loading = false));
});
</script>

<style lang="scss" scoped>
.term-page {
  padding-top: 0 !important;
  background: #f7f7f7;
  h3 {
    color: #206f00;
    font-size: 28px;
  }
  .term {
    padding-block: 20px;
    background: #f7f7f7;
    //   background: fixed url('@/assets/gray-bg.jpg');
    .info {
      // padding: 30px;
      padding-top: 20px;
      h1 {
        font-size: 17px;
        margin-bottom: 30px;
        span {
          color: #206f00;
          font-weight: bold;
        }
      }
      h2 {
        margin-bottom: 30px;
        color: #111;
        line-height: 40px;

        font-size: 28px !important;
        line-height: 1.3;
        text-transform: uppercase;
      }
      p {
        color: #555555;
        display: block !important;

        font-size: 18px;

        overflow: hidden;
        font-weight: 400;
      }
      a {
        display: block;
        margin-top: 50px;
        width: fit-content;
        color: #fff;
        background: #206f00;
        padding: 10px 20px;
        border-radius: 8px;
        text-decoration: none;
      }
    }
    .image {
      // padding: 30px;
    }
  }
}
</style>
