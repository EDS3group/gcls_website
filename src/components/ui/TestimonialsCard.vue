<template>
  <div class="testimonial">
    <blockquote>
      <p>
        {{ item[$i18n.locale].desc }}
      </p>
    </blockquote>

    <div class="user">
      <p class="name">{{ item[$i18n.locale].name }}</p>
      <p class="job" v-if="item[$i18n.locale].job">
        {{ item[$i18n.locale].job }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="scss" scoped>
.testimonial {
  background-color: rgba(255, 255, 255, 0.07);
  box-shadow: 0 1px 2px rgb(0 0 0 / 25%), 0 -1px 1px rgb(0 0 0 / 13%);
  padding: 40px 20px 32px;
  margin-bottom: 20px;
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
      opacity: 0.2;
      color: #fff;
      margin-inline-end: 20px;
    }
    p {
      margin: 0;
      color: #fff;
    }
  }
  .user {
    p {
      text-align: end;
      color: #fff;
      margin: 0;
      line-height: 28px;
    }
  }
}
</style>
