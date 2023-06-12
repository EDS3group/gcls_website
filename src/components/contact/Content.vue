<template>
  <section class="contact-page-content">
    <div class="container">
      <div class="contact-container">
        <header>
          <p>{{ $t("headers.sayHello") }}</p>
          <h3>{{ $t("headers.contactUsAnyTimeYouNeedOurServices") }}</h3>
        </header>
        <div class="content">
          <div class="form">
            <Form />
          </div>
          <div class="contact-actions">
            <div class="inner-items">
              <div class="item">
                <div class="icon">
                  <i class="fa-solid fa-headphones-simple"></i>
                </div>
                <div class="content" v-if="settings">
                  <h3>{{ $t("headers.callCenter") }}</h3>
                  <p>{{ $t("headers.giveUsAFreeCall") }}</p>
                  <a :href="`tel:${settings.phone}`"
                    ><bdi>{{ settings.phone }}</bdi>
                  </a>
                </div>
              </div>
              <div class="item">
                <div class="icon">
                  <i class="fa-regular fa-clock"></i>
                </div>
                <div class="content">
                  <h3>{{ $t("headers.workingHours") }}</h3>

                  <div class="contacts">
                    <p v-if="$i18n.locale == 'en'">Sat-Thur 9AM-10PM</p>
                    <p v-if="$i18n.locale == 'ar'">
                      من السبت إلى الخميس
                      <br />
                      ٩ صباحاً - ١٠ مساءً
                    </p>
                    <!-- <p>Sat 9AM-3PM</p> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Form from "./Form.vue";
export default {
  props: ["settings"],
  components: { Form },
};
</script>

<style lang="scss">
.contact-page-content {
  padding-block: 60px;
  .contact-container {
    display: flex;
    flex-wrap: wrap;
    header {
      width: 100%;
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

    @media (min-width: 1280px) {
      header {
        text-align: end;
        padding-inline-end: 30px;
        width: 330px;
      }
      .content {
        flex: 1;
      }
    }
  }
}
</style>
