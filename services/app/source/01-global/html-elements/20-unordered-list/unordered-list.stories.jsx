import { Meta, Story } from '@storybook/react';

const settings: Meta = {
  title: 'Global/HTML Elements/Unordered List',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const UnorderedList: Story = () => {
  return (
    <>
      <ul>
        <li>This is a list item in an unordered list</li>
        <li>
          An unordered list is a list in which the sequence of items is not
          important. Sometimes, an unordered list is a bulleted list. And this
          is a long list item in an unordered list that can wrap onto a new
          line.{' '}
        </li>
        <li>
          Lists can be nested inside of each other
          <ul>
            <li>This is a nested list item</li>
            <li>
              This is another nested list item in an unordered list
              <ul>
                <li>This is a nested list item</li>
                <li>
                  This is another nested list item in an unordered list
                  <ul>
                    <li>This is a nested list item</li>
                    <li>
                      This is another nested list item in an unordered list
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>This is the last list item</li>
      </ul>
      <ul>
        <li>
          <p>
            This is a paragraph within a list item in a different unordered
            list.
          </p>
          <p>This is another paragraph in this list item.</p>
        </li>
        <li>
          <p>
            This is a new paragraph within a different list item in the same
            unordered list.
          </p>
        </li>
      </ul>
    </>
  );
};

export default settings;
export { UnorderedList };
