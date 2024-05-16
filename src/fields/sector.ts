import { Field } from 'payload/types';

const sector: Field = {
  name: 'sector',
  type: 'relationship',
  label: 'Setor',
  relationTo: 'sectors',
  required: true,
};

export default sector;