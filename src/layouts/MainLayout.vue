<template>
  <div>
    <app-loader v-if="isLoading" />
    <div v-else class="app-main-layout">
      <NavBar @toggle-side-menu="isOpen = !isOpen" :username="info?.name" />
      <SideBar :is-open="isOpen" />
      <main class="app-content" :class="{ full: !isOpen }">
        <div class="app-page">
          <router-view />
        </div>
      </main>

      <div class="fixed-action-btn">
        <router-link class="btn-floating btn-large blue" to="/record">
          <i class="large material-icons">add</i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/app/NavBar.vue";
import SideBar from "@/components/app/SideBar.vue";
import errorMessageMixin from "@/common/error.message.mixin";

export default defineComponent({
  data: () => ({
    isOpen: true,
    isLoading: true,
  }),
  name: "main-layout",
  components: {
    NavBar,
    SideBar,
  },
  computed: {
    info() {
      return this.$store.getters.info;
    },
  },
  async mounted() {
    if (!this.info) {
      await this.$store.dispatch("fetchUserInfo");
      await this.$store.dispatch("fetchCategories");
    }
    this.isLoading = false;
  },
  mixins: [errorMessageMixin],
});
</script>
