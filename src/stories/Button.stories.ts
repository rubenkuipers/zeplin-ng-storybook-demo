// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from './button.component';

export default {
  title: 'Design System/Button',
  component: Button,
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  component: Button,
  props: args,
});

export const Success = Template.bind({});
Success.args = {
  label: 'Button',
  type: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Button',
  type: 'danger',
};

export const Faded = Template.bind({});
Faded.args = {
  label: 'Button',
  type: 'faded',
};

export const Progress = Template.bind({});
Progress.args = {
  label: 'Button',
  type: 'progress',
};
