import { createRouter, createWebHistory } from "vue-router";
import i18n from "@/i18n";
const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: i18n.global.t("nav.home"),
    },
    component: () => import("@/views/Home.vue"),
  },

  {
    path: "/about",
    name: "about",
    meta: {
      title: i18n.global.t("nav.aboutUs"),
    },
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/faq",
    name: "faq",
    meta: {
      title: i18n.global.t("nav.faq"),
    },
    component: () => import("@/views/Faq.vue"),
  },
  {
    path: "/bcqr",
    name: "bcqr",

    component: () => import("@/views/Bcqr.vue"),
  },
  {
    path: "/book-online",
    name: "book-online",
    meta: {
      title: i18n.global.t("nav.bookOnline"),
    },
    component: () => import("@/views/BookNow.vue"),
  },
  {
    path: "/services",
    props: true,
    meta: {
      title: i18n.global.t("nav.services"),
    },
    component: () => import("@/views/services/Services.vue"),
    children: [
      {
        path: ":id/:slug",
        name: "service",
        props: true,
        component: () => import("@/views/services/_id/index.vue"),
      },
    ],
  },
  {
    path: "/countries",
    props: true,
    component: () => import("@/views/countries/Countries.vue"),
    meta: {
      title: i18n.global.t("nav.countries"),
    },
    children: [
      {
        path: ":id",
        name: "country",
        props: true,
        component: () => import("@/views/countries/_id/index.vue"),
      },
    ],
  },
  {
    path: "/terms",
    name: "terms",
    meta: {
      title: i18n.global.t("nav.terms"),
    },
    component: () => import("@/views/Terms.vue"),
  },
  {
    path: "/about-us",
    name: "about-us",
    meta: {
      title: i18n.global.t("nav.aboutUs"),
    },
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/privacy",
    name: "privacy",
    meta: {
      title: i18n.global.t("nav.privacy"),
    },
    component: () => import("@/views/Privacy.vue"),
  },

  {
    path: "/contact-us",
    name: "contact-us",
    meta: {
      title: i18n.global.t("nav.contactUs"),
    },
    component: () => import("@/views/Contact.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    meta: {
      title: "404",
    },
    component: () => import("@/views/PageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${i18n.global.t("GCLS")} | ${to.meta.title}`;
  next();
});

export default router;
