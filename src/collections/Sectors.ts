import { CollectionConfig } from 'payload/types';
import title from '../fields/title';
import registeredBy from '../fields/registeredBy';
import updatedBy from '../fields/updatedBy';
import useSetRegisteredBy from '../hooks/useSetRegisteredBy';
import useSetUpdatedBy from '../hooks/useSetUpdatedBy';

const Sectors: CollectionConfig = {
  slug: 'sectors',
  admin: {
    useAsTitle: 'title'
  },
  versions: {
    maxPerDoc: 3,
  },
  fields: [
    title,
    registeredBy('admins'),
    updatedBy('admins'),
  ],
  hooks: {
    beforeChange: [
      useSetRegisteredBy,
      useSetUpdatedBy,
    ]
  }
};

export default Sectors;