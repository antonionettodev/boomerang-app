import { Field } from 'payload/types';

const description: Field = {
  name: 'description',
  type: 'textarea',
  maxLength: 512,
  label: 'Descrição',
  admin: {
    placeholder: 'Insira a descrição',
  },
};

export default description;