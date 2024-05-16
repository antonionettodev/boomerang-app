import { Field } from 'payload/types';
import { formatCPF, removePunctuationMarks } from '../utilities/formatters';
import { validateCPF } from '../utilities/validators';

const cpf: Field = {
  name: 'cpf',
  type: 'text',
  label: 'CPF',
  unique: true,
  minLength: 11,
  required: true,
  admin: {
    placeholder: 'Insira o CPF',
  },
  validate: val => validateCPF(val),
  hooks: {
    beforeChange: [({ value }) => (value ? removePunctuationMarks(value) : value)],

    afterRead: [({ value }) => (value ? formatCPF(value) : value)],
  },
};

export default cpf;