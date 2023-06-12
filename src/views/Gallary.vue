<template>
  <div class="home-gallary">
    <Loader v-if="loading" />
    <div class="" v-else>
      <div class="breadcrumbs">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="breadcrumbs-inner bread-">
                <h2 class="title text-white mb-2">
                  {{ $t("nav.gallary") }}
                </h2>
                <div class="breadcrumbs-title">
                  <router-link to="/">{{ $t("nav.main") }}</router-link>
                  <router-link to="/gallary">{{
                    $t("nav.gallary")
                  }}</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <h3 class="title">{{ $t("1st Qimam wa Shiam Tournament") }}</h3>
        <div>
          <Gallary :item="gallary" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Loader from "@/components/loader/Loader.vue";
import Gallary from "@/components/global/Gallary.vue";
import axios from "axios";

import { ref, onMounted } from "vue";
const gallary = ref(null);
const loading = ref(false);
onMounted(() => {
  loading.value = true;
  axios
    .get("get-galary")
    .then((data) => {
      loading.value = false;
      gallary.value = data.data.data.map((el) => ({
        id: el.id,
        src: el.image,
      }));
    })
    .catch(() => (loading.value = false));
});
</script>

<style lang="scss" scoped>
.breadcrumbs {
  padding-top: 130px;
  padding-bottom: 50px;
  margin-bottom: 30px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("@/assets/media/images/header.jpeg");
  //   background-image: url("https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2019/05/inner_15.jpg");
  .breadcrumbs-title {
    a {
      color: #fff !important;
      text-decoration: none;
      &:first-child {
        border-bottom: 1px solid #fff;
        margin-inline-end: 10px;
      }
    }
  }
}
.home-gallary {
  padding-top: 0 !important;
  h3 {
    color: #206f00;
    font-size: 28px;
  }
}
</style>
