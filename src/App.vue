<template>
  <Header />
  <div class="app_wrapper">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <Footer v-if="!loading" :aboutUs="aboutUs" />
  <GoTop />
  <WhatsApp />
</template>
<script>
import GoTop from "@/components/GoTop.vue";
import Footer from "@/components/Footer.vue";
import Header from "./components/Header.vue";
import WhatsApp from "./components/WhatsApp.vue";

export default {
  components: { Footer, Header, GoTop, WhatsApp },
  data() {
    return {
      loading: false,
      general: null,
      aboutUs: null,
    };
  },
  mounted() {
    this.$store.dispatch("getMainServices");
    this.$store.dispatch("getMainSettings");
    // this.getLists();
    if (this.$i18n.locale == "ar") {
      document.body.dir = "rtl";
      document.title = "تحدي الخليج";
    } else {
      document.title = "GCLS";
    }
  },
  methods: {
    getLists() {
      this.loading = true;
      this.axios
        .get("get-about-us")
        .then((data) => {
          this.aboutUs = data.data.data[0];
          this.loading = false;
        })
        .catch(() => (this.loading = false));
    },
  },
};
</script>

<style lang="scss">
.app_wrapper {
  min-height: 400px;
}
h3.title {
  position: relative;
  margin-bottom: 30px;
  font-size: 24px;
  text-align: center;
  color: #182544;
  &::before {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background-color: #206f00;
  }
  @media (min-width: 768px) {
    font-size: 35px;
    margin-bottom: 50px;
  }
}
h2.title {
  position: relative;
  margin-bottom: 30px;
  color: #182544;
  &::before {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: #206f00;
  }
}

body[dir="rtl"] {
  h2.title {
    &::before {
      left: unset;
      right: 0;
    }
  }
}
.btn-primary {
  background: $main_color !important;
  border: none !important;
  font-size: 16px;
  line-height: 1 !important;
  padding: 10px 30px !important;
  box-shadow: none !important;
}
.btn-primary:hover {
  background: #f8ac19 !important;
}

.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
  transform: translateY(0);
}
.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 0.3s ease;
}
.fade-in-enter-to,
.fade-in-leave {
  opacity: 1;
  transform: translateY(-30);
}
</style>
