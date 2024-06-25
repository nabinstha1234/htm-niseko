import {} from '@storybook/react';

import type { Meta, StoryFn } from '@/types/public-types';

import type { ButtonProps } from './index';
import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio', options: ['primary', 'secondary', 'outline'] },
    },
    size: { control: { type: 'radio', options: ['sm', 'md', 'lg'] } },
    disabled: { control: { type: 'boolean' } },
  },
} satisfies Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  variant: 'secondary',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Outline Button',
  variant: 'outline',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small Button',
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large Button',
  size: 'lg',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
};
