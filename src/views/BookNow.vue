<template>
  <Loader v-if="loading" />
  <div class="home-wrapper" v-else>
    <intro :item="serviceIntro" :links="introRoutes" />
    <div class="main-content">
      <div class="contact-form">
        <BookContent />
      </div>
    </div>
  </div>
</template>

<script setup>
import BookContent from "@/components/book/Content.vue";

import i18n from "@/i18n";
import { ref } from "vue";
const serviceIntro = {
  image: require("@/assets/media/images/service-header.jpeg"),

  name: i18n.global.t("headers.bookOnline"),
};
const introRoutes = [
  {
    link: "/services",
    icon: "fa-solid fa-truck-fast",
    name: "headers.ourServices",
  },
];
const loading = ref(false);
</script>

<style lang="scss">
.location {
  position: relative;
  .location-info {
    background: #fff;
    @include mainShadow();
    padding: 30px;
    position: absolute;
    top: 40px;
    bottom: 40px;
    right: 0;
    width: 373px;
    padding: 30px;
    border-radius: 2px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    overflow: hidden;
    opacity: 0.85;
    .inner-items {
      .item {
        text-align: center;
        .icon {
          width: 34px;
          height: 34px;
          margin-inline: auto;
          margin-bottom: 20px;
          i {
            color: $textColor;
            font-size: 32px;
          }
        }
        .content {
          h3 {
            font-weight: 500;
            font-size: 20px !important;
            text-transform: uppercase;
            margin-bottom: 15px;
          }
          p {
            font-size: 14px;
          }
          .contacts {
            a {
              display: flex;
              justify-content: center;
              align-items: center;
              text-decoration: none;
              color: $textColor;
              font-size: 14px;
              i {
                font-size: 16px;
                margin-inline-end: 5px;
              }
            }
          }
        }
        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
    @media (max-width: 992px) {
      position: relative;
    }
  }
}
</style>
