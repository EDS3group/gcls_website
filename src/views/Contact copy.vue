<template>
  <div class="contact-page">
    <Loader v-if="loading" />
    <div class="" v-else>
      <div class="breadcrumbs">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="breadcrumbs-inner bread-">
                <h2 class="title text-white mb-2">
                  {{ $t("nav.contactUs") }}
                </h2>
                <div class="breadcrumbs-title">
                  <router-link to="/">{{ $t("nav.main") }}</router-link>
                  <router-link to="/contact">{{
                    $t("nav.contactUs")
                  }}</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-us">
        <div class="container">
          <div class="text">
            <h3 class="title">{{ $t("counterAttack") }}</h3>
            <p class="description">
              {{ $t("nav.contactWithUs") }}
            </p>
            <!-- <a href="tel:+"> يمكن بسهولة الاشتراك كفريق </a> -->

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
                  <div class="col-12">
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
                  <div class="col-12">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        v-model="data.subject"
                        :placeholder="$t('labels.subject')"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label for="message">{{ $t("labels.message") }}</label>
                      <textarea
                        id="message"
                        type="text"
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
                      class="btn col-12 text-center btn-primary"
                    >
                      <div
                        class="spinner-border"
                        role="status"
                        v-if="btnLoading"
                      >
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
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { reactive, ref } from "vue";
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster({ position: "bottom" });
const btnLoading = ref(false);
const preview = ref("");
const data = reactive({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});
function uploadImage(e) {
  let src = e.target.files[0];
  preview.value = URL.createObjectURL(src);

  data.logo = src;
}
function submit() {
  btnLoading.value = true;

  const frmData = new FormData();
  frmData.append("name", data.name);
  frmData.append("email", data.email);
  frmData.append("phone", data.phone);
  frmData.append("subject", data.subject);
  frmData.append("message", data.message);

  axios
    .post("contact-us", frmData)
    .then((res) => {
      btnLoading.value = false;
      toaster.success(res.data.msg);
      data.name = "";
      data.email = "";
      data.phone = "";
      data.message = "";
      data.subject = null;
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
.contact-page {
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
  .contact-us {
    background: #f7f7f7;
    padding: 100px 0;
    .container {
      .text {
        border: 2px solid #206f00;
        width: fit-content;
        margin-inline: auto;
        padding: 20px;
        border-radius: 15px;
      }
      h3.title {
        padding-top: 20px;
        color: #206f00;
        text-align: center !important;
        margin-bottom: 10px !important;
        &::before {
          display: none;
          left: unset;
        }
      }
      p.description {
        font-size: 18px;
        font-weight: 400;
        color: #182544 !important;
        text-align: center;
      }
    }
    .form {
      padding: 30px;
      max-width: 750px;
      margin: auto;
    }
    .form-group {
      margin-bottom: 1rem;

      label {
        color: #182544;
      }
      input[type="checkbox"] {
        width: 15px;
        height: 15px;
      }
      input,
      textarea {
        // border: none;
        box-shadow: none;
        border-color: #182544;
        // border-bottom: 2px solid #1b6096;
        // border-radius: 0;
        background: transparent;
        transition: 0.3s;
        padding: 10px 20px;
        margin-bottom: 24px;
        color: #182544;
        &::placeholder {
          // color: #fff;
        }
        &:focus,
        &:hover {
          border-color: #182544;
        }
      }
    }
    button.btn-primary {
      border-radius: 50px !important;
      margin-top: 25px;
      padding: 15px 45px !important;
      text-transform: uppercase !important;
      font-size: 14px !important;
      background: #206f00 !important;
      &:hover {
        background: #7ea700 !important;
      }
      // display: flex;
      // display: inline-block !important;
    }
  }
}
</style>
