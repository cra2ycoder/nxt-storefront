import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { IParagraphTextProps } from '@ui/elements/typography/typings'
import { ParagraphText } from '@ui/elements/typography/ParagraphText'

export default {
  title: 'UI/Elements/Typography/Paragraph',
  component: ParagraphText,
} as Meta

const Template: Story<IParagraphTextProps> = args => <ParagraphText {...args} />

export const SingleLine = Template.bind({})
SingleLine.storyName = 'Single Line'
SingleLine.args = {
  text: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`,
}

export const MultiLine = Template.bind({})
MultiLine.storyName = 'Multi Lines'
MultiLine.args = {
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Phasellus rhoncus elementum magna, sit amet vestibulum mi varius a.
  Cras ac eros fermentum, ornare sem ut, lacinia nunc. Nunc massa diam,
  faucibus nec arcu sed, sagittis rhoncus arcu. Aliquam tempor faucibus justo,
  non pellentesque nisi suscipit in. Aliquam ut felis congue, ullamcorper tellus ut,
  maximus lorem. Maecenas semper, lorem ac euismod elementum, risus turpis eleifend lorem,
  non pharetra nunc nisl consectetur lorem. Vivamus ac luctus risus. Sed blandit sem a erat
  sodales vehicula. Duis mattis dignissim metus vitae congue. Curabitur elementum eros eu
  faucibus commodo. Proin eu dolor fermentum, consectetur mi ut, auctor mi.`,
}
