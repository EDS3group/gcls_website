<template>
  <div class="home-gallary">
    <div class="container">
      <h3 class="title">{{ $t("1st Qimam wa Shiam Tournament") }}</h3>
      <div>
        <gallary :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Gallary from "../global/Gallary.vue";

import { defineProps, toRefs } from "vue";

const props = defineProps(["item"]);
const { item } = toRefs(props);
</script>

<style lang="scss">
.home-gallary {
  padding-block: 80px;
  h3 {
    color: #206f00;
    font-size: 28px;
  }
}
</style>
