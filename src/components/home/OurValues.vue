<template>
  <section class="our-values">
    <div class="container">
      <div class="values-content">
        <header>
          <p>{{ $t("headers.ourCoreValues") }}</p>
          <!-- <h3>{{ $t("headers.ourSkillsAndExpertise") }}</h3> -->
        </header>
        <div class="content">
          <div class="testimonial">
            <blockquote>
              <p v-if="$i18n.locale == 'en'">
                Our values are customer orientation, commitments, trust,
                openness, integrity, teamwork, excellence, communication &
                continuous improvement.
              </p>
              <p v-if="$i18n.locale == 'ar'">
                قيمنا هي توجه العميل و الالتزام، والثقة ، والانفتاح ، والنزاهة ،
                والعمل الجماعي ، والتميز ، والتواصل ، والتحسين المستمر.
              </p>
            </blockquote>
          </div>
          <div class="img-wrapper">
            <img
              class="img-fluid"
              src="@/assets/media/images/logo/logo.png"
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div class="values" v-if="$i18n.locale == 'ar'">
        <div class="value">
          <h3 class="number">623</h3>
          <p class="title">خدمات الشحن الجوي</p>
          <!-- <p class="text">
            Praesent eu rhoncus nibh. Quisque tincidunt, nisi in venenatis
            commodo, neque quam pharetra dolor, nec lacinia urna quam.
          </p> -->
        </div>
        <div class="value">
          <h3 class="number">983</h3>
          <p class="title">خدمات الشحن البحري</p>
        </div>
        <div class="value">
          <h3 class="number">72</h3>
          <p class="title">خدمات النقل البري</p>
        </div>
        <div class="value">
          <h3 class="number">354</h3>
          <p class="title">خدمات التسوق والشحن</p>
        </div>
        <div class="value">
          <h3 class="number">64</h3>
          <p class="title">خدمات التخليص الجمركي</p>
        </div>
        <div class="value">
          <h3 class="number">43 أسرة</h3>
          <p class="title">الخدمات الأسرية المتكاملة لأوروبا</p>
        </div>
      </div>
      <div class="values" v-if="$i18n.locale == 'en'">
        <div class="value">
          <h3 class="number">623</h3>
          <p class="title">AIR FREIGHT SERVICES</p>
        </div>
        <div class="value">
          <h3 class="number">983</h3>
          <p class="title">SEA FREIGHT SERVICES</p>
        </div>
        <div class="value">
          <h3 class="number">72</h3>
          <p class="title">LAND TRANSPORT SERVICES</p>
        </div>
        <div class="value">
          <h3 class="number">354</h3>
          <p class="title">SHOPPING AND SHIPPING SERVICES</p>
        </div>
        <div class="value">
          <h3 class="number">64</h3>
          <p class="title">CUSTOMS CLEARANCE SERVICES</p>
        </div>
        <div class="value">
          <h3 class="number">43 Families</h3>
          <p class="title">FULL PACKAGE FAMILY SERVICES TO EUROPE</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
.our-values {
  background: #fff;

  padding-block: 60px;
  .values-content {
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
      justify-content: space-between;
      flex-wrap: wrap;
      .testimonial {
        flex: 1;
        padding: 0px 20px 32px;

        blockquote {
          margin: 0 0 30px;
          font-size: 1.2em;
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

      @media (min-width: 768px) {
        .testimonial {
          width: calc(100% / 2 - 10px);
        }
        .img-wrapper {
          width: calc(100% / 2 - 10px);
        }
        .img-wrapper {
          max-width: 350px;
          transform: translateY(-120px);
        }
      }
    }

    @media (min-width: 1280px) {
      header {
        text-align: end;
        padding-inline-end: 30px;
        width: 320px;
      }
      .content {
        flex: 1;
      }
    }
  }
  .values {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .value {
      text-align: center;
      margin-bottom: 30px;
      width: 100%;
      margin-bottom: 2rem;
      h3 {
        color: $main_color;
        font-size: 40px;
        transition: all 0.3s ease-in-out;
        margin-bottom: 15px;
      }
      p {
        font-size: 15px;
        line-height: 1.6;
        margin: 0;

        &.title {
          color: $textColor;
          font-weight: 500;
          margin-bottom: 15px;
        }
        &.text {
          color: $textColor1;
        }
      }
      @media (min-width: 768px) {
        width: calc(100% / 2 - 20px);
      }
      @media (min-width: 1280px) {
        width: calc(100% / 4 - 20px);
      }
    }
  }
}
</style>
