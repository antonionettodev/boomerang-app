import { CollectionConfig } from 'payload/types'
import cpf from '../fields/cpf'
import name from '../fields/name'
import updatedBy from '../fields/updatedBy';
import useSetUpdatedBy from '../hooks/useSetUpdatedBy';

const Admins: CollectionConfig = {
  slug: 'admins',
  auth: true,
  admin: {
    useAsTitle: 'name',
  },
  versions: {
    maxPerDoc: 3,
  },
  fields: [
   name,
   cpf,
  ],
  hooks: {
    beforeChange: [
      useSetUpdatedBy,
    ],
  },
};

export default Admins;
