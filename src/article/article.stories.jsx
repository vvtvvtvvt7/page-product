import React from "react";
import Article from "./article";

export default {
    title: 'Артикул (Article)',
}
const Template = (args) => <Article {...args} />;

export const defaultButton  = Template.bind({});

defaultButton.args = {
    children: '3432343',
}
