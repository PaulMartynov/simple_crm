<template>
  <div class="app-main-layout">
    <NavBar @click="isOpen = !isOpen" />
    <SideBar :is-open="isOpen" />
    <main class="app-content" :class="{ full: !isOpen }">
      <router-view />
    </main>

    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
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
