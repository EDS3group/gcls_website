<template>
  <div class="supscribe" id="supscribe">
    <div class="container">
      <div class="text">
        <!-- <a href="tel:+"> يمكن بسهولة الاشتراك كفريق </a> -->
        <h2 class="title">{{ $t("headers.personalInformation") }}</h2>
        <div class="form">
          <form @submit.prevent="submit">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="first_name"
                    >{{ $t("labels.first_name") }}
                    <span>{{ $t("required") }}</span>
                  </label>
                  <input
                    id="first_name"
                    type="text"
                    :placeholder="$t('labels.first_name')"
                    class="form-control"
                    v-model="data.first_name"
                    required
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="last_name"
                    >{{ $t("labels.last_name") }}
                    <span>{{ $t("required") }}</span>
                  </label>
                  <input
                    id="last_name"
                    type="text"
                    :placeholder="$t('labels.last_name')"
                    class="form-control"
                    v-model="data.last_name"
                    required
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="email"
                    >{{ $t("labels.email") }} <span>{{ $t("required") }}</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    :placeholder="$t('labels.email')"
                    class="form-control"
                    v-model="data.email"
                    required
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="phone"
                    >{{ $t("labels.phone") }} <span>{{ $t("required") }}</span>
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    class="form-control"
                    v-model="data.phone"
                    :placeholder="$t('labels.phone')"
                    required
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="city"
                    >{{ $t("labels.city") }} <span>{{ $t("required") }}</span>
                  </label>
                  <input
                    id="city"
                    type="text"
                    class="form-control"
                    :placeholder="$t('labels.city')"
                    v-model="data.city"
                    required
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="postal_code"
                    >{{ $t("labels.postal_code") }}
                    <span>{{ $t("required") }}</span>
                  </label>
                  <input
                    id="postal_code"
                    type="number"
                    class="form-control"
                    :placeholder="$t('labels.postal_code')"
                    v-model="data.postcode"
                    required
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="address"
                    >{{ $t("labels.address") }}
                    <span>{{ $t("required") }}</span>
                  </label>
                  <textarea
                    id="address"
                    type="text"
                    class="form-control"
                    :placeholder="$t('labels.address')"
                    v-model="data.address"
                    required
                  ></textarea>
                </div>
              </div>

              <div class="col-12 d-flex justify-content-end">
                <!-- <button
                  type="button"
                  disabled
                  class="btn col-12 text-center btn-primary"
                >
                  <span>{{ $t("buttons.send") }}</span>
                </button> -->
                <button
                  type="submit"
                  class="btn col-12 text-center btn-primary"
                >
                  <span>{{ $t("buttons.next") }}</span>
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
import { reactive, defineEmits } from "vue";

const data = reactive({
  first_name: "",
  last_name: "",
  email: "",
  address: "",
  city: "",
  postcode: "",
});
const emit = defineEmits(["stepOne"]);

function submit() {
  emit("stepOne", data);
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
      // text-transform: capitalize;
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
