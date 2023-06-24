<template>
  <div class="landing-page-upcoming-events-header">
      <img
        alt="Illus0119628"
        src="/external/Illus_01 1.png"
        class="landing-page-upcoming-events-illus011"
      />
      <img
        alt="Rectangle179646"
        src="/external/bg-banner.png"
        class="landing-page-upcoming-events-rectangle17"
      />
      <span class="landing-page-upcoming-events-text">
        <span>
          <span>Get ready to roll the dice &amp;</span>
          <br />
          <span>win big at our casino paradise!</span>
        </span>
      </span>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.landing-page-upcoming-events-header {
  display: flex;
  justify-content: center;
  background-color: rgba(31, 31, 31, 1);
  height: 906px;
}

.landing-page-upcoming-events-illus011 {
  width: 700px;
  height: 700px;
}

.landing-page-upcoming-events-rectangle17 {
    width:100%;
  height:100%;
  background-size:cover;
  background-repeat: no-repeat;
  position:absolute;
}
.landing-page-upcoming-events-text {
  color: var(--dl-color-default-white);
  opacity: 0.8;
  bottom: 48px;
  width: 992px;
  position: absolute;
  font-size: 60px;
  text-align: center;
  font-family: Jura;
  font-weight: 700;
  line-height: 80px;
  font-stretch: normal;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
