<template>
  <div id="loading" class="loading">
    <img src="@/assets/loader.svg" width="100" height="100" alt="loading" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loading {
  background-color: #fff;

  height: 100%;
  width: 100%;
  position: fixed;
  margin-top: 0;
  top: 0;
  z-index: 999999;
  @include flexCenterAlignment();
}
</style>
