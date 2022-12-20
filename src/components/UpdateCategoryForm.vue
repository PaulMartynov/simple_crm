<template>
  <div class="col s12 m6" @submit.prevent="submitHandler">
    <div>
      <div class="page-subtitle">
        <h4>Редактировать</h4>
      </div>

      <form>
        <label for="categories-select" class="input-field">
          <select id="categories-select">
            <option>Category</option>
          </select>
          Выберите категорию
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

export default {
  name: "UpdateCategoryForm",
  data: () => ({
    v$: useVuelidate(),
    categoryName: "",
    limit: 1,
  }),
  methods: {
    async submitHandler() {
      const isFormCorrect = await this.v$.$validate();
      if (isFormCorrect) {
        const formData = {
          title: this.categoryName,
          limit: this.limit,
        };
      }
    },
  },
  validations() {
    return {
      categoryName: { required },
      limit: { minValue: minValue(1) },
    };
  },
};
</script>
