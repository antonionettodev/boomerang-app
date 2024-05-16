import { Field } from 'payload/types';

const name: Field =  {
  name: 'name',
  type: 'text',
  label: 'Nome',
  required: true,
  maxLength: 64,
  admin: {
    placeholder: 'Insira o nome',
  },
};

export default name;