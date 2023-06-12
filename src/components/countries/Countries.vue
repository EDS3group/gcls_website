<template>
  <section class="country-section">
    <loader v-if="loading" />
    <div class="container">
      <div class="country-content">
        <header>
          <div class="text">
            <p>{{ $t("headers.yourCountry") }}</p>
            <h3>
              {{ $t("headers.getShippingDetailsForTheCountryYouWantToShipTo") }}
            </h3>
          </div>
        </header>
        <div class="content">
          <div class="row w-100">
            <div
              class="col-4 col-lg-3 mb-3"
              v-for="country in countries"
              :key="country.id"
            >
              <country-card :country="country" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CountryCard from "../ui/CountryCard.vue";
export default {
  components: { CountryCard },
  data() {
    return {
      countries: null,
      loading: false,
    };
  },
  methods: {
    getCountries() {
      this.loading = true;
      this.axios
        .get("get-countries")
        .then((res) => {
          this.loading = false;
          this.countries = res.data.data;
        })
        .catch(() => (this.loading = false));
    },
  },
  mounted() {
    this.getCountries();
  },
};
</script>

<style lang="scss">
.country-section {
  background-color: #fff;

  padding-block: 60px;
  .country-content {
    display: flex;
    flex-wrap: wrap;
    header {
      margin-bottom: 20px;

      p {
        color: $textColor;

        text-transform: uppercase;
        margin-bottom: 8px;
      }
      h3 {
        color: $textColor1;
        text-transform: uppercase;
      }
    }

    .content {
      width: 100%;
    }
    @media (min-width: 992px) {
      header {
        width: 250px;
        margin-inline-end: 20px;
        p {
          font-size: 18px;
        }
        h3 {
          font-size: 24px;
          line-height: 30px;
        }
      }
      .content {
        flex: 1;
      }
    }

    .service {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    @media (min-width: 1280px) {
      header {
        text-align: end;
        padding-inline-end: 30px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .content {
        flex: 1;
      }
    }
  }
}
</style>
