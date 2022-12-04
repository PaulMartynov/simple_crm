<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <label for="email" class="input-field">
        Email
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{ invalid: v$.email.$error }"
        >
        <small v-if="v$.email.$error" class="helper-text invalid">Некорректный email</small>
      </label>
      <label for="password" class="input-field">
        Пароль
        <input
          id="password"
          type="password"
          class="validate"
          v-model.trim="password"
          :class="{ invalid: v$.password.$error }"
        >
        <small v-show="v$.password.$error" class="helper-text invalid">
          {{ `Пароль должен быть не менее ${v$.password.minLength.$params.min} символов` }}
        </small>
      </label>
      <label for="name" class="input-field">
        Имя
        <input
          id="name"
          type="text"
          class="validate"
          v-model.trim="name"
          :class="{ invalid: v$.name.$error }"
        >
        <small v-if="v$.name.$error" class="helper-text invalid">
          Это поле не должно быть пустым
        </small>
      </label>
      <p>
        <label for="confirm-rules">
          <input id="confirm-rules" type="checkbox" v-model="agree" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

export default defineComponent({
  name: 'RegisterView',
  data: () => ({
    v$: useVuelidate(),
    email: '',
    password: '',
    name: '',
    agree: false,
  }),
  methods: {
    async submitHandler() {
      const isFormCorrect = await this.v$.$validate();
      if (isFormCorrect) {
        this.$router.push('/');
      }
    },
  },
  validations() {
    return {
      email: { required, email },
      password: { required, minLength: minLength(6) },
      name: { required },
      agree: { checked: (v: boolean) => v },
    };
  },
});

</script>
