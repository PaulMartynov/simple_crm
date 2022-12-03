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
              <div class="input-field">
                <label for="create-name">
                  <input
                    id="create-name"
                    type="text"
                  >
                  Название
                </label>
                <span class="helper-text invalid">Введите название</span>
              </div>

              <div class="input-field">
                <label for="create-limit">
                  <input
                    id="create-limit"
                    type="number"
                  >
                  Лимит
                </label>
                <span class="helper-text invalid">Минимальная величина</span>
              </div>

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
              <div class="input-field" >
                <label for="categories">
                  <select id="categories">
                    <option>Category</option>
                  </select>
                  Выберите категорию
                </label>
              </div>

              <div class="input-field">
                <label for="update-name">
                  <input type="text" id="update-name">
                  Название
                </label>
                <span class="helper-text invalid">TITLE</span>
              </div>

              <div class="input-field">
                <label for="update-limit">
                  <input
                    id="update-limit"
                    type="number"
                  >
                  Лимит
                </label>
                <span class="helper-text invalid">LIMIT</span>
              </div>

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
