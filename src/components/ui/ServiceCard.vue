<template>
  <div class="service-card" v-if="service">
    <div class="img-wrapper" @click="modal.show = true">
      <img class="img-fluid" :src="service.image[0].image" alt="service1" />
      <i class="fa-solid fa-magnifying-glass-plus"></i>
    </div>
    <div class="content">
      <h3 class="head-title">{{ service.name }}</h3>
      <div class="sub-title" v-html="service.title"></div>
      <!-- <div class="desc" v-html="service.description"></div> -->
      <router-link :to="`/services/${service.id}/main`" class="readMore"
        >{{ $t("buttons.findOutMore") }}
        <i
          class="fa-solid"
          :class="$i18n.locale == 'en' ? 'fa-angles-right' : 'fa-angles-left'"
        ></i>
      </router-link>
    </div>
    <Teleport to="body">
      <BaseModal :show="modal.show" @close="modal.show = false">
        <img class="img-fluid" :src="service.image[0].image" alt="modal" />
      </BaseModal>
    </Teleport>
  </div>
</template>

<script>
export default {
  props: ["service"],
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
.service-card {
  @include mainShadow();
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .img-wrapper {
    position: relative;

    cursor: pointer;
    i {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      opacity: 0.7;
      opacity: 0;
      visibility: hidden;
      transition: 0.3s;
      font-size: 28px;
    }
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      background: #0000005d;
      transform: translate(-50%, -50%);
      color: #fff;
      opacity: 0.7;
      opacity: 0;
      visibility: hidden;
      transition: 0.3s;
    }
    &:hover {
      i {
        opacity: 1;
        visibility: visible;
      }
      &::before {
        opacity: 1;
        visibility: visible;
        width: 100%;
        height: 100%;
      }
    }
  }
  .content {
    margin-top: auto;
    padding: 20px;
    height: 150px;
    display: flex;
    flex-direction: column;
    h3 {
      font-size: 21px;
      line-height: 31px;
      text-transform: uppercase;
      color: $textColor;
      margin: 0;
    }

    p {
      font-size: 13px;
      color: $textColor1;
      line-height: 21px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow: hidden;
      -webkit-box-orient: vertical;
    }
    .sub-title {
      * {
        font-size: 13px;
        color: $textColor1;
        line-height: 21px;
        text-transform: uppercase;
        margin-bottom: 10px;
        // font-family: inherit;
      }
      pre {
        white-space: break-spaces;
        overflow: unset;
      }
    }
  }
  .readMore {
    margin-top: auto;
    transition: 0.3s;
    &:hover {
      padding-inline-start: 10px;
    }
  }
}
</style>
