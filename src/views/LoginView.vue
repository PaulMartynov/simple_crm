<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <label for="email" class="input-field">
        Email
        <input
          id="email"
          type="text"
          class="validate"
          v-model.trim="email"
          :class="{ invalid: v$.email.$error }"
        >
        <small v-show="v$.email.$error" class="helper-text invalid">
          Некорректный email
        </small>
      </label>
      <label for="password" class="input-field">
        Пароль
        <input
          id="password"
          type="password"
          class="validate"
          v-model="password"
          :class="{ invalid: v$.password.$error }"
        >
        <small v-show="v$.password.$error" class="helper-text invalid">
          {{ `Пароль должен быть не менее ${v$.password.minLength.$params.min} символов` }}
        </small>
      </label>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import messages from '@/common/messages';

export default defineComponent({
  name: 'LoginView',
  data: () => ({
    v$: useVuelidate(),
    email: '',
    password: '',
  }),
  mounted() {
    if (messages[this.$route.query.message as string]) {
      this.$message(messages[this.$route.query.message as string]);
    }
  },
  methods: {
    async submitHandler() {
      const isFormCorrect = await this.v$.$validate();
      if (isFormCorrect) {
        const formData = {
          email: this.email,
          password: this.password,
        };
        try {
          await this.$store.dispatch('loginOnServer', formData);
          this.$router.push('/');
        } catch (e) {
          // this.$error(`${e}`);
        }
      }
    },
  },
  validations() {
    return {
      email: { required, email },
      password: { required, minLength: minLength(6) },
    };
  },
});
</script>
