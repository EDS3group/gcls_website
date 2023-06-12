<template>
  <section class="services">
    <div class="container">
      <div class="services-content">
        <header>
          <div class="text">
            <p>{{ $t("headers.ourServices") }}</p>
            <h3>{{ $t("headers.whatWeCanDoForYou") }}</h3>
          </div>
          <div class="img-wrapper">
            <img
              class="img-fluid"
              src="@/assets/media/images/truck_green.png"
              alt="truck_green"
            />
          </div>
        </header>
        <div class="content w-100">
          <div class="service" v-if="mainServices">
            <div
              class="service-card"
              v-for="(service, index) in mainServices"
              :key="service.id"
            >
              <div class="icon">
                <i class="fa-solid fa-plane" v-if="index == 0"></i>
                <img
                  v-else
                  :src="
                    require(`@/assets/media/images/services/${index + 1}.png`)
                  "
                  width="60"
                  :alt="service.name"
                />
              </div>
              <div class="text">
                <h5 class="title">
                  {{ service.name }}
                </h5>
                <div class="desc" v-html="service.title"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    mainServices() {
      return this.$store.getters.mainServices;
    },
  },
};
</script>

<style lang="scss">
.services {
  background-color: #fff;
  background-image: url("@/assets/media/images/Transparent-background-with-dots.png");
  background-position: 50% 4.97372px;
  background-size: cover;
  padding-block: 60px;
  .services-content {
    display: flex;
    flex-wrap: wrap;
    header {
      width: 100%;
      margin-bottom: 20px;
      .img-wrapper {
        display: none;
        @media (min-width: 1280px) {
          display: block;
          transform: translateY(120px);
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

      .service-card {
        margin-bottom: 20px;
        padding: 40px 20px;
        background-color: #fff;
        -webkit-box-shadow: 0 1px 2px rgb(0 0 0 / 25%),
          0 -1px 1px rgb(0 0 0 / 13%);

        box-shadow: 0 1px 2px rgb(0 0 0 / 25%), 0 -1px 1px rgb(0 0 0 / 13%);

        display: flex;
        flex-direction: row;
        .icon {
          color: $main_color;
          margin-inline-end: 20px;
        }
        .text {
          h5 {
            color: $textColor;
            text-transform: uppercase;
          }
          p {
            color: $textColor1;
            margin: 0;
            font-weight: 400;
            line-height: 1.7;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            overflow: hidden;
            -webkit-box-orient: vertical;
          }
        }
        @media (min-width: 768px) {
          width: calc(100% / 2 - 10px);
        }
      }
    }
    @media (min-width: 1280px) {
      header {
        text-align: end;
        padding-inline-end: 30px;
        width: 350px;
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
