<template>
  <form class="card auth-card">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <label for="email" class="input-field">
        Email
        <input
          id="email"
          type="text"
        >
        <small class="helper-text invalid">Email</small>
      </label>
      <label for="password" class="input-field">
        Пароль
        <input
          id="password"
          type="password"
          class="validate"
        >
        <small class="helper-text invalid">Password</small>
      </label>
      <label for="name" class="input-field">
        Имя
        <input
          id="name"
          type="text"
          class="validate"
        >
        <small class="helper-text invalid">Name</small>
      </label>
      <p>
        <label for="confirm-rules">
          <input id="confirm-rules" type="checkbox" />
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
