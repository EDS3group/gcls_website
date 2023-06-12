<template>
  <div class="top-header" v-if="mainSettings">
    <div class="container">
      <div class="top-header-content">
        <div class="contact-info">
          <ul class="list-unstyled">
            <li v-if="mainSettings.email">
              <a :href="`mailto:${mainSettings.email}`"
                ><i class="fa-regular fa-envelope"></i
                >{{ mainSettings.email }}</a
              >
            </li>
            <li v-if="mainSettings.phone">
              <a :href="`tel:${mainSettings.phone}`"
                ><i class="fa-solid fa-square-phone"></i
                ><bdi>{{ mainSettings.phone }}</bdi>
              </a>
            </li>
          </ul>
        </div>
        <div class="social">
          <ul class="list-unstyled">
            <li v-if="mainSettings.facebook">
              <a :href="mainSettings.facebook" target="_blank"
                ><i class="fa-brands fa-facebook"></i
              ></a>
            </li>
            <li v-if="mainSettings.twitter">
              <a :href="mainSettings.twitter" target="_blank"
                ><i class="fa-brands fa-twitter"></i
              ></a>
            </li>
            <li v-if="mainSettings.instagram">
              <a :href="mainSettings.instagram" target="_blank"
                ><i class="fa-brands fa-instagram"></i
              ></a>
            </li>
            <li v-if="mainSettings.snapchat">
              <a :href="mainSettings.snapchat" target="_blank"
                ><i class="fa-brands fa-snapchat"></i
              ></a>
            </li>
            <li v-if="mainSettings.tiktok">
              <a :href="mainSettings.tiktok" target="_blank"
                ><i class="fa-brands fa-tiktok"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    :class="{ scrolled: scrolled }"
  >
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <!-- <img
          v-if="scrolled"
          v-lazy="require(`@/assets/media/images/logo/logo.png`)"
          class="img-fluid"
          alt="counter-logo"
        /> -->
        <!-- v-else -->
        <img
          v-lazy="require(`@/assets/media/images/logo/logo.png`)"
          class="img-fluid"
          alt="counter-logo"
        />
      </router-link>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav p-0 me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              {{ $t("nav.home") }}
            </router-link>
          </li>
          <li class="nav-item">
            <a href="/about-us" class="nav-link">
              {{ $t("nav.aboutUs") }}
            </a>
          </li>
          <li class="nav-item dropdown">
            <router-link to="/services" class="nav-link">
              {{ $t("nav.services") }}
            </router-link>
            <div class="menu_dropdown">
              <ul class="list-unstyled">
                <li v-for="service in mainServices" :key="service.id">
                  <router-link
                    :to="`/services/${service.id}/main`"
                    class="nav-link"
                  >
                    {{ service.name }}
                  </router-link>
                  <div class="menu_dropdown sub">
                    <ul class="list-unstyled">
                      <li v-for="sub in service.sub_section" :key="sub.id">
                        <router-link
                          :to="`/services/${sub.id}/sub`"
                          class="nav-link"
                        >
                          {{ sub[`name_${$i18n.locale}`] }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a href="/countries" class="nav-link">
              {{ $t("nav.yourCountry") }}
            </a>
          </li>
          <li class="nav-item">
            <a href="/book-online" class="nav-link">
              {{ $t("nav.bookOnline") }}
            </a>
          </li>

          <li class="nav-item">
            <router-link to="/contact-us" class="nav-link">
              {{ $t("nav.contactUs") }}
            </router-link>
          </li>
          <li class="nav-item">
            <a
              href="https://linktr.ee/gclsonline"
              target="_blank"
              class="nav-link"
            >
              {{ $t("nav.bcqr") }}
            </a>
          </li>
        </ul>
      </div>
      <div class="d-flex">
        <button
          class="navbar-toggler text-white d-block"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i class="fa-solid fa-bars"></i>
        </button>
        <button class="btn-locale" @click="changeLocale">
          <i class="fa-solid fa-globe"></i>
          <span>{{ $t(`locale.${$i18n.locale}`) }}</span>
        </button>
      </div>
    </div>
  </nav>
  <teleport to="body">
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <router-link to="/" class="navbar-brand d-block text-center">
              <img
                v-lazy="require(`@/assets/media/images/logo/logo.png`)"
                width="200"
                alt="counter-logo"
              />
            </router-link>
            <div class="">
              <ul class="navbar-nav p-0">
                <li class="nav-item">
                  <router-link to="/" class="nav-link">
                    {{ $t("nav.home") }}
                  </router-link>
                </li>
                <li class="nav-item">
                  <a href="/about-us" class="nav-link">
                    {{ $t("nav.aboutUs") }}
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/services" class="nav-link">
                    {{ $t("nav.services") }}
                  </a>
                </li>

                <li class="nav-item">
                  <a href="/countries" class="nav-link">
                    {{ $t("nav.yourCountry") }}
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/book-online" class="nav-link">
                    {{ $t("nav.bookOnline") }}
                  </a>
                </li>

                <li class="nav-item">
                  <router-link to="/contact-us" class="nav-link">
                    {{ $t("nav.contactUs") }}
                  </router-link>
                </li>
                <li class="nav-item">
                  <a
                    href="https://linktr.ee/gclsonline"
                    class="nav-link"
                    target="_blank"
                  >
                    {{ $t("nav.bcqr") }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="info">
              <h2 class="title">{{ $t("contactInfo") }}</h2>
              <div class="contact">
                <a :href="`mailto:${mainSettings.email}`" class="link ml-4">
                  <i class="fa-solid fa-envelope"></i>
                  {{ mainSettings.email }}
                </a>
                <a :href="`tel:${mainSettings.phone}`" class="link">
                  <i class="fa-solid fa-phone-flip"></i>
                  <bdi>
                    {{ mainSettings.phone }}
                  </bdi>
                </a>
              </div>
              <div>
                <ul class="list-unstyled p-0 d-flex social">
                  <li v-if="mainSettings.facebook">
                    <a :href="mainSettings.facebook" target="_blank"
                      ><i class="fa-brands fa-facebook"></i
                    ></a>
                  </li>
                  <li v-if="mainSettings.twitter">
                    <a :href="mainSettings.twitter" target="_blank"
                      ><i class="fa-brands fa-twitter"></i
                    ></a>
                  </li>
                  <li v-if="mainSettings.instagram">
                    <a :href="mainSettings.instagram" target="_blank"
                      ><i class="fa-brands fa-instagram"></i
                    ></a>
                  </li>
                  <li v-if="mainSettings.snapchat">
                    <a :href="mainSettings.snapchat" target="_blank"
                      ><i class="fa-brands fa-snapchat"></i
                    ></a>
                  </li>
                  <li v-if="mainSettings.tiktok">
                    <a :href="mainSettings.tiktok" target="_blank"
                      ><i class="fa-brands fa-tiktok"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    });
  },
  computed: {
    mainServices() {
      return this.$store.getters.mainServices;
    },
    mainSettings() {
      return this.$store.getters.mainSettings;
    },
  },
  methods: {
    changeLocale() {
      let lang = this.$i18n.locale == "ar" ? "en" : "ar";

      localStorage.setItem("GCLS-lang", lang);
      setTimeout(() => window.location.reload(), 300);
    },
  },
};
</script>

<style lang="scss">
.top-header {
  position: absolute !important;
  top: 0;
  height: 45px;
  left: 0;
  width: 100%;
  z-index: 12;
  .top-header-content {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    .social {
      ul {
        display: flex;
        padding: 0;
        align-items: center;
        height: 45px;
        margin-bottom: 0px;
        li {
          &:not(:first-child) {
            margin-inline-start: 10px;
          }
          a {
            text-decoration: none;
            color: #fff;
            i {
              margin-inline-end: 5px;
            }
          }
        }
      }
    }
  }
  .contact-info {
    ul {
      padding: 0;
      display: flex;
      align-items: center;
      height: 45px;
      margin-bottom: 0px;
      li {
        &:not(:last-child) {
          margin-inline-end: 10px;
        }
        a {
          text-decoration: none;
          color: #fff;
          i {
            margin-inline-end: 5px;
          }
        }
      }
    }
  }
  display: none;
  @media (min-width: 992px) {
    display: flex;
  }
}
.navbar {
  animation: scrolled-up 0.5s forwards linear;
  position: fixed !important;
  top: 0px;
  @media (min-width: 992px) {
    top: 40px;
  }
  left: 0;
  width: 100%;
  background: transparent;
  z-index: 10;
  .navbar-brand {
    margin: 0;
    margin-inline-end: 5px;
    width: 100px;
    // img {
    //   filter: brightness(0) invert(1);
    // }
  }
  .nav-item {
    .nav-link {
      color: #fff;
      margin-inline: 5px;
      font-weight: 400;
      position: relative;
      padding: 10px 15px;
      font-size: 18px;
      position: relative;
      width: fit-content;
      text-transform: capitalize;
      &::before {
        content: "";
        width: 0;
        height: 2px;
        background: #fff;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        transition: 0.3s;
      }
      &:hover {
        &::before {
          width: calc(100% - 20px);
        }
      }
      &.router-link-active {
        &::before {
          width: calc(100% - 20px);
          color: $main_color !important;
        }
      }
    }
  }
  .navbar-toggler {
    border: none !important;
    box-shadow: 0 !important;
    display: none !important;
    @media (max-width: 992px) {
      display: block !important;
    }
    i {
      font-size: 30px;
    }
  }
  &.scrolled {
    padding: 0;
    box-shadow: 0 0 20px -10px rgb(0 0 0 / 80%);
    animation: scrolled-down 0.3s forwards linear;
    background: rgba(255, 255, 255, 0.9);
    top: 0;
    .nav-item {
      .nav-link {
        color: $main_color;

        &::before {
          background: $main_color;
        }

        &.router-link-active {
          &::before {
            width: calc(100% - 20px);
            color: #182544 !important;
          }
        }
      }
    }
    .navbar-toggler {
      border: none !important;
      box-shadow: 0 !important;
      i {
        color: $main_color;
        font-size: 30px;
      }
    }
    .btn-locale {
      color: $main_color;
    }
  }
  .dropdown {
    position: relative;
    a {
      &:hover {
        &::before {
          content: unset;
        }
      }
      &.router-link-active {
        &::before {
          width: 0% !important;
        }
      }
    }
    .menu_dropdown {
      background: rgba(0, 0, 0, 0.95);
      position: absolute;
      top: 100%;
      border-radius: 2px;
      min-width: 150px;
      transform: translateY(-20px);
      opacity: 0;
      visibility: hidden;
      transition: 0.5s ease-in-out;
      ul {
        padding: 0;
        li {
          position: relative;
          &::before {
            content: "";
            width: 0px;
            height: 100%;
            background: $main_color;
            position: absolute;
            transition: 0.3s;
          }
          a {
            white-space: nowrap;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            color: #fff !important;
            padding: 10px 15px;
            font-size: 14px;
            transition: 0.3s;
            display: block;
            width: 100%;
          }
          .menu_dropdown {
            left: 100%;
            top: 0;
            transform: translateX(-10px);
            opacity: 0;
            visibility: hidden;
            transition: 0.5s ease-in-out;
          }
          &:hover {
            > a {
              color: rgba(255, 255, 255, 0.6);
              transform: translateX(4px);
            }
            &::before {
              width: 4px;
            }
            .menu_dropdown {
              transform: unset;
              opacity: 1;
              visibility: visible;
            }
          }
        }
      }
    }
    &:hover {
      > .menu_dropdown {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
    }
  }
}
.btn-locale {
  @include buttonReaset();
  color: #fff;
  font-size: 22px;
  span {
    margin-inline-start: 5px;
  }
}
.navbar-toggler {
  box-shadow: none !important;
}

.modal-dialog {
  margin: 0 !important;

  height: 100% !important;
  .modal-header {
    border: 0;
  }
  .modal-content {
    padding-inline: 20px;
    border: none;
    border-radius: 0;
    height: 100vh;
    overflow-y: auto;
  }
  ul {
    margin-top: 30px;
    a.router-link-active.router-link-exact-active {
      color: $second_color !important;
    }
    a:hover {
      color: $second_color !important;
    }
  }
  .info {
    h2.title {
      position: relative;
      font-size: 18px !important;
      margin-bottom: 40px !important;
      color: $main_color;
      margin-top: 30px;
    }
    .contact {
      a {
        padding: 5px 0;
        display: block;
        color: $main_color !important;
        i {
          margin-inline-end: 6px;
        }
      }
    }
    .social {
      justify-content: flex-start !important;
      a {
        background: $main_color !important;
        display: inline-flex;
        margin-inline: 5px;
        border-radius: 50%;
        color: #fff !important;
        width: 40px;
        height: 40px;
        i {
          font-size: 18px !important;
        }
        &:hover {
          background: $second_color !important;
          color: #fff !important;
        }
      }
    }
  }
}
.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(-100%, -0) !important;
}
.modal.fade.show .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0%, -0) !important;
}
body[dir="rtl"] {
  .modal.fade .modal-dialog {
    transition: transform 0.3s ease-out;
    transform: translate(100%, 0) !important;
  }
  .modal.fade.show .modal-dialog {
    transition: transform 0.3s ease-out;
    transform: translate(0%, -0) !important;
  }
  .navbar {
    .dropdown {
      .menu_dropdown {
        li {
          .menu_dropdown {
            left: unset;
            right: 100%;

            transform: translateX(10px);
          }
          &:hover {
            .menu_dropdown {
              transform: unset;
            }
          }
        }
      }
    }
  }
}
.black-whilte {
  filter: brightness(0) invert(1);
}
@keyframes scrolled-up {
  0% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes scrolled-down {
  0% {
    opacity: 0.5;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
