<template>
  <Loader v-if="loading" />
  <div class="home-wrapper" v-else>
    <intro :item="serviceIntro" :links="introRoutes" />
    <div class="main-content">
      <div class="location">
        <Map />
        <div class="location-info">
          <div class="inner-items" v-if="mainSettings">
            <div class="item">
              <div class="icon">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div class="content">
                <h3>{{ $t("headers.ourLocation") }}</h3>
                <p v-if="$i18n.locale == 'ar'">
                  ٢٤٩٩ شارع المستشفى - حي البادية - الدمام ٣٢٢٤٣ - المملكة
                  العربية السعودية
                </p>
                <p v-else>
                  2499 Al Mustashfa St. Al Badiyh Dist. Dammam 32243 Kingdom of
                  Saudi Arabia
                </p>
              </div>
            </div>
            <div class="item">
              <div class="icon">
                <i class="fa-solid fa-envelope-open-text"></i>
              </div>
              <div class="content">
                <h3>{{ $t("nav.contactUs") }}</h3>

                <div class="contacts">
                  <a :href="`tel:${mainSettings.phone}`"
                    ><i class="fa-solid fa-square-phone"></i>
                    <bdi class="d-flex"
                      >{{ $t("labels.phone") }}:
                      <bdi>{{ mainSettings.phone }}</bdi>
                    </bdi>
                  </a>

                  <a :href="`mailto:${mainSettings.email}`"
                    ><i class="fa-solid fa-envelope"></i>
                    <bdi class="d-flex"
                      >{{ $t("labels.mail") }}: {{ mainSettings.email }}
                    </bdi>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-form">
        <ContactContent :settings="mainSettings" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ContactContent from "@/components/contact/Content.vue";
import Map from "@/components/map/Map.vue";
import i18n from "@/i18n";
import { useStore } from "vuex";
import { ref, computed, watchEffect } from "vue";

const store = useStore();
const serviceIntro = {
  image: require("@/assets/media/images/service-header.jpeg"),
  head_title: i18n.global.t("nav.contactUs"),
  name: i18n.global.t("headers.contactUsAnyTimeYouNeedOurServices"),
};
const introRoutes = [
  {
    link: "/services",
    icon: "fa-solid fa-truck-fast",
    name: "headers.ourServices",
  },
];
const mainSettings = computed(() => store.getters.mainSettings);

const loading = ref(false);
const location = ref("");
watchEffect(() => {
  const myAPIKey = "AIzaSyC2MTR_vRbsbQQRPt5f5ZLCvvaKOpzkzlA";
  if (mainSettings.value) {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${mainSettings.value.lat},${mainSettings.value.long}&sensor=false&key=${myAPIKey}&&language=${i18n.global.locale}`
    )
      .then((res) => res.json())
      .then((data) => {
        location.value = data.results[0]?.formatted_address;
      });
  }
});
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
