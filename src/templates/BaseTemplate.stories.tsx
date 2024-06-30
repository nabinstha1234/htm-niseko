import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { NextIntlClientProvider } from 'next-intl';

import messages from '@/locales/en.json';

import { BaseTemplate } from './BaseTemplate';

const meta = {
  title: 'Example/BaseTemplate',
  component: BaseTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={messages}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
} satisfies Meta<typeof BaseTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseWithReactComponent = {
  args: {
    children: <div>Children node</div>,
  },
} satisfies Story;

export const BaseWithString = {
  args: {
    children: 'String',
  },
} satisfies Story;

export const BaseWithHomeLink: Story = {
  args: {
    children: <div>Children node</div>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByText('Link 1');

    await userEvent.click(link);
  },
} satisfies Story;
