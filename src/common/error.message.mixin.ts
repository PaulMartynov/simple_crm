import { defineComponent } from 'vue';
import messages from '@/common/messages';

export default defineComponent({
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(fbError) {
      this.$error(messages[fbError] || fbError);
    },
  },
});
