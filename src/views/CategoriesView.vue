<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <div class="row">
        <div class="col s12 m6">
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
                >
                <span class="helper-text invalid">Введите название</span>
              </label>

              <label for="create-limit" class="input-field">
                Лимит
                <input
                  id="create-limit"
                  type="number"
                >
                <span class="helper-text invalid">Минимальная величина</span>
              </label>

              <button class="btn waves-effect waves-light" type="submit">
                Создать
                <i class="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
        <div class="col s12 m6">
          <div>
            <div class="page-subtitle">
              <h4>Редактировать</h4>
            </div>

            <form>
              <label for="categories" class="input-field" >
                <select id="categories">
                  <option>Category</option>
                </select>
                Выберите категорию
              </label>

              <label for="update-name" class="input-field">
                Название
                <input type="text" id="update-name">
                <span class="helper-text invalid">TITLE</span>
              </label>

              <label for="update-limit" class="input-field">
                Лимит
                <input
                  id="update-limit"
                  type="number"
                >
                <span class="helper-text invalid">LIMIT</span>
              </label>

              <button class="btn waves-effect waves-light" type="submit">
                Обновить
                <i class="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
