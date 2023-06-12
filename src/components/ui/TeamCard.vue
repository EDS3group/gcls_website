<template>
  <router-link :to="`/teams/${id}`" class="team">
    <img :src="image" :alt="name" />
    <h3>{{ name }}</h3>
  </router-link>
</template>

<script>
export default {
  props: ["image", "name", "id"],
};
</script>

<style lang="scss" scoped>
.team {
  margin-bottom: 30px;
  padding-inline: 20px;
  width: fit-content;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  h3 {
    text-align: center;
    margin-top: 10px;
    font-size: 18px !important;
  }
}
</style>
