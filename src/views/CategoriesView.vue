<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <div class="row">
        <CreateCategoryForm :categories="categories" />
        <UpdateCategoryForm
          v-if="categories.length"
          :categories="categories"
          :key="categories.length + updatedCount"
          @updateCategory="updateCount"
        />
      </div>
    </section>
  </div>
</template>
<script>
import CreateCategoryForm from "@/components/CreateCategoryForm.vue";
import UpdateCategoryForm from "@/components/UpdateCategoryForm.vue";

export default {
  components: { UpdateCategoryForm, CreateCategoryForm },
  data: () => ({
    updatedCount: 0,
  }),
  methods: {
    updateCount() {
      this.updatedCount += 1;
    },
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
  },
};
</script>
