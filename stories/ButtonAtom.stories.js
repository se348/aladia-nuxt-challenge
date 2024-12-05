import ButtonAtom from "../components/atoms/ButtonAtom.vue";


export default {
  title: 'Atoms/ButtonAtom',
  component: ButtonAtom,
  argTypes: {
    isPrimary: { control: 'boolean' },
    type: { control: 'text' },
    customClass: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { ButtonAtom },
  setup() {
    return { args };
  },
  template: '<ButtonAtom v-bind="args">Button</ButtonAtom>',
});

export const Primary = Template.bind({});
Primary.args = {
  isPrimary: true,
  type: 'button',
  customClass: '',
};

export const Secondary = Template.bind({});
Secondary.args = {
  isPrimary: false,
  type: 'button',
  customClass: '',
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  isPrimary: true,
  type: 'button',
  customClass: 'bg-red-500 text-white',
};