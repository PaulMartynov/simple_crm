<template>
  <div>
    <div class="page-title">
      <h3>Новая запись</h3>
    </div>

    <form class="form">
      <label for="category" class="input-field">
        Выберите категорию
        <select id="category">
          <option>name cat</option>
        </select>
      </label>

      <p>
        <label for="income-value">
          <input id="income-value" class="with-gap" name="type" type="radio" value="income" />
          <span>Доход</span>
        </label>
      </p>

      <p>
        <label for="outcome-value">
          <input id="outcome-value" class="with-gap" name="type" type="radio" value="outcome" />
          <span>Расход</span>
        </label>
      </p>

      <label for="amount" class="input-field">
        Сумма
        <input id="amount" type="number" />
        <span class="helper-text invalid">amount пароль</span>
      </label>

      <label for="description" class="input-field">
        Описание
        <input id="description" type="text" />
        <span class="helper-text invalid">description пароль</span>
      </label>

      <button class="btn waves-effect waves-light" type="submit">
        Создать
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>
