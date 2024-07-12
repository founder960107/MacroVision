import { Meta, StoryObj } from '@storybook/react';
import parse from 'html-react-parser';
import Constrain from '../../02-layouts/Constrain/Constrain';
import { Select } from './FormItem';
import withGroupArgs from './select-with-groups.yml';
import selectArgs from './select.yml';

const meta: Meta<typeof Select> = {
  title: 'Components/Form Item/Select',
  component: Select,
  decorators: [
    Component => (
      <Constrain modifierClasses="u-spacing-block-4">
        <Component />
      </Constrain>
    ),
  ],
  args: {
    labelDisplay: 'before',
    descriptionDisplay: 'after',
    isDisabled: false,
    isFullWidth: false,
    isRequired: false,
    description: 'The description for this form field.',
    errors: '',
    prefix: '',
    suffix: '',
  },
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};

type Story = StoryObj<typeof Select>;
const Default: Story = {
  args: {
    ...selectArgs,
    children: parse(selectArgs.children),
  },
};
const WithGroups: Story = {
  args: {
    ...withGroupArgs,
    children: parse(withGroupArgs.children),
  },
};

export default meta;
export { Default, WithGroups };
