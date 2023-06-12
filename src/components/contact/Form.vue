<template>
  <div class="supscribe" id="supscribe">
    <div class="container">
      <div class="text">
        <!-- <a href="tel:+"> يمكن بسهولة الاشتراك كفريق </a> -->

        <div class="form">
          <form @submit.prevent="submit">
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="name"
                    >{{ $t("labels.name") }}
                    <span>{{ $t("required") }}</span></label
                  >
                  <input
                    id="name"
                    type="text"
                    class="form-control"
                    v-model="data.name"
                    required
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="email"
                    >{{ $t("labels.email") }}
                    <span>{{ $t("required") }}</span></label
                  >
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    v-model="data.email"
                    required
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="phone"
                    >{{ $t("labels.phone") }}
                    <span>{{ $t("required") }}</span>
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    class="form-control"
                    v-model="data.phone"
                    required
                  />
                  <!-- :placeholder="$t('labels.phone')" -->
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="company">{{ $t("labels.company") }} </label>
                  <input
                    id="company"
                    type="text"
                    class="form-control"
                    v-model="data.company"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="message"
                    >{{ $t("labels.message") }}
                    <span>{{ $t("required") }}</span></label
                  >
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
                  type="submit"
                  :disabled="btnLoading"
                  class="btn col-12 text-center btn-primary"
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
</template>

<script setup>
import i18n from "@/i18n";
import axios from "axios";
import { reactive, ref } from "vue";
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster({ position: "bottom" });
const btnLoading = ref(false);

const data = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
  company: "",
});

function submit() {
  btnLoading.value = true;
  const frmData = new FormData();
  frmData.append("name", data.name);
  frmData.append("email", data.email);
  frmData.append("phone", data.phone);
  frmData.append("message", data.message);

  frmData.append("company", data.company ? data.company : "");

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
}
</script>

<style lang="scss">
.supscribe {
  .container {
    .text {
      width: fit-content;
      margin-inline: auto;

      border-radius: 15px;
    }
  }
  .form {
    max-width: 750px;
    margin: auto;
  }
  .form-group {
    margin-bottom: 1rem;

    label {
      color: #182544;
      text-transform: capitalize;
      span {
        color: red;
        font-size: 20px;
        line-height: 1;
      }
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
    border-radius: 2px !important;
    margin-top: 25px;
    padding: 15px 25px !important;
    width: fit-content;
    text-transform: uppercase !important;
    font-size: 14px !important;
    background: $main_color !important;
    &:hover {
      background: $second_color !important;
    }
    // display: flex;
    // display: inline-block !important;
  }
}
</style>
