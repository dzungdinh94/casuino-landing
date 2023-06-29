<template>
  <div
    class="landing-page-upcoming-events-header flex flex-col items-center sm:px-[24px] md:px-[100px] lg:px-[244px] xlg:px-[244px] z-1"
  >
    <img
      alt="Illus0119628"
      src="~/assets/external/Illus_01.png"
      class="landing-page-upcoming-events-illus011 w-[176px] h-[176px] md:w-[700px] md:h-[700px]"
    />
    <img
      alt="Rectangle179646"
      src="~/assets/external/bg-banner.png"
      class="landing-page-upcoming-events-rectangle17"
    />
    <span class="landing-page-upcoming-events-text md:absolute md:bottom-[48px] text-[24px] md:text-[60px]">
      <span>
        <span>Get ready to roll the dice &amp;</span>
        <br />
        <span>win big at our casino paradise!</span>
      </span>
    </span>
  </div>
  <div class="gradient"></div>
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
  width: 100%;
  padding: 40px 0px;
  background-color: rgba(31, 31, 31, 1);
  position: relative;
}
.gradient {
  width: 100%;

  background-size: cover;
  background-repeat: no-repeat;
}
/* .landing-page-upcoming-events-illus011 {
  width: 176px;
  height: 176px;
} */

.landing-page-upcoming-events-rectangle17 {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
}
.landing-page-upcoming-events-text {
  color: var(--dl-color-default-white);
  opacity: 0.8;
  bottom: 48px;
  text-align: center;
  font-family: Jura;
  font-weight: 700;
  font-stretch: normal;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
