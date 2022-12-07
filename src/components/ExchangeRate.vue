<template>
  <div class="col s12 m6 l8">
    <div class="card orange darken-3 bill-card">
      <div class="card-content white-text">
        <div class="card-header">
          <span class="card-title">Курс валют</span>
        </div>
        <table v-if="currency">
          <thead>
          <tr>
            <th>Валюта</th>
            <th>Курс</th>
            <th>Дата</th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <td>руб</td>
            <td>12121</td>
            <td>12.12.12</td>
          </tr>
          </tbody>
        </table>
        <div class="row" style="width: 100%; text-align: center; margin-top: 100px" v-else>
          <h6>НЕТ ДАННЫХ</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['currency'],
};
</script>
