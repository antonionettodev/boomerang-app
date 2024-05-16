import { CollectionConfig } from 'payload/types';
import registeredBy from '../fields/registeredBy';
import sector from '../fields/sector';
import title from '../fields/title';
import description from '../fields/description';
import useSetRegisteredBy from '../hooks/useSetRegisteredBy';
import useSetUpdatedBy from '../hooks/useSetUpdatedBy';
import updatedBy from '../fields/updatedBy';

const Coupons: CollectionConfig = {
  slug: 'coupons',
  admin: {
    useAsTitle: 'title',
  },
  versions: {
    maxPerDoc: 3,
  },
  fields: [
    title,
    description,
    sector,
    {
      name: 'value',
      type: 'number',
      min: 0,
      required: true,
      label: 'Valor',
      admin: {
        placeholder: 'Insira o valor',
      },
    },
    {
      name: 'expirationDays',
      type: 'number',
      label: 'Expiração do Cupom',
      min: 1,
      required: true,
      defaultValue: 30,
      admin: {
        placeholder: 'Dias até a expiração do cupom',
      },
    },
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

export default Coupons;