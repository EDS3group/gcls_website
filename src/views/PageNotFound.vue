<template>
  <div class="not_found">
    <div class="img_wrapper text-center">
      <img width="200" src="@/assets/media/images/logo/logo.png" alt="logo" />
    </div>
    <div class="text-info mt-5 text-center">
      <h3>{{ $t("pageNotFound") }}</h3>
      <router-link to="/">{{ $t("goToHome") }}</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.not_found {
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
</style>
