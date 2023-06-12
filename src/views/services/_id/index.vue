<template>
  <loader v-if="loading" />
  <div class="service-page" else>
    <div class="container" v-if="service">
      <div class="row">
        <div class="col-lg-9">
          <div class="content">
            <h2 class="mb-2">{{ service.name }}</h2>
            <div class="mb-3" v-html="service.title"></div>
            <slider :sliders="service.image" />
            <div class="mt-3" v-html="service.description"></div>
          </div>
        </div>
        <div class="col-lg-3">
          <aside>
            <header>
              <p>{{ $t("headers.readMore") }}</p>
              <h3>{{ $t("headers.otherServices") }}</h3>
            </header>

            <div class="menu-services">
              <div v-if="service.sub_section">
                <ul class="list-unstyled" v-if="service.sub_section.length">
                  <li v-for="item in service.sub_section" :key="item.id">
                    <router-link :to="`/services/${item.id}/sub`">{{
                      item[`name_${$i18n.locale}`]
                    }}</router-link>
                  </li>
                </ul>
                <ul class="list-unstyled" v-else-if="mainServices">
                  <li v-for="service in mainServices" :key="service.id">
                    <router-link :to="`/services/${service.id}/main`">{{
                      service.name
                    }}</router-link>
                  </li>
                </ul>
              </div>
              <div v-else>
                <ul class="list-unstyled">
                  <li v-for="service in mainServices" :key="service.id">
                    <router-link :to="`/services/${service.id}/main`">{{
                      service.name
                    }}</router-link>
                  </li>
                </ul>
              </div>
            </div>

            <footer>
              <h3>{{ $t("nav.contactUs") }}</h3>
              <div class="contacts-list">
                <ul class="list-unstyled">
                  <li>
                    <a :href="`tel:${setting.phone}`"
                      ><i class="fa-solid fa-square-phone"></i>
                      <p class="d-flex mb-0">
                        {{ $t("labels.phone") + ": " }}
                        <bdi>{{ setting.phone }}</bdi>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a :href="`mailto:${setting.email}`"
                      ><i class="fa-solid fa-envelope"></i>
                      <bdi class="d-flex">
                        {{ $t("labels.mail") + ": " + setting.email }}
                      </bdi>
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed, ref, watchEffect } from "vue";
import axios from "axios";
import Slider from "@/components/services/Slider.vue";

const service = ref();
const loading = ref(false);
const store = useStore();
const route = useRoute();

const mainServices = computed(() => store.getters.mainServices);
const setting = computed(() => store.getters.mainSettings);
function getService() {
  loading.value = true;
  let url;

  route.params.slug == "main"
    ? (url = "get-service")
    : (url = "get-sub-service");
  axios
    .get(`${url}/${route.params.id}`)
    .then((res) => {
      loading.value = false;
      service.value = res.data.data;
    })
    .catch(() => (loading.value = false));
}
watchEffect(() => {
  getService();
});

// onMounted(() => getService());
</script>

<style lang="scss">
.service-page {
  padding-block: 50px;
  aside {
    margin-top: 20px;
    @media (min-width: 992px) {
      padding: 0 20px;
      margin-top: 0;
    }
    header {
      width: 100%;
      // margin-bottom: 20px;
      p {
        color: $textColor1;
        text-transform: uppercase;
        margin-bottom: 0px;
      }
      h3 {
        color: $textColor;
        text-transform: uppercase;
      }
      @media (min-width: 768px) {
        p {
          font-size: 18px;
        }
        h3 {
          font-size: 24px;
          line-height: 40px;
        }
      }
    }
    footer {
      margin-top: 40px;
      background: transparent;
      width: 100%;
      // margin-bottom: 20px;

      h3 {
        color: $textColor;
        text-transform: uppercase;
      }
      @media (min-width: 768px) {
        h3 {
          font-size: 24px;
          line-height: 40px;
        }
      }
    }

    .menu-services {
      ul {
        padding: 0;
        margin-inline-end: 20px;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        li {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          a {
            position: relative;
            display: block;
            text-decoration: none;
            font-size: 14px;
            padding: 8px 0;
            font-size: 700;
            color: $textColor;
            transition: 0.3s;
            text-transform: uppercase;

            &::before {
              content: "";
              width: 0px;
              height: 100%;
              background: $main_color;
              position: absolute;
              top: 0;
              transition: 0.3s ease-in-out;
              right: -4px;
            }
            &:hover {
              color: $main_color !important;
              &::before {
                right: 0;
                width: 4px;
              }
            }
          }
        }
      }
    }
    .contacts-list {
      ul {
        padding: 0;
        margin-inline-end: 20px;
      }
      a {
        display: flex;
        color: $textColor;
        line-height: 30px;
        i {
          margin-inline-end: 5px;
          color: $main_color;
          font-size: 16px;
        }
        align-items: center;
        text-decoration: none;
        font-size: 14px;
      }
    }
  }
  // * {
  //   // font-family: inherit;
  // }
  // pre {
  //   margin-bottom: 5px !important;
  // }
}
body[dir="rtl"] {
  .service-page {
    aside {
      .menu-services {
        ul {
          li {
            a {
              &::before {
                right: unset;
                left: -4px;
              }
              &:hover {
                &::before {
                  right: unset;
                  left: 0px;
                  width: 4px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
