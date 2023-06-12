<template>
  <router-link
    :to="`/countries/${country.id}`"
    class="country-card"
    v-if="country"
  >
    <div class="img-wrapper">
      <img :src="country.logo" alt="country" />
    </div>

    <h3 class="head-title">{{ country.name }}</h3>
  </router-link>
</template>

<script>
export default {
  props: ["country"],
  data() {
    return {
      modal: {
        show: false,
        img_src: null,
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.country-card {
  padding: 5px;
  @include mainShadow();
  text-decoration: none;
  display: flex;
  flex-direction: column;
  height: 100%;
  .img-wrapper {
    display: flex;
    height: 100%;
    img {
      object-fit: cover;
      width: 100%;
    }
  }
  h3 {
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    color: $textColor;
    margin: 0;
    padding-block: 5px;
    text-align: center;
    margin-top: auto;
  }
}
</style>
