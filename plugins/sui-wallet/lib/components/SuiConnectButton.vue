<template>
  <div class="">
    <div
      v-if="showInformationText"
      v-show="hasWalletPermissions"
      class="sui-account-details"
    >
      <p class="landing-page-upcoming-events-text243 ButtonMBold">
        {{ connectedWalletText }}: {{ suiProvider }}
      </p>
      <p class="landing-page-upcoming-events-text243">
        {{ addressText }}: {{ suiAddress }}
      </p>
    </div>

    <button
      v-if="!hasWalletPermissions"
      class="landing-page-upcoming-events-button1"
      @click="toggleWalletAuthModal = true"
    >
      <span class="landing-page-upcoming-events-text243 ButtonMBold">
        <span> {{ connectText }}</span>
      </span>
    </button>

    <button v-else class="landing-page-upcoming-events-button1" @click="logout">
      {{ logoutText }}
    </button>

    <sui-connect-modal
      v-show="toggleWalletAuthModal"
      :connect="connect"
      :choose-provider="chooseProvider"
      :no-wallet-extension-installed="noWalletExtensionInstalled"
      @closeModal="toggleWalletAuthModal = false"
    ></sui-connect-modal>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import SuiConnectModal from "./SuiConnectModal.vue";
import { useSuiWallet } from "../composables/useSuiWallet";

const props = defineProps({
  /*
    Determines if the modal will instantly show upon rendering the button.
    Default value is false
   */
  startToggled: {
    type: Boolean,
    default: false,
  },
  /*
    It determines whether to show information about the wallet that is connected
    as well as the address of the user on the left of the button.
    Default value is true.
 */
  showInformationText: {
    type: Boolean,
    default: true,
  },
  /*
      The following ones are text based that control the actual words used in the component
   */
  connectedWalletText: {
    type: String,
    default: "Connected Wallet",
  },
  addressText: {
    type: String,
    default: "Address",
  },
  connectText: {
    type: String,
    default: "Connect Wallet",
  },
  logoutText: {
    type: String,
    default: "Logout",
  },
  chooseProvider: {
    type: String,
    default: "Select wallet provider:",
  },
  connect: {
    type: String,
    default: "",
  },
  noWalletExtensionInstalled: {
    type: String,
    default: "No wallet extensions found. Maybe try Sui's default one?",
  },
});

const toggleWalletAuthModal = ref(props.startToggled);
const { suiWallet, suiAddress, suiProvider } = useSuiWallet();

const hasWalletPermissions = computed(() => {
  return !!suiAddress.value;
});

const logout = () => {
  suiAddress.value = null;

  suiWallet
    .logout()
    .then(() => {
      suiWallet.activeProvider = null; // clear activeProvider too.
    })
    .catch(); // logout.
};

// This one verifies that the logged in state is actually valid by
// trying to re-login the user upon login. It actually re-initializes the state
// with the current active address & Provider.
const verifyLoggedInStatus = () => {
  if (!suiWallet.activeProvider) return;

  // console.info('There is an active wallet connection from previous session. Attempting to re-establish.');

  // login with current provider.
  suiWallet
    .login()
    .then((res) => {
      if (res.error) return logout();
      suiAddress.value = res.account;
    })
    .catch((e) => {
      logout(); // logout if we fail the re-connect phase.
    });
};

verifyLoggedInStatus();
</script>

<style scoped>
.sui-account-details {
  margin-right: 1rem;
  margin-bottom: 1rem;
}

@media screen and (min-width: 767px) {
  .sui-account-details {
    margin-bottom: 0;
  }
  .sui-login-wrapper {
    display: flex;
    text-align: left;
  }
}
.sui-login-wrapper > * {
  flex-shrink: 0;
}
.sui-logout-btn {
  flex-shrink: 0;
  padding: 0.5rem 0.75rem;
  background-color: transparent;
  cursor: pointer;
  border-radius: 9999px;
  min-width: 160px;
}

.address-text {
  margin: 0;
  font-size: 0.6rem;
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
</style>
