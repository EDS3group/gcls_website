<template>
  <div class="gallary-wrapper" v-if="item">
    <div class="row">
      <div
        class="col-sm-6 mb-3 col-lg-4"
        v-for="(src, index) in item"
        :key="index"
      >
        <h6 class="name text-center fs-6" v-if="src.title">
          {{ src.title }}
        </h6>
        <div class="pic" @click="() => showImg(index)">
          <i class="fas fa-plus"></i>
          <img class="img-fluid" :src="src.src" title="gallary-images" />
        </div>
        <h6 class="name text-center fs-6" v-if="src.name">
          {{ src.name }}
        </h6>
      </div>
    </div>

    <vue-easy-lightbox
      :visible="visible"
      :imgs="item"
      :index="index"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script setup>
import VueEasyLightbox from "vue-easy-lightbox";
import { ref, defineProps, toRefs } from "vue";

const props = defineProps(["item"]);
const { item } = toRefs(props);

const index = ref(0);
const visible = ref(false);

function showImg(i) {
  index.value = i;
  visible.value = true;
}
function handleHide() {
  visible.value = false;
}
</script>

<style lang="scss">
.pic {
  max-height: 250px;
  overflow: hidden;
  height: 100%;
  position: relative;
  cursor: pointer;
  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #206f00;
    content: "";
    transition: 0.4s;
    -webkit-transition: 0.4s;
    -ms-transition: 0.4s;
    visibility: hidden;
    opacity: 0;
  }
  i {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #fff;
    border: 1px solid #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    font-size: 22px;
    visibility: hidden;
    opacity: 0;
    align-items: center;
    transform: translate(-50%, -50%);
  }
  &:hover {
    &::before {
      top: 0;
      visibility: visible;
      opacity: 0.75;
    }
    i {
      visibility: visible;
      opacity: 1;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
