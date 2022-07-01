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
            defaultValue: false,
            description: 'button disabled' ,
            control: {
                type: 'radio'
            } ,
            options: [false , true  ] ,
            table: {
                type: { 
                  summary: 'button size', 
                  detail: 'button size is 4' 
                },
              },
        },
        outline: {
            name: 'outline' ,
            type: { name: 'string', required: false } ,
            defaultValue: '',
            description: 'button outline border black or white' ,
            control: {
                type: 'radio'
            } ,
            options: ['outlineBlack' , 'outlineWhite' ] ,
            table: {
                type: { 
                  summary: 'button outline', 
                  detail: 'button outline border black - bg white , outline white  - bg black' 
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

export const OutlineBlack = Template.bind({})
OutlineBlack.args = {
    name: 'button' ,
    size: 'large' , 
    icon: 'left' , 
    outline: 'outlineBlack'
}