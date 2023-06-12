<template>
  <div class="supscribe" id="supscribe">
    <div class="container">
      <div class="text">
        <h2 class="title">{{ $t("headers.aboutYourExportShipment") }}</h2>
        <!-- <a href="tel:+"> يمكن بسهولة الاشتراك كفريق </a> -->

        <div class="form">
          <form @submit.prevent="submit">
            <div class="row">
              <div class="col-sm-6 col-lg-4">
                <div class="form-group">
                  <label for="shipment_type"
                    >{{ $t("labels.shipment_type") }}
                    <span>{{ $t("required") }}</span>
                  </label>
                  <select
                    name="shipment_type"
                    v-model="data.shipment_type"
                    required
                    class="form-control"
                    id="shipment_type"
                  >
                    <option value="personal">{{ $t("personal") }}</option>
                    <option value="commercial">{{ $t("commercial") }}</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4">
                <div class="form-group">
                  <label for="shipment_size"
                    >{{ $t("labels.shipment_size") }}
                    <span>{{ $t("required") }}</span>
                  </label>
                  <input
                    id="shipment_size"
                    type="number"
                    class="form-control"
                    v-model="data.shipment_size"
                    required
                  />
                  <!-- :placeholder="$t('labels.shipment_size')" -->
                </div>
              </div>

              <div class="col-sm-6 col-lg-4">
                <div class="form-group">
                  <label for="weight"
                    >{{ $t("labels.weight") }} <span>{{ $t("required") }}</span>
                  </label>
                  <input
                    id="weight"
                    type="number"
                    class="form-control"
                    v-model="data.weight"
                    required
                  />
                  <!-- :placeholder="$t('labels.weight')" -->
                </div>
              </div>
              <div class="col-sm-6 col-lg-4">
                <div class="form-group">
                  <label for="country"
                    >{{ $t("labels.country") }}
                    <span>{{ $t("required") }}</span>
                  </label>
                  <input
                    id="country"
                    type="text"
                    class="form-control"
                    v-model="data.country"
                    required
                  />
                  <!-- :placeholder="$t('labels.country')" -->
                </div>
              </div>
              <div class="col-sm-6 col-lg-4">
                <div class="form-group">
                  <label for="destination"
                    >{{ $t("labels.destination") }}
                    <span>{{ $t("required") }}</span>
                  </label>
                  <select
                    name="destination"
                    v-model="data.destination"
                    required
                    class="form-control"
                    id="destination"
                  >
                    <option value="airport">{{ $t("airport") }}</option>
                    <option value="seaport">{{ $t("seaport") }}</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4">
                <div class="form-group">
                  <label for="service"
                    >{{ $t("labels.service") }}
                    <span>{{ $t("required") }}</span>
                  </label>
                  <select
                    name="service"
                    v-model="data.service"
                    required
                    class="form-control"
                    id="service"
                  >
                    <option value="air">{{ $t("air") }}</option>
                    <option value="sea">{{ $t("sea") }}</option>
                    <option value="removal">{{ $t("removal") }}</option>
                    <option value="car">{{ $t("car") }}</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4">
                <div class="form-group">
                  <label for="type_of_service"
                    >{{ $t("labels.type_of_service") }}
                    <span>{{ $t("required") }}</span>
                  </label>
                  <select
                    name="type_of_service"
                    v-model="data.type_of_service"
                    required
                    class="form-control"
                    id="type_of_service"
                  >
                    <option value="door_to_port">{{
                      $t("door_to_port")
                    }}</option>
                    <option value="door_to_door">{{
                      $t("door_to_door")
                    }}</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4">
                <div class="form-group">
                  <label for="packaging"
                    >{{ $t("labels.packaging") }}
                    <span>{{ $t("required") }}</span>
                  </label>
                  <select
                    name="packaging"
                    v-model="data.packaging"
                    required
                    class="form-control"
                    id="packaging"
                  >
                    <option value="yes">{{ $t("yes") }}</option>
                    <option value="no">{{ $t("no") }}</option>
                  </select>
                </div>
              </div>

              <div class="col-sm-6 col-lg-4">
                <div class="form-group">
                  <label for="cargo_insurance"
                    >{{ $t("labels.cargo_insurance") }}
                    <span>{{ $t("required") }}</span>
                  </label>
                  <select
                    name="cargo_insurance"
                    v-model="data.cargo_insurance"
                    required
                    class="form-control"
                    id="cargo_insurance"
                  >
                    <option value="yes">{{ $t("yes") }}</option>
                    <option value="no">{{ $t("no") }}</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4">
                <div class="form-group">
                  <label for="value_of_goods"
                    >{{ $t("labels.value_of_goods") }}
                    <span>{{ $t("required") }}</span>
                  </label>
                  <input
                    id="value_of_goods"
                    type="number"
                    class="form-control"
                    v-model="data.value_of_goods"
                    required
                  />
                  <!-- :placeholder="$t('labels.value_of_goods')" -->
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="description_of_goods"
                    >{{ $t("labels.description_of_goods") }}
                    <span>{{ $t("required") }}</span>
                  </label>
                  <input
                    id="description_of_goods"
                    type="text"
                    class="form-control"
                    v-model="data.description_of_goods"
                    required
                  />
                  <!-- :placeholder="$t('labels.description_of_goods')" -->
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="delivry_address"
                    >{{ $t("labels.delivry_address") }}
                    <span>{{ $t("required") }}</span>
                  </label>
                  <input
                    id="delivry_address"
                    type="text"
                    class="form-control"
                    v-model="data.delivry_address"
                    required
                  />
                  <!-- :placeholder="$t('labels.delivry_address')" -->
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="address_uk"
                    >{{ $t("labels.address_uk") }}
                    <span>{{ $t("required") }}</span>
                  </label>
                  <!-- :placeholder="$t('labels.address_uk')" -->
                  <input
                    id="address_uk"
                    type="text"
                    class="form-control"
                    v-model="data.address_uk"
                    required
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group d-flex align-items-center">
                  <input
                    id="terms"
                    type="checkbox"
                    class="fs-1 m-0"
                    v-model="data.terms_and_conditions"
                    required
                  />
                  <label
                    for="terms"
                    :class="$i18n.locale == 'ar' ? 'me-2' : 'ms-2'"
                  >
                    {{ $t("labels.iHaveReadAndAgreedToThe") }}
                    <router-link to="/terms" class="me-1" target="_blank">{{
                      $t("labels.terms")
                    }}</router-link>
                    <bdi class="me-1" v-if="$i18n.locale == 'ar'">
                      {{ $t("labels.terms1") }}
                    </bdi>
                  </label>
                </div>
              </div>

              <div class="col-12 d-flex justify-content-between">
                <button
                  type="button"
                  @click="$emit('previous')"
                  class="btn col-12 text-center btn-primary"
                >
                  <span>{{ $t("buttons.previous") }}</span>
                </button>
                <button
                  type="submit"
                  class="btn col-12 text-center btn-primary"
                >
                  <span>{{ $t("buttons.send") }}</span>
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
  shipment_type: "",
  description_of_goods: "",
  shipment_size: "",
  weight: "",
  service: "",
  type_of_service: "",
  country: "",
  destination: "",
  packaging: "",
  value_of_goods: "",
  cargo_insurance: "",
  delivry_address: "",
  address_uk: "",
  terms_and_conditions: null,
});
const emit = defineEmits(["stepOne"]);

function submit() {
  emit("stepTwo", data);
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
    textarea,
    select {
      // border: none;
      appearance: auto;
      box-shadow: none;
      border-color: #182544;
      // border-bottom: 2px solid #1b6096;
      // border-radius: 0;
      background: transparent;
      transition: 0.3s;
      padding: 10px 20px;
      margin-bottom: 24px;
      color: #182544;
      width: 100%;
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
