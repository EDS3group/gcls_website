<template>
  <section class="services-section">
    <div class="container">
      <div class="services-content">
        <div class="row w-100">
          <div class="col-sm-6 col-lg-3">
            <header>
              <div class="text">
                <p>{{ $t("headers.ourServices") }}</p>
                <h3>{{ $t("headers.whatDoWeOffer") }}</h3>
                <div class="testimonial">
                  <blockquote>
                    <p v-if="$i18n.locale == 'en'">
                      The Gulf Challenge Logistics Services (GCLS) provides
                      distinguished and integrated services
                    </p>
                    <p v-else>
                      تقدم شركة تحدي الخليج للخدمات اللوجستية خدمات مميزة
                      ومتكاملة
                    </p>
                  </blockquote>
                </div>
              </div>
            </header>
          </div>
          <div
            class="col-sm-6 col-lg-3 mb-4"
            v-for="service in mainServices"
            :key="service.id"
          >
            <service-card :service="service" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ServiceCard from "../ui/ServiceCard.vue";
export default {
  components: { ServiceCard },
  computed: {
    mainServices() {
      return this.$store.getters.mainServices;
    },
  },
};
</script>

<style lang="scss">
.services-section {
  background-color: #fff;

  padding-block: 60px;
  .services-content {
    display: flex;
    flex-wrap: wrap;
    header {
      margin-bottom: 20px;
      .testimonial {
        padding-top: 40px;
        blockquote {
          margin: 0 0 30px;
          font-size: 1em;
          font-weight: 400;
          line-height: 1.7;
          display: flex;
          align-items: flex-start;
          &::before {
            content: "\f10d";
            font-family: FontAwesome;
            display: block;
            font-size: 50px;
            color: $textColor1;
            margin-inline-end: 20px;
            opacity: 0.2;
          }
          p {
            margin: 0;
            color: $textColor;
          }
        }
      }
      p {
        color: $textColor;

        text-transform: uppercase;
        margin-bottom: 8px;
      }
      h3 {
        color: $textColor1;
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
