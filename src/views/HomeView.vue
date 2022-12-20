<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small" @click="getRates">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <app-loader v-if="isLoading" />
    <div v-else class="row">
      <UserBill :bill="info?.bill" />
      <ExchangeRate />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import UserBill from "@/components/UserBill.vue";
import ExchangeRate from "@/components/ExchangeRate.vue";

export default defineComponent({
  components: { ExchangeRate, UserBill },
  data: () => ({
    isLoading: true,
    currency: null,
  }),
  methods: {
    async getRates() {
      this.isLoading = true;
      try {
        const data = await this.$store.dispatch("fetchRates");
        console.log(data);
      } catch (e) {
        this.$error(`${e}`);
      } finally {
        this.isLoading = false;
      }
    },
  },
  computed: {
    info() {
      return this.$store.getters.info;
    },
  },
  async mounted() {
    await this.getRates();
  },
});
</script>
