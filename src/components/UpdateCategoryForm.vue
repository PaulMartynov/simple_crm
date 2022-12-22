<template>
  <div class="col s12 m6" @submit.prevent="submitHandler">
    <div>
      <div class="page-subtitle">
        <h4>Редактировать</h4>
      </div>

      <form>
        <label for="categories-select" class="input-field">
          Выберите категорию
          <select id="categories-select" ref="categoriesSelect" v-model="currentCat">
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.title }}
            </option>
          </select>
        </label>

        <label for="update-name" class="input-field">
          Название
          <input
            type="text"
            id="update-name"
            v-model.trim="categoryName"
            :class="{ invalid: v$.categoryName.$error }"
          />
          <span v-show="v$.categoryName.$error" class="helper-text invalid">Введите название</span>
        </label>

        <label for="update-limit" class="input-field">
          Лимит
          <input
            id="update-limit"
            type="number"
            v-model.number="limit"
            :class="{ invalid: v$.limit.$error }"
          />
          <span v-show="v$.limit.$error" class="helper-text invalid">{{
            `Значение должно быть не менее ${v$.limit.minValue.$params.min}`
          }}</span>
        </label>

        <button class="btn waves-effect waves-light" type="submit">
          Обновить
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minValue } from "@vuelidate/validators";

export default defineComponent({
  name: "UpdateCategoryForm",
  props: { categories: { type: Array, required } },
  data: () => ({
    v$: useVuelidate(),
    categoryName: "",
    limit: 1,
    select: null,
    currentCat: null,
  }),
  methods: {
    async submitHandler() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) {
        return;
      }
      const category = this.categories.find(
        (c) => c.title.toLowerCase() === this.categoryName.toLowerCase() && this.currentCat !== c.id
      );
      if (category) {
        this.$error("Такая категория уже существует");
        return;
      }
      const formData = {
        title: this.categoryName,
        limit: this.limit,
        id: this.currentCat,
      };
      try {
        await this.$store.dispatch("updateCategory", formData);
        this.v$.$reset();
        this.$message("Категория обновлена!");
        this.$emit("updateCategory");
      } catch (e) {
        //
      }
    },
  },
  watch: {
    currentCat(value) {
      const category = this.categories.find((c) => c.id === value);
      if (category) {
        this.categoryName = category.title;
        this.limit = category.limit;
      }
    },
  },
  created() {
    if (this.categories[0]) {
      this.categoryName = this.categories[0].title;
      this.limit = this.categories[0].limit;
      this.currentCat = this.categories[0].id;
    }
  },
  mounted() {
    // eslint-disable-next-line no-undef
    this.select = M.FormSelect.init(this.$refs.categoriesSelect, {});
  },
  beforeUnmount() {
    if (this.select && this.select.destroy) {
      this.select.destroy();
    }
  },
  validations() {
    return {
      categoryName: { required },
      limit: { minValue: minValue(1) },
    };
  },
});
</script>
