/* eslint-disable import/no-anonymous-default-export */
import Button from '../components/DesygnSystem/button/Button';

export default {
    title: 'Button' ,
    component: Button ,
    argTypes: {
        name: {
            name: 'name' ,
            type: { name: 'string', required: false } ,
            defaultValue: 'button',
            description: 'button name' ,
            control: {
                type: 'radio'
            } ,
            options: ['click me' ] ,
            table: {
                type: { 
                  summary: 'button size', 
                  detail: 'button size is 4' 
                },
              },
        },
        size: {
            name: 'size' ,
            type: { name: 'string', required: false } ,
            defaultValue: 'extraSmall',
            description: 'button size' ,
            control: {
                type: 'radio'
            } ,
            options: ['extraSmall' , 'small' , 'medium' , 'large'] ,
            table: {
                type: { 
                  summary: 'button size', 
                  detail: 'button size is 4' 
                },
              },
        },
        icon: {
            name: 'icon' ,
            type: { name: 'string', required: false } ,
            defaultValue: 'none',
            description: 'icon clock' ,
            control: {
                type: 'radio'
            } ,
            options: ['none' , 'left' , 'right' ] ,
            table: {
                type: { 
                  summary: 'button size', 
                  detail: 'button size is 4' 
                },
              },
        },
        disabled: {
            name: 'disabled' ,
            type: { name: 'boolean', required: false } ,
            defaultValue: 'false',
            description: 'button disabled' ,
            control: {
                type: 'radio'
            } ,
            options: [true , false  ] ,
            table: {
                type: { 
                  summary: 'button size', 
                  detail: 'button size is 4' 
                },
              },
        }
    }
}

const Template = (arg) => <Button {...arg}/>

export const Default = Template.bind({})
Default.args = {
    name: 'Press me' ,
    size: 'medium' 
}

export const Large = Template.bind({})
Large.args = {
    name: 'button' ,
    size: 'large' , 
    icon: 'left'
}

export const DisabledButton = Template.bind({})
DisabledButton.args = {
    name: 'button' ,
    size: 'large' , 
    icon: 'left' , 
    disabled: true
}