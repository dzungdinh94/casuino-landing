<template>
  <nav
    class="landing-page-upcoming-events-frame885 bg-[#0A0A0A] sticky top-0 py-4 sm:px-[10px] md:px-[144px] lg:px-[244px] xlg:px-[244px] z-10"
  >
    <div class="landing-page-upcoming-events-logo3 hidden md:flex">
      <img
        alt="Frame890I9345"
        src="~/assets/external/frame890i9345-7zxt.svg"
        class="landing-page-upcoming-events-frame8902"
      />
    </div>

    <div
      class="hidden md:flex items-center md:w-auto ml-5 sm:gap-[10px] md:gap-[10px] lg:gap-[30px] xlg:gap-[40px]"
    >
      <span class="landing-page-upcoming-events-text243 TitleLRegular-Cap">
        <span>Home</span>
      </span>
      <span class="landing-page-upcoming-events-text243 TitleLRegular-Cap">
        <span>Presale</span>
      </span>
      <span class="landing-page-upcoming-events-text243 TitleLRegular-Cap">
        <span>Game</span>
      </span>
      <span class="landing-page-upcoming-events-text243 TitleLRegular-Cap">
        <span>Tokenomic</span>
      </span>
      <span class="landing-page-upcoming-events-text243 TitleLRegular-Cap">
        <span>Features</span>
      </span>
      <span class="landing-page-upcoming-events-text243 TitleLRegular-Cap">
        <span>Litepaper</span>
      </span>

      <button class="landing-page-upcoming-events-button1">
        <span class="landing-page-upcoming-events-text243 ButtonMBold">
          <span>Play game</span>
        </span>
      </button>
      <sui-connect-button></sui-connect-button>

      <!-- <button class="landing-page-upcoming-events-button1">
        <span class="landing-page-upcoming-events-text243 ButtonMBold">
          <span>Connect Wallet</span>
        </span>
      </button> -->
    </div>
  </nav>
  <nav class="bg-[#0A0A0A] md:hidden flex p-4 fixed bottom-0 w-full justify-between items-center z-10">
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      class="inline-flex justify-center items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <button class="landing-page-upcoming-events-mobile md:hidden">
      <span class="landing-page-upcoming-events-text243 ButtonMBold">
        <span>Connect Wallet</span>
      </span>
    </button>
  </nav>
</template>
<script>

export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.landing-page-upcoming-events-frame885 {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.landing-page-upcoming-events-logo3 {
  gap: 6px;
  padding: 2px 0;
  align-items: center;
  flex-shrink: 0;
}

.landing-page-upcoming-events-list {
  display: flex;
  align-items: center;
}
.landing-page-upcoming-events-text243 {
  color: var(--dl-color-default-white);
  height: auto;
  text-align: left;
  line-height: 24px;

  text-transform: uppercase;
}
.landing-page-upcoming-events-button1 {
  gap: 8px;
  display: flex;
  padding: 8px 16px;
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  background-color: var(--dl-color-primary-5);
}
.landing-page-upcoming-events-mobile {
  gap: 8px;
  padding: 8px 16px;
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  background-color: var(--dl-color-primary-5);
}
</style>
