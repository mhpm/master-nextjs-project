import type { Meta, StoryObj } from '@storybook/react';

import Modal from './modal';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Molecules/Modal',
  component: Modal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    show: true,
    title: 'Modal Title',
    children: <>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quam consequuntur consectetur minus voluptas sint exercitationem incidunt ut corrupti voluptates. Eligendi odit quaerat deserunt nisi nostrum maiores neque illo sapiente!</>
  },
};

