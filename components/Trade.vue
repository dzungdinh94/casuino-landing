<template>
  <div class="trade-container">
    <div class="landing-page-upcoming-events-amount">
      <div class="landing-page-upcoming-events-frame898">
        <div class="landing-page-upcoming-events-statitic">
          <div class="landing-page-upcoming-events-title">
            <span class="landing-page-upcoming-events-text044 HeadingH3">
              <span>$CSC COIN</span>
            </span>
            <span class="landing-page-upcoming-events-text046 HeadingH6">
              <span>1$CSC = 0.001 SUI</span>
            </span>
          </div>
          <div class="landing-page-upcoming-events-frame894">
            <div class="landing-page-upcoming-events-title1">
              <span class="landing-page-upcoming-events-text048 TitleMRegular">
                <span>Soft cap</span>
              </span>
              <span class="landing-page-upcoming-events-text050 HeadingH6">
                <span>1,000 SUI</span>
              </span>
            </div>
            <div class="landing-page-upcoming-events-title2">
              <span class="landing-page-upcoming-events-text052 TitleMRegular">
                <span>Hard cap</span>
              </span>
              <span class="landing-page-upcoming-events-text054 HeadingH6">
                <span>1,000 SUI</span>
              </span>
            </div>
            <div class="landing-page-upcoming-events-title3">
              <span class="landing-page-upcoming-events-text056 TitleMRegular">
                <span>Collected Sui</span>
              </span>
              <span class="landing-page-upcoming-events-text058 HeadingH6">
                <span>1,000 SUI</span>
              </span>
            </div>
            <div class="landing-page-upcoming-events-title4">
              <span class="landing-page-upcoming-events-text060 TitleMRegular">
                <span>Available SUI</span>
              </span>
              <span class="landing-page-upcoming-events-text062 HeadingH6">
                <span>1,000 SUI</span>
              </span>
            </div>
          </div>
        </div>
        <div class="landing-page-upcoming-events-slider">
          <span class="landing-page-upcoming-events-text064 TitleMRegular">
            <span>Invested</span>
          </span>
          <div class="landing-page-upcoming-events-slide">
            <img
              alt="Rectangle149401"
              src="~/assets/external/marker.png"
              class="landing-page-upcoming-events-rectangle14"
            />
          </div>
        </div>
        <div class="landing-page-upcoming-events-input">
          <div class="landing-page-upcoming-events-frame896">
            <span class="landing-page-upcoming-events-text066 TitleMRegular">
              <span>What SUI amount do you wish to invest?</span>
            </span>
            <div class="landing-page-upcoming-events-input-no-label">
              <div class="landing-page-upcoming-events-input-no-label1">
                <input
                  class="landing-page-upcoming-events-text068 ParagraphMBold"
                  placeholder="0"
                />
                <div class="landing-page-upcoming-events-suiwallet">
                  <div class="landing-page-upcoming-events-group381">
                    <img
                      alt="Ellipse1I9401"
                      src="~/assets/external/ellipse1i9401-hnr-200h.png"
                      class="landing-page-upcoming-events-ellipse1"
                    />
                    <img
                      alt="VectorI9401"
                      src="~/assets/external/vectori9401-zcjj.svg"
                      class="landing-page-upcoming-events-vector"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="landing-page-upcoming-events-frame897">
            <span class="landing-page-upcoming-events-text069 TitleMRegular">
              <span>How much $CSC will you receive in return?</span>
            </span>
            <div class="landing-page-upcoming-events-input-no-label2">
              <div class="landing-page-upcoming-events-input-no-label3">
                <input
                  class="landing-page-upcoming-events-text071 ParagraphMBold"
                  placeholder="= 0 $CSC"
                />

                <div class="landing-page-upcoming-events-base">
                  <img
                    alt="RectangleI9401"
                    src="~/assets/external/rectanglei9401-md1c-200h.png"
                    class="landing-page-upcoming-events-rectangle"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="landing-page-upcoming-events-button">
          <span class="landing-page-upcoming-events-text073 ButtonLBold">
            <span>Connect wallet</span>
          </span>
        </button>
      </div>
    </div>
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
.trade-container {
  display: flex;
  padding: 64px 244px;
  flex: 1;
  flex-direction: column;
  width: 100%;
}

.landing-page-upcoming-events-amount {
  display: flex;
  padding: 40px 40px 64px;

  align-items: flex-start;
  border-radius: 8px;
  flex-direction: column;
  background-color: var(--dl-color-gray-22);
}
.landing-page-upcoming-events-frame898 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;
  width: 100%;
}
.landing-page-upcoming-events-statitic {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.landing-page-upcoming-events-title {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.landing-page-upcoming-events-text044 {
  color: var(--dl-color-default-white);
  height: auto;
  text-align: left;
  line-height: 56px;
}
.landing-page-upcoming-events-text046 {
  color: var(--dl-color-default-white);
  height: auto;
  text-align: left;
  line-height: 28px;
}
.landing-page-upcoming-events-frame894 {
  gap: 64px;
  display: flex;
  padding: 24px 40px;
  align-items: flex-start;
  border-color: rgba(61, 61, 61, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
}
.landing-page-upcoming-events-title1 {
  gap: 4px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.landing-page-upcoming-events-text048 {
  color: var(--dl-color-default-white);
  height: auto;
  text-align: left;
  line-height: 24px;
}
.landing-page-upcoming-events-text050 {
  color: var(--dl-color-default-white);
  height: auto;
  text-align: left;
  line-height: 28px;
}
.landing-page-upcoming-events-title2 {
  gap: 4px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.landing-page-upcoming-events-text052 {
  color: var(--dl-color-default-white);
  height: auto;
  text-align: left;
  line-height: 24px;
}
.landing-page-upcoming-events-text054 {
  color: var(--dl-color-default-white);
  height: auto;
  text-align: left;
  line-height: 28px;
}
.landing-page-upcoming-events-title3 {
  gap: 4px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.landing-page-upcoming-events-text056 {
  color: var(--dl-color-default-white);
  height: auto;
  text-align: left;
  line-height: 24px;
}
.landing-page-upcoming-events-text058 {
  color: var(--dl-color-default-white);
  height: auto;
  text-align: left;
  line-height: 28px;
}
.landing-page-upcoming-events-title4 {
  gap: 4px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.landing-page-upcoming-events-text060 {
  color: var(--dl-color-default-white);
  height: auto;
  text-align: left;
  line-height: 24px;
}
.landing-page-upcoming-events-text062 {
  color: var(--dl-color-default-white);
  height: auto;
  text-align: left;
  line-height: 28px;
}
.landing-page-upcoming-events-slider {
  gap: 12px;
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
}
.landing-page-upcoming-events-text064 {
  color: var(--dl-color-default-white);
  height: auto;
  text-align: left;
  line-height: 24px;
}
.landing-page-upcoming-events-slide {
  width: 100%;
  height: 24px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: 16px;
  background: var(--primary-5, #5496e5);
}
.landing-page-upcoming-events-rectangle14 {
  top: 1px;
  left: 1px;
  width: 51px;
  height: 22px;
  border-radius: 16px;
}
.landing-page-upcoming-events-input {
  display: flex;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
  justify-content: space-between;
  margin-bottom: 40px;
}
.landing-page-upcoming-events-frame896 {
  gap: 4px;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  margin-right: 40px;
}
.landing-page-upcoming-events-text066 {
  color: var(--dl-color-default-white);
  height: auto;
  align-self: stretch;
  text-align: left;
  line-height: 24px;
}
.landing-page-upcoming-events-input-no-label {
  gap: 4px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.landing-page-upcoming-events-input-no-label1 {
  gap: 16px;
  display: flex;
  padding: 20px 16px;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: rgba(51, 51, 51, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
}
.landing-page-upcoming-events-text068 {
  background-color: var(--dl-color-gray-22);
  color: var(--dl-color-default-white);
  height: auto;
  flex-grow: 1;
  text-align: left;
  line-height: 24px;
}
.landing-page-upcoming-events-suiwallet {
  width: 24px;
  height: 24px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 1000px;
}
.landing-page-upcoming-events-group381 {
  top: 3px;
  left: 2.3994140625px;
  width: 18.798828125px;
  height: 18.798828125px;
  display: flex;

  align-items: flex-start;
  flex-shrink: 1;
}
.landing-page-upcoming-events-ellipse1 {
  top: 0px;
  left: 0px;
  width: 19px;
  height: 19px;
}
.landing-page-upcoming-events-vector {
  top: 3px;
  left: 4px;
  width: 11px;
  height: 14px;
  position: absolute;
}
.landing-page-upcoming-events-frame897 {
  gap: 4px;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.landing-page-upcoming-events-text069 {
  color: var(--dl-color-default-white);
  height: auto;
  align-self: stretch;
  text-align: left;
  line-height: 24px;
}
.landing-page-upcoming-events-input-no-label2 {
  gap: 4px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.landing-page-upcoming-events-input-no-label3 {
  gap: 16px;
  display: flex;
  padding: 20px 16px;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: rgba(51, 51, 51, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
}
.landing-page-upcoming-events-text071 {
  background-color: var(--dl-color-gray-22);
  height: auto;
  flex-grow: 1;
  text-align: left;
  line-height: 24px;
  color: var(--dl-color-default-white);
}
.landing-page-upcoming-events-base {
  width: 24px;
  height: 24px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.landing-page-upcoming-events-rectangle {
  top: 0px;
  left: 0px;
  width: 24px;
  height: 24px;

  border-radius: 4px;
}
.landing-page-upcoming-events-button {
  gap: 8px;
  display: flex;
  padding: 16px;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  justify-content: center;
  background-color: var(--dl-color-primary-5);
}
.landing-page-upcoming-events-text073 {
  color: var(--dl-color-default-white);
  height: auto;
  text-align: left;
  line-height: 24px;
  font-size: 16px;
  font-family: Jura;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
}
</style>
