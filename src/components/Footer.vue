<template>
  <footer>
    <div class="container">
      <div class="content">
        <div class="logo">
          <div class="img-container">
            <img
              v-lazy="require(`@/assets/media/images/logo/logo.png`)"
              alt="counter-logo"
              class="img-fluid"
            />
          </div>
          <div class="contact">
            <a :href="`mailto:${setting.email}`" class="link">
              <i class="fa-solid fa-envelope"></i>
              {{ setting.email }}
            </a>
            <a :href="`tel:${setting.phone}`" class="link">
              <i class="fa-solid fa-phone-flip"></i>
              <bdi>
                {{ setting.phone }}
              </bdi>
            </a>
          </div>
          <div class="mt-3" v-if="setting">
            <ul class="list-unstyled p-0 d-flex social">
              <li v-if="setting.facebook">
                <a :href="setting.facebook" target="_blank"
                  ><i class="fa-brands fa-facebook"></i
                ></a>
              </li>
              <li v-if="setting.twitter">
                <a :href="setting.twitter" target="_blank"
                  ><i class="fa-brands fa-twitter"></i
                ></a>
              </li>
              <li v-if="setting.instagram">
                <a :href="setting.instagram" target="_blank"
                  ><i class="fa-brands fa-instagram"></i
                ></a>
              </li>
              <li v-if="setting.snapchat">
                <a :href="setting.snapchat" target="_blank"
                  ><i class="fa-brands fa-snapchat"></i
                ></a>
              </li>
              <li v-if="setting.tiktok">
                <a :href="setting.tiktok" target="_blank"
                  ><i class="fa-brands fa-tiktok"></i
                ></a>
              </li>
            </ul>
          </div>

          <!-- <p class="description" v-if="aboutUs">
            {{ aboutUs.description }}
          </p> -->
        </div>
        <div class="links">
          <h2 class="title">
            {{ $t("headers.quickLinks") }}
          </h2>
          <ul class="list-unstyled">
            <li>
              <router-link to="/">{{ $t("nav.home") }}</router-link>
            </li>
            <li>
              <router-link to="/about-us">{{ $t("nav.aboutUs") }}</router-link>
            </li>
            <li>
              <router-link to="/services">{{ $t("nav.services") }}</router-link>
            </li>
            <li>
              <router-link to="/countries">{{
                $t("nav.countries")
              }}</router-link>
            </li>
            <!-- <li>
              <router-link to="/book-online">{{
                $t("nav.bookOnline")
              }}</router-link>
            </li> -->
            <li>
              <router-link to="/faq">{{ $t("nav.faq") }}</router-link>
            </li>
            <li>
              <router-link to="/terms">{{
                $t("nav.termsAndConditions")
              }}</router-link>
            </li>
            <li>
              <router-link to="/privacy">{{ $t("nav.privacy") }}</router-link>
            </li>
            <li>
              <router-link to="/contact-us">{{
                $t("nav.contactUs")
              }}</router-link>
            </li>
            <li>
              <a target="_blank" href="https://linktr.ee/gclsonline">
                {{ $t("nav.bcqr") }}
              </a>
            </li>
          </ul>
        </div>
        <div class="info">
          <h2 class="title">
            {{ $t("nav.contactUs") }}
          </h2>
          <div class="form">
            <form @submit.prevent="submit">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      v-model="data.name"
                      :placeholder="$t('labels.name')"
                      required
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      v-model="data.email"
                      :placeholder="$t('labels.email')"
                      required
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input
                      type="phone"
                      class="form-control"
                      v-model="data.phone"
                      :placeholder="$t('labels.phone')"
                      required
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      v-model="data.company"
                      :placeholder="$t('labels.company')"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <textarea
                      id="message"
                      type="text"
                      :placeholder="$t('labels.message')"
                      class="form-control"
                      v-model="data.message"
                      required
                    ></textarea>
                  </div>
                </div>

                <div class="col-12">
                  <button
                    :disabled="btnLoading"
                    type="submit"
                    class="col-12 text-center btn base-btn"
                  >
                    <div class="spinner-border" role="status" v-if="btnLoading">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <span v-else>{{ $t("send") }}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <p class="copyrights">
      {{ $t("copyrights") }} |

      <router-link target="_blank" to="/sitemap.xml"
        >{{ $t("sitemap") }}
      </router-link>
      <br />
      {{ $t("poweredBy") }}:
      <a href="https://thepalmsolutions.com" target="_blank">{{
        $t("palmSolutions")
      }}</a>
      <!-- <bdi> {{ year }} &copy; </bdi> -->
    </p>
  </footer>
</template>

<script setup>
import i18n from "../i18n";
import axios from "axios";
import { useStore } from "vuex";
import { reactive, ref, computed } from "vue";
import { createToaster } from "@meforma/vue-toaster";
const store = useStore();
const toaster = createToaster({ position: "bottom" });
const btnLoading = ref(false);
const preview = ref("");
const data = reactive({
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
});
function uploadImage(e) {
  let src = e.target.files[0];
  preview.value = URL.createObjectURL(src);

  data.logo = src;
}

const setting = computed(() => store.getters.mainSettings);

// const year = computed(() => new Date().getFullYear());
function submit() {
  btnLoading.value = true;

  const frmData = new FormData();
  frmData.append("name", data.name);
  frmData.append("email", data.email);
  frmData.append("phone", data.phone);
  frmData.append("company", data.company ? data.company : "");
  frmData.append("message", data.message);

  axios
    .post("add-contact-us", frmData)
    .then(() => {
      btnLoading.value = false;
      toaster.success(i18n.global.t("yourMessageHasBeenSentSuccessfully"));
      data.name = "";
      data.email = "";
      data.phone = "";
      data.message = "";
      data.company = "";
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    })
    .catch((err) => {
      btnLoading.value = false;
      toaster.error(err.response.data.message);
    });

  return {
    submit,
    uploadImage,
    frmData,
    preview,
    btnLoading,
  };
}
</script>

<style lang="scss">
footer {
  background: $main_color;
  .content {
    padding-block: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .logo {
      width: 100%;
      // padding: 30px;
      padding-block: 20px;
      text-align: start;
      .img-container {
        width: 150px;
        margin-bottom: 30px;
        margin-inline-end: auto;
        // filter: brightness(0) invert(1);
      }
      .contact {
        a.link {
          color: #fff;
          transition: 0.3s ease-in-out;
          display: block;
          text-decoration: none;

          i {
            margin-inline-end: 5px;
          }
        }
      }
      @media (max-width: 992px) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
    }
    .info {
      padding-block: 20px;
      width: 100%;
      .row {
        > div {
          margin-bottom: 10px;
          padding-inline: 5px;
        }
      }
      button {
        color: #fff !important;
        &:hover {
          background: $second_color !important;
        }
      }
    }
    .links {
      padding-block: 20px;
      width: 100%;
      @media (max-width: 992px) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
      ul {
        display: block;
        column-count: 2;
        li {
          a {
            padding-block: 10px;
            color: #fff;
            text-decoration: none;
            font-size: 18px;
            transition: 0.3s;
            text-transform: capitalize;
            &.router-link-active.router-link-exact-active {
              color: $second_color !important;
            }
            &:hover {
              color: $second_color !important;
            }
          }
        }
      }
    }
    @media (min-width: 992px) {
      .logo,
      .info,
      .links {
        width: calc(100% / 3 - 20px);
      }
    }
  }
  h2.title {
    color: #fff;
    &::before {
      background-color: #fff;
    }
  }
}
ul.social {
  justify-content: flex-start;
  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    color: #fff;
    transition: 0.3s;
    text-decoration: none;

    i {
      font-size: 30px;
    }
    &:hover {
      color: $second_color;
    }
  }
}
p.copyrights {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  text-align: center;
  margin-bottom: 0;
  padding: 20px 0;
  position: relative;
  background: $main_color;
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: $second_color;
      text-decoration: underline;
    }
  }
}
</style>
