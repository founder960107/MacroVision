import { Meta, StoryObj } from '@storybook/react';
import { Property } from 'csstype';
import Constrain from '../../02-layouts/Constrain/Constrain';
import getCssVariables from '../../06-utility/storybook/getCssVariables';
import styles from './shadows.module.css';

interface BoxShadowOptions {
  [elevation: number]: Property.BoxShadow;
}
const allVars = getCssVariables();
const boxShadows = allVars.reduce((allShadows, [key, value]) => {
  if (key.indexOf('--box-shadow') === 0) {
    const elevation = parseInt(key.substring(13));
    allShadows[elevation] = value;
  }
  return allShadows;
}, {} as BoxShadowOptions);

function BoxShadowDemo({
  boxShadow,
}: {
  boxShadow: BoxShadowOptions;
}): JSX.Element {
  return (
    <div className={styles['box-shadow']}>
      {Object.entries(boxShadow).map(
        ([elevation, boxShadowCss]: [string, Property.BoxShadow]) => (
          <div
            key={`box-shadow-${elevation}`}
            className={styles.item}
            style={{
              boxShadow: boxShadowCss,
            }}
          >
            <div className={styles.label}>Elevation Level: {elevation}</div>
          </div>
        ),
      )}
    </div>
  );
}

const meta: Meta<typeof BoxShadowDemo> = {
  title: 'Global/Box Shadows',
  component: BoxShadowDemo,
  decorators: [
    Component => (
      <Constrain modifierClasses="u-spacing-block-4">
        <Component />
      </Constrain>
    ),
  ],
  argTypes: {
    boxShadow: {
      table: {
        disable: true,
      },
    },
  },
};

type Story = StoryObj<typeof BoxShadowDemo>;
const BoxShadows: Story = {
  args: {
    boxShadow: boxShadows,
  },
  storyName: 'Box Shadows',
};

export default meta;
export { BoxShadows };
