<template>
  <div class="whatsapp" v-if="setting">
    <a :href="`https://wa.me/${setting.whats_app}`" target="_blank">
      <i class="fa-brands fa-whatsapp"></i>
    </a>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const setting = computed(() => store.getters.mainSettings);
</script>

<style lang="scss">
.whatsapp {
  position: fixed;
  bottom: 50px;
  right: 50px;
  background-color: #27d246;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  font-size: 25px;
  color: #fff;
  a {
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
}
</style>
