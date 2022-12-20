<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <div class="row">
        <CreateCategoryForm />
        <UpdateCategoryForm />
      </div>
    </section>
  </div>
</template>
<script>
import CreateCategoryForm from "@/components/CreateCategoryForm.vue";
import UpdateCategoryForm from "@/components/UpdateCategoryForm.vue";

export default {
  components: { UpdateCategoryForm, CreateCategoryForm },
};
</script>
