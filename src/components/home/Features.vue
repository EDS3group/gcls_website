<template>
  <section class="features">
    <div class="container">
      <div class="features-content">
        <div class="feat">
          <div class="icon">
            <i class="fa-solid fa-headset"></i>
          </div>
          <div class="text">
            <h5 class="title">Call center</h5>
            <p class="desc">Give us a free call</p>
            <a href="tel:121212121212">+121212121212</a>
          </div>
        </div>
        <div class="feat">
          <div class="icon">
            <i class="fa-solid fa-headset"></i>
          </div>
          <div class="text">
            <h5 class="title">Call center</h5>
            <p class="desc">Give us a free call</p>
            <a href="tel:121212121212">+121212121212</a>
          </div>
        </div>
        <div class="feat">
          <div class="icon">
            <i class="fa-solid fa-headset"></i>
          </div>
          <div class="text">
            <h5 class="title">Call center</h5>
            <p class="desc">Give us a free call</p>
            <a href="tel:121212121212">+121212121212</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.features {
  background-color: rgb(11, 96, 169);
  background-image: url("@/assets/media/images/Transparent-background-with-dots.png");
  background-attachment: fixed;
  background-position: 50% 4.97372px;
  background-size: cover;
  padding-block: 40px;
  .features-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .feat {
      display: flex;
      padding: 10px 20px;
      width: 100%;

      .text {
        * {
          color: #fff;
        }
        h5 {
          font-size: 16px;
          margin-bottom: 8px;
        }
        p {
          font-size: 16px;
          margin: 0;
        }
        a {
        }
      }
      @media (max-width: 678px) {
        &:not(:last-child) {
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
      }
      @media (min-width: 600px) and (max-width: 678px) {
        display: none;
        &:not(:last-child) {
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
      }

      @media (min-width: 678px) {
        &:not(:last-child) {
          border-inline-end: 1px solid rgba(255, 255, 255, 0.1);
        }
        width: calc(100% / 3);
      }
    }
  }
}
</style>
