<template>
  <ul class="sidenav app-sidenav" :class="{ open: isOpen }">
    <router-link
      v-for="link in links"
      :key="link.url"
      :to="link.url"
      active-class="active"
      :exact="link.exact"
    >
      <li>
        <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
      </li>
    </router-link>
  </ul>
</template>

<script lang="ts">
export default {
  props: ['isOpen'],
  data: () => ({
    links: [
      { title: 'Счет', url: '/', exact: true },
      { title: 'История', url: '/history', exact: false },
      { title: 'Планирование', url: '/planning', exact: false },
      { title: 'Новая запись', url: '/record', exact: false },
      { title: 'Категории', url: '/categories', exact: false },
    ],
  }),
};
</script>
