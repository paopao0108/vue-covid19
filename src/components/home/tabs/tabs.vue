<script>
import { h } from 'vue';
import Content from '@/components/home/tabs/content.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Tabs',
  props: {
    currIndex: {
      type: String || Number,
      default: '1'
    }
  },
  setup() {},
  render() {
    return h('div', { class: 'tabs' }, [h('ul', { class: 'tabs-header' }, this.$slots.default()), <Content />]);
  }
};
</script>

<style></style>
