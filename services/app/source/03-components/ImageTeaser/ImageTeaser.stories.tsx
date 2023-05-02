import { Meta, StoryObj } from '@storybook/react';
import parse from 'html-react-parser';
import imageTeaserArgs from './image-teaser.yml';
import ImageTeaserComponent from './ImageTeaser';

const meta: Meta<typeof ImageTeaserComponent> = {
  title: 'Components/Image Teaser',
  component: ImageTeaserComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ImageTeaserComponent>;
const ImageTeaser: Story = {
  args: {
    ...imageTeaserArgs,
    image: parse(imageTeaserArgs.image),
    summary: parse(imageTeaserArgs.summary),
  },
};

export default meta;
export { ImageTeaser };
