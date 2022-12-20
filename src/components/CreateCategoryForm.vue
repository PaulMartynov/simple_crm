<template>
  <div class="col s12 m6" @submit.prevent="submitHandler">
    <div>
      <div class="page-subtitle">
        <h4>Создать</h4>
      </div>

      <form>
        <label for="create-name" class="input-field">
          Название
          <input
            id="create-name"
            type="text"
            v-model.trim="categoryName"
            :class="{ invalid: v$.categoryName.$error }"
          />
          <span v-show="v$.categoryName.$error" class="helper-text invalid">Введите название</span>
        </label>

        <label for="create-limit" class="input-field">
          Лимит
          <input
            id="create-limit"
            type="number"
            v-model.number="limit"
            :class="{ invalid: v$.limit.$error }"
          />
          <span v-show="v$.limit.$error" class="helper-text invalid">{{
            `Значение должно быть не менее ${v$.limit.minValue.$params.min}`
          }}</span>
        </label>

        <button class="btn waves-effect waves-light" type="submit">
          Создать
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
  name: "CreateCategoryForm",
  data: () => ({
    v$: useVuelidate(),
    categoryName: "",
    limit: 100,
  }),
  methods: {
    async submitHandler() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) {
        return;
      }
      try {
        await this.$store.dispatch("createCategory", {
          title: this.categoryName,
          limit: this.limit,
        });
        this.categoryName = "";
        this.limit = 100;
        this.v$.$reset();
        this.$message("Категория создана!");
      } catch (e) {
        //
      }
    },
  },
  validations() {
    return {
      categoryName: { required },
      limit: { minValue: minValue(100) },
    };
  },
});
</script>
