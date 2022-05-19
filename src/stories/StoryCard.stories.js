import Card from '../components/StoryCard';

export default {
  title: 'Components/Card',
  component: Card,
}

const Template = args => <Card {...args} />

export const Unselected = Template.bind({});
Unselected.args = {
  selected: false,
  hover: false,
}

export const Hover = Template.bind({});
Hover.args = {
  selected: false,
  hover: true,
}

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
  hover: true,
}