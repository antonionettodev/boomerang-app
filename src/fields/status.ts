import { Field } from 'payload/types';

const status: Field =  {
  name: 'status',
  type: 'select',
  defaultValue: 'active',
  options: [
    {
      label: 'Ativo',
      value: 'active',
    },
    {
      label: 'Inativo',
      value: 'inactive',
    },
  ],
};

export default status;

