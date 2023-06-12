<template>
  <div class="main-slider">
    <swiper
      :spaceBetween="30"
      :effect="'fade'"
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="slider in props.sliders" :key="slider.id">
        <div class="slider-card" :style="`background: url(${slider.image})`">
          <div class="container">
            <div class="d-flex flex-column">
              <p class="name">{{ slider.name }}</p>
              <h1 class="title dash">{{ slider.title }}</h1>
              <p class="desc" v-html="slider.description"></p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Navigation, Pagination } from "swiper";
import { defineProps } from "vue";
import "swiper/css";

import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const modules = [EffectFade, Navigation, Pagination];
const props = defineProps({
  sliders: { type: Array, required: true },
});
</script>

<style lang="scss">
.main-slider {
  .swiper {
    width: 100%;
    // padding-top: 150px;
    // height: 100vh;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
  }

  .swiper-slide {
    .slider-card {
      min-height: 600px;
      padding-top: 250px;
      // padding-bottom: 120px;
      width: 100%;
      background-size: cover !important;
      background-position: center !important;
      background-repeat: no-repeat !important;
      background-attachment: scroll !important;
      .container {
        height: 100%;
        > div {
          height: 100%;
          align-items: center;
          justify-content: center;
          p {
            font-size: 18px;
            line-height: 1.6;
            margin: 0;
            text-align: center;
            color: #fff !important;
            font-weight: 400;
            &.desc {
              width: 90%;
            }
          }
          h1 {
            font-size: 40px;
            margin: 0;
            margin-top: 10px;
            text-align: center;
            line-height: 1;
            color: #fff !important;
          }
          @media (min-width: 992px) {
            p {
              font-size: 24px;
              line-height: 40px;
            }
          }
        }
      }
    }
  }
  .swiper-pagination-bullet {
    border-radius: unset;
    width: 60px;
    height: 2px;
    background: #878a8d;
    &.swiper-pagination-bullet-active {
      height: 3px;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
  }
}
</style>
