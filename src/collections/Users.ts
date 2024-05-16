import { CollectionConfig } from 'payload/types';
import name from '../fields/name';
import cpf from '../fields/cpf';
import getUserPurchases from '../api/getUserPurchases';
import errorMessages from '../utilities/errorMessages';

const Users: CollectionConfig = {
  slug: 'users',
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
  access: {
    create: () => true,
  },
  fields: [
    name,
    cpf,
    {
      name: 'oab',
      type: 'text',
      label: 'Nº OAB',
      maxLength: 12,
      required: true,
      admin: {
        placeholder: 'Insira o número da OAB',
      },
    },
    {
      name: 'score',
      type: 'number',
      label: 'Pontos',
      min: 0,
      // admin: {
      //   readOnly: true,
      // }
    },
  ],
  endpoints: [
    {
      path: '/:id/purchases',
      method: 'get',
      handler: async (req, res) => {
        const purchases = await getUserPurchases(req.params.id);
        if (purchases?.docs.length > 0) {
          res.status(200).send({ purchases });
        } else {
          res.status(404).send({ error: errorMessages.NOT_FOUND_PURCHASES });
        };
      },
    },
  ],
};

export default Users;