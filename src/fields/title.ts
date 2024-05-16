import { Field } from 'payload/types';

const title: Field =  {
  name: 'title',
  type: 'text',
  label: 'Título',
  required: true,
  maxLength: 128,
  admin: {
    placeholder: 'Insira o Título',
  },
};

export default title;