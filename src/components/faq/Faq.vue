<template>
  <section class="faq-section">
    <loader v-if="loading" />
    <div class="container" v-else>
      <div class="services-content">
        <div class="row w-100">
          <div class="col-md-6 col-lg-4">
            <header>
              <div class="text">
                <p>{{ $t("headers.allTheQuestions") }}</p>
                <h3>{{ $t("headers.mostFrequentQuestions") }}</h3>
              </div>
            </header>
          </div>
          <div class="col-md-6 col-lg-8">
            <div class="accordion accordion-flush" id="faqAccordian">
              <div class="accordion-item" v-for="faq in faqs" :key="faq.id">
                <h2 class="accordion-header" :id="`flush-heading${faq.id}`">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#flush-collapse${faq.id}`"
                    aria-expanded="false"
                    :aria-controls="`flush-collapse${faq.id}`"
                  >
                    <bdi>
                      {{ faq.question }}
                    </bdi>
                  </button>
                </h2>
                <div
                  :id="`flush-collapse${faq.id}`"
                  class="accordion-collapse collapse"
                  :aria-labelledby="`flush-heading${faq.id}`"
                  data-bs-parent="#faqAccordian"
                >
                  <div class="accordion-body">
                    <bdi>
                      {{ faq.answer }}
                    </bdi>
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
export default {
  data() {
    return {
      faqs: null,
      loading: false,
    };
  },
  methods: {
    getFaqs() {
      this.loading = true;
      this.axios
        .get("get-question-answer")
        .then((res) => {
          this.loading = false;
          this.faqs = res.data.data;
        })
        .catch(() => (this.loading = false));
    },
  },
  mounted() {
    this.getFaqs();
  },
};
</script>

<style lang="scss">
.faq-section {
  background-color: #fff;
  min-height: 400px;
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
  .accordion {
    button {
      text-align: left;
      font-size: 15px;
      font-weight: 600;
      color: #7e7e7e;
      background: rgba(0, 0, 0, 0.05);
      border-bottom: 1px solid #fff;
      outline: none !important;
      box-shadow: none !important;
      flex-direction: row-reverse;
      justify-content: flex-end;
      &::after {
        margin: 0;
        margin-inline-end: 10px;
      }
      &:not(.collapsed) {
        color: $main_color;
      }
    }
    .accordion-body {
      padding: 20px;
      color: #7e7e7e;
      box-shadow: 0 1px 2px rgb(0 0 0 / 25%);
      margin: 0 0 20px;
      border-bottom-right-radius: 2px;
      border-bottom-left-radius: 2px;
    }
  }
}
</style>
