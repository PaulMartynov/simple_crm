<template>
  <div class="grey darken-1 empty-layout">
    <router-view />
  </div>
</template>

<script lang="ts">
import errorMessageMixin from '@/common/error.message.mixin';

export default {
  mixins: [errorMessageMixin],
};
</script>
