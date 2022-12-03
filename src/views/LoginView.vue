<template>
  <form class="card auth-card">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <label for="email">
          <input
            id="email"
            type="text"
            class="validate"
          >
            Email
        </label>
        <small class="helper-text invalid">Email</small>
      </div>
      <div class="input-field">
        <label for="password">
          <input
            id="password"
            type="password"
            class="validate"
          >
          Пароль
        </label>
        <small class="helper-text invalid">Password</small>
      </div>
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
        <a href="/">Зарегистрироваться</a>
      </p>
    </div>
  </form>
</template>

<script>
export default {
  name: 'LoginView',
};
</script>

<style scoped>

</style>
