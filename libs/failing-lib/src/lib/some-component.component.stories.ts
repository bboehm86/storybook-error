import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SomeComponentComponent } from './some-component.component';

export default {
  title: 'SomeComponentComponent',
  component: SomeComponentComponent,
  decorators: [moduleMetadata({})],
} as Meta<SomeComponentComponent>;

const Template: Story<SomeComponentComponent> = (
  args: SomeComponentComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
