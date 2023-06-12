<template>
  <section class="book-page-content">
    <div class="container">
      <div class="book-container">
        <header>
          <!-- <p>{{ $t("headers.sayHello") }}</p> -->
          <h3>{{ $t("headers.bookOnline") }}</h3>
        </header>
        <div class="content w-100">
          <div class="form">
            <Form @stepOne="setStepOneData($event)" v-show="steps.step_one" />
            <StepTwo
              @previous="previous"
              @stepTwo="setStepTwoData($event)"
              v-show="steps.step_two"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import i18n from "@/i18n";
import Form from "./Form.vue";
import StepTwo from "./StepTwo.vue";
import { reactive, ref } from "vue";
import axios from "axios";
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster({ position: "bottom" });
const btnLoading = ref(false);
const data = reactive({
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  postcode: "",
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
});
const steps = reactive({
  step_one: true,
  step_two: false,
});

function previous() {
  steps.step_one = true;
  steps.step_two = false;
}

function setStepOneData(e) {
  data.first_name = e.first_name;
  data.last_name = e.last_name;
  data.email = e.email;
  data.phone = e.phone;
  data.address = e.address;
  data.city = e.city;
  data.postcode = e.postcode;
  steps.step_one = false;
  steps.step_two = true;
}
function setStepTwoData(e) {
  data.shipment_type = e.shipment_type;
  data.description_of_goods = e.description_of_goods;
  data.shipment_size = e.shipment_size;
  data.weight = e.weight;
  data.service = e.service;
  data.type_of_service = e.type_of_service;
  data.country = e.country;
  data.destination = e.destination;
  data.packaging = e.packaging;
  data.value_of_goods = e.value_of_goods;
  data.cargo_insurance = e.cargo_insurance;
  data.delivry_address = e.delivry_address;
  data.address_uk = e.address_uk;

  submit();
}
function resetdata() {
  data.name = "";
  data.email = "";
  data.phone = "";
  data.address = "";
  data.city = "";
  data.postcode = "";
  data.shipment_type = "";
  data.description_of_goods = "";
  data.shipment_size = "";
  data.weight = "";
  data.service = "";
  data.type_of_service = "";
  data.country = "";
  data.destination = "";
  data.packaging = "";
  data.value_of_goods = "";
  data.cargo_insurance = "";
  data.delivry_address = "";
  data.address_uk = "";
  steps.step_one = true;
  steps.step_two = false;
}

function submit() {
  btnLoading.value = true;
  const frmData = new FormData();
  frmData.append("first_name", data.first_name);
  frmData.append("last_name", data.last_name);
  frmData.append("phone", data.phone);
  frmData.append("email", data.email);
  frmData.append("address", data.address);
  frmData.append("city", data.city);
  frmData.append("postcode", data.postcode);
  frmData.append("shipment_type", data.shipment_type);
  frmData.append("description_of_goods", data.description_of_goods);
  frmData.append("shipment_size", data.shipment_size);
  frmData.append("weight", data.weight);
  frmData.append("service", data.service);
  frmData.append("type_of_service", data.type_of_service);
  frmData.append("country", data.country);
  frmData.append("destination", data.destination);
  frmData.append("packaging", data.packaging);
  frmData.append("value_of_goods", data.value_of_goods);
  frmData.append("cargo_insurance", data.cargo_insurance);
  frmData.append("delivry_address", data.delivry_address);
  frmData.append("address_uk", data.address_uk);

  axios
    .post("booking-service", frmData)
    .then(() => {
      btnLoading.value = false;
      toaster.success(i18n.global.t("yourApplicationHasBeenSentSuccessfully"));

      resetdata();
      location.reload();
      // window.scrollTo({
      //   top: 0,
      //   left: 0,
      //   behavior: "smooth",
      // });
    })
    .catch((err) => {
      btnLoading.value = false;
      toaster.error(err.response.data.message);
    });
}
</script>

<style lang="scss">
.book-page-content {
  padding-block: 60px;
  .book-container {
    display: flex;
    flex-wrap: wrap;
    header {
      width: 100%;
      max-width: 750px;
      margin-inline: auto;
      margin-bottom: 20px;
      p {
        color: $textColor1;
        text-transform: uppercase;
        margin-bottom: 8px;
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
          font-size: 30px;
          line-height: 40px;
        }
      }
    }
    .content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      > .form {
        flex: 1;
      }
      .contact-actions {
        width: 250px;
        .inner-items {
          .item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            &:not(:last-child) {
              margin-bottom: 20px;
            }
            .icon {
              background: $main_color;
              color: #fff;
              border-radius: 50%;
              width: 45px;
              height: 45px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 20px;
              transition: 0.3s;
              &:hover {
                transform: scale(1.1);
              }
              i {
                font-size: 28px;
              }
            }
            .content {
              flex-direction: column;
              align-items: center;
              justify-content: center;
              h3 {
                text-transform: uppercase;
                font-size: 22px;
                color: $textColor;
              }
              p {
                margin-bottom: 8px;
              }
              p,
              a {
                color: $textColor1;
                font-size: 14px;
                font-weight: 400;
                text-align: center;
              }
              a {
                text-decoration: none;
              }
            }
          }
        }
        @media (max-width: 992px) {
          margin-top: 30px;
        }
      }
    }

    // @media (min-width: 1280px) {
    //   header {
    //     text-align: end;
    //     padding-inline-end: 30px;
    //     // width: 330px;
    //   }
    //   .content {
    //     flex: 1;
    //   }
    // }
  }
}
</style>
