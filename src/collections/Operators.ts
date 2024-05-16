import { CollectionConfig } from 'payload/types';
import name from '../fields/name';
import cpf from '../fields/cpf';
import status from '../fields/status';
import sector from '../fields/sector';
import registeredBy from '../fields/registeredBy';
import useSetRegisteredBy from '../hooks/useSetRegisteredBy';
import updatedBy from '../fields/updatedBy';
import useSetUpdatedBy from '../hooks/useSetUpdatedBy';

const Operators: CollectionConfig = {
  slug: 'operators',
  auth: {
    tokenExpiration: 28800,
    verify: true,
    lockTime: 1000 * 3600,
    maxLoginAttempts: 5,
  },
  admin: {
    useAsTitle: 'name',
  },
  versions: {
    maxPerDoc: 3,
  },
  fields: [
    name,
    cpf,
    status,
    sector,
    registeredBy('admins'),
    updatedBy('admins'),
  ],
  hooks: {
    beforeChange: [
      useSetRegisteredBy,
      useSetUpdatedBy,
     ],
  },
};

export default Operators;