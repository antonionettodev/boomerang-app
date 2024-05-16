import { Field } from 'payload/types';


const registeredBy = (relationTo: string): Field => {
  return {
    name: 'registeredBy',
    label: 'Criado Por',
    type: 'relationship',
    relationTo,
    admin: {
      readOnly: true,
    }
  };
};

export default registeredBy;