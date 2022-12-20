<template>
  <div>
    <div class="page-title">
      <h3>Профиль</h3>
    </div>

    <form class="form">
      <label for="description" class="input-field">
        Имя
        <input id="description" type="text" />
        <span class="helper-text invalid">name</span>
      </label>

      <button class="btn waves-effect waves-light" type="submit">
        Обновить
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>
