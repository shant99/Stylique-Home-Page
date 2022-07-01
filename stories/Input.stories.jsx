/* eslint-disable import/no-anonymous-default-export */
import Input from '../components/DesygnSystem/input/Input';

export default {
    title: 'Input' ,
    component: Input ,
    argTypes: {
        name: {
            name: 'name' ,
            type: { name: 'string', required: false } ,
            defaultValue: 'input name',
            description: 'input name' ,
        } ,
        type: {
            name: 'type' ,
            type: { name: 'string', required: false } ,
            defaultValue: 'input type',
            description: 'input type' ,
            defaultValue: 'text',
            control: {
                type: 'radio'
            } ,
            options: ['text' , 'email' , 'password' , 'tel' , 'number'  , 'search'] ,
            table: {
                type: { 
                  summary: 'input type', 
                  detail: 'input types' 
                },
              },
        },
        link: {
            name: 'link' ,
            type: { name: 'string', required: false } ,
            defaultValue: 'input link',
            description: 'input link' ,
            defaultValue: 'Forgot password?',
            control: {
                type: 'radio'
            } ,
            options: ['Forgot password?' , 'Forgot login?' ] ,
            table: {
                type: { 
                  summary: 'input type', 
                  detail: 'input types' 
                },
              },
        },
        error: {
            name: 'error' ,
            type: { name: 'string', required: false } ,
            defaultValue: 'input error',
            description: 'input error' ,
            defaultValue: 'Incorrect Email Address',
            control: {
                type: 'radio'
            } ,
            options: ['Incorrect Email Address' , 'Incorrect Password' ] ,
            table: {
                type: { 
                  summary: 'input error', 
                  detail: 'input error' 
                },
              },
        }
    }
}

const Template = (arg) => <Input {...arg}/>

export const Default = Template.bind({})
Default.args = {
    name: 'Hello World' ,
    type: 'text'
}


export const withLink = Template.bind({})
withLink.args = {
    name: 'Hello World' ,
    type: 'text',
    link: 'Forgot password?'
}

export const Error = Template.bind({})
Error.args = {
    name: 'Hello World' ,
    type: 'text',
    link: 'Forgot password?' ,
    error: 'Incorrect Email Address'
}