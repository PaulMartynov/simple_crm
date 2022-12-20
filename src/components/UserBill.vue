<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">Счет в валюте</span>

        <p class="currency-line">
          <span>{{ bill ? `${bill.toFixed(2)} ₽` : "0.00 ₽" }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bill: {
      type: Number,
    },
  },
};
</script>
