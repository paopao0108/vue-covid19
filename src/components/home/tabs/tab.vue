<script>
import { h } from 'vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Tab',
  setup() {},
  render() {
    return h('li', { class: 'tab' }, this.$slots.default());
  }
};
</script>

<style></style>
