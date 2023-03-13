var s=Object.defineProperty;var r=(e,n)=>s(e,"name",{value:n,configurable:!0});import{j as a}from"./jsx-runtime-682dc757.js";import"./index-8a60c79c.js";import"./iframe-c7b713d2.js";const o=r(({primary:e=!1,label:n="Boop",size:l="small"})=>a("button",{style:{backgroundColor:e?"red":"blue",fontSize:l==="large"?"24px":"14px"},children:n}),"Button$1");try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"",name:"primary",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:{value:"Boop"},description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"",name:"primary",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:{value:"Boop"},description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}const B={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from 'ui';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
`,locationsMap:{primary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},secondary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},large:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},small:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}}}}},title:"Example/Button",component:o,argTypes:{backgroundColor:{control:"color"}}},t=r(e=>a(o,{...e}),"Template"),i=t.bind({});i.args={primary:!0,label:"Button"};const c=t.bind({});c.args={label:"Button"};const p=t.bind({});p.args={size:"large",label:"Button"};const d=t.bind({});d.args={size:"small",label:"Button"};const b=["Primary","Secondary","Large","Small"];export{p as Large,i as Primary,c as Secondary,d as Small,b as __namedExportsOrder,B as default};
//# sourceMappingURL=Button.stories-fef3f54b.js.map
