<template>
  <div class="landing-page-upcoming-events-landing-page-upcoming-events">
    <div>
      <Header />
      <Banner />

      <div
        class="flex flex-1 flex-col sm:px-[24px] md:px-[100px] lg:px-[244px] xlg:px-[244px]"
      >
        <count-down />
        <trade />
        <experiences />
        <tokenomic />
        <reason />
        <partner />
        <roadmap />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>

</script>

<style scoped>
.landing-page-upcoming-events-landing-page-upcoming-events {
  display: flex;
  flex-shrink: 0;
  flex: 1;
  width: 100%;
  flex-direction: column;
  background-color: var(--dl-color-gray-24);
}
</style>
