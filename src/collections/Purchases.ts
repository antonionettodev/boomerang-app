import { CollectionConfig } from 'payload/types';
import title from '../fields/title';
import description from '../fields/description';
import registeredBy from '../fields/registeredBy';
import status from '../fields/status';
import date from '../fields/date';
import useSetExpirationDate from '../hooks/useSetExpirationDate';
import useChargeUserScore from '../hooks/useChargeUserScore';
import useSetRegisteredBy from '../hooks/useSetRegisteredBy';
import useSetUpdatedBy from '../hooks/useSetUpdatedBy';
import updatedBy from '../fields/updatedBy';

const Purchases: CollectionConfig = {
  slug: 'purchases',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    title,
    description,
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      label: 'Usuário',
    },
    {
      name: 'coupon',
      type: 'relationship',
      relationTo: 'coupons',
      required: true,
      label: 'Cupom',
    },
    status,
    date('acquisitionDate', 'Data de Compra', true, 'Data de compra do cupom'),
    date('expirationDate', 'Data de Expiração', true, 'Data de expiração do cupom'),
    registeredBy('operators'),
    updatedBy('operators'),
  ],
  hooks: {
    beforeChange: [
      useSetRegisteredBy,
      useSetExpirationDate,
      useChargeUserScore,
      useSetUpdatedBy,
    ]
  }
};

export default Purchases;