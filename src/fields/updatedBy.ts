import { Field } from 'payload/types';

const updatedBy = (relationTo: string): Field => {
  return {
    name: 'updatedBy',
    label: 'Atualizado Por',
    type: 'relationship',
    relationTo,
    admin: {
      readOnly: true,
    },
  };
};

export default updatedBy;