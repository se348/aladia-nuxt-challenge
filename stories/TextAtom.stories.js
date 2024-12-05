import TextAtom from '../components/atoms/TextAtom.vue';

export default {
  title: 'Atoms/TextAtom',
  component: TextAtom,
  argTypes: {
    text: { control: 'text' },
    customClass: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { TextAtom },
  setup() {
    return { args };
  },
  template: '<TextAtom v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  text: 'Hello, Storybook!',
  customClass: '',
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  text: 'Hello, Storybook!',
  customClass: 'text-red-500',
};