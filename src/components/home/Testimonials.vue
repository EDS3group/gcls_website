<template>
  <section class="testimonials">
    <div class="container">
      <div class="testimonials-content">
        <header>
          <p>{{ $t("headers.ourClients") }}</p>
          <h3>{{ $t("headers.clientsThatTrustOurServices") }}</h3>
        </header>
        <div class="content">
          <div class="testimonial">
            <TestimonialsCard
              :item="testimonial"
              v-for="testimonial in testimonials"
              :key="testimonial.id"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TestimonialsCard from "../ui/TestimonialsCard";

const testimonials = [
  {
    id: "1",
    ar: {
      name: "محمود كميري",
      desc:
        "تعاملت مع شركة تحدي الخليج بشحنة من الصين الي ميناء الدمام اشكر دقة المواعيد وحسن التعامل من قسم العمليات بالشركة.",
    },
    en: {
      name: "Mahmoud Kamiri",
      desc:
        "I dealt with the Gulf Challenge Company with a shipment from China to the port of Dammam. I thank the punctuality and good dealings of the operations department of the company.",
    },
  },
  {
    id: "2",
    ar: {
      name: "مهندس أحمد توفيق",
      desc: "ماشاءالله خدمات ممتازة ودقة في المواعيد",
      job: "تكنولوجيا العصر",
    },
    en: {
      name: "Engineer Ahmed Tawfiq",
      desc: "Mashallah excellent services and punctuality",
      job: "Modern Technology",
    },
  },
  {
    id: "3",
    ar: {
      name: "فهد الكريفي",
      desc:
        "شحنة اغراض من لندن الي الرياض وصلت في وقت وجيز كل الشكر لشركة تحدي الخليج وشركة تانقو في مانشستر",
    },
    en: {
      name: "Fahad Al-Kuraifi",
      desc:
        "I shipped personal items from London to Riyadh, it was arrived in a short time. All thanks to the Gulf Challenge Company and Tango Company in Manchester",
    },
  },
  {
    id: "4",
    ar: {
      name: "أبراهيم شوك",
      desc:
        "كل الشكر لشركة تحدي الخليج اللوجستية لتوصيل اغراضي كاملة في المواعيد الي السودان",
    },
    en: {
      name: "Ibrahim Shock",
      desc:
        "All thanks to the Gulf Challenge Logistics Company for delivering my full items on time to Sudan.",
    },
  },
];
</script>

<style lang="scss">
.testimonials {
  background-image: url("@/assets/media/images/ourClients.jpg");
  background-position: 50% 4.97372px;
  background-attachment: fixed;
  background-size: cover;
  padding-block: 60px;
  .testimonials-content {
    display: flex;
    flex-wrap: wrap;
    header {
      width: 100%;
      margin-bottom: 20px;
      p {
        color: #fff;
        text-transform: uppercase;
        margin-bottom: 8px;
      }
      h3 {
        color: #fff;
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
      > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .testimonial {
          @media (min-width: 768px) {
            width: calc(100% / 2 - 10px);
          }
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
}
</style>
