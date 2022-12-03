<template>
  <div class="app-main-layout">
    <NavBar @toggle-side-menu="isOpen = !isOpen" />
    <SideBar :is-open="isOpen" />
    <main class="app-content" :class="{ full: !isOpen }">
      <router-view />
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from '@/components/app/NavBar.vue';
import SideBar from '@/components/app/SideBar.vue';

export default {
  data: () => ({
    isOpen: true,
  }),
  name: 'main-layout',
  components: {
    NavBar,
    SideBar,
  },
};
</script>
