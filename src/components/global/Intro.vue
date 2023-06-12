<template>
  <section
    class="page-intro"
    :style="`background:url(${item.image})`"
    v-if="item"
  >
    <div class="container">
      <div class="content">
        <div class="text">
          <p class="title" v-if="item.head_title">{{ item.head_title }}</p>
          <h1 class="dash" v-if="item.name">{{ item.name }}</h1>
          <!-- <p class="desc">
            {{ item.title }}
          </p> -->
        </div>
        <div class="actions" v-if="links">
          <router-link
            v-for="(link, index) in links"
            :key="index"
            :to="link.link"
            class="base-btn d-inline-flex"
          >
            <i :class="link.icon"></i>
            {{ $t(link.name) }}</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["item", "links"],
};
</script>

<style lang="scss">
.page-intro {
  background: url("@/assets/media/images/sliders/3.jpg");
  background-position: 50% -50px !important;
  background-size: cover !important;
  background-attachment: fixed;
  padding-top: 180px;
  padding-bottom: 120px;
  .content {
    .text {
      max-width: 800px;
      margin-bottom: 20px;
      .dash {
        &::after {
          margin: 0 !important;
          margin-block: 10px;
          margin-inline-end: auto;
        }
      }
      p {
        font-size: 18px;
        line-height: 1.2;
        margin: 0;
        text-align: start;
        color: #fff !important;
        font-weight: 400 !important;
      }
      h1 {
        font-size: 40px;
        margin: 0;
        margin-block: 10px;
        text-align: start;
        line-height: 1;
        text-transform: uppercase;
        color: #fff !important;
      }
      @media (min-width: 992px) {
        p {
          font-size: 21px;
          line-height: 40px;
        }
      }
    }
    .actions {
      padding-top: 20px;
      a {
        &:first-child {
          margin-inline-end: 20px;
        }
      }
    }
  }
}
</style>
