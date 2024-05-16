import { CollectionBeforeChangeHook } from 'payload/types';

const useSetUpdatedBy: CollectionBeforeChangeHook = ({data, req, operation}) => {
  if(operation === 'update') {
    if(req.user) {
      data.updatedBy = req.user.id;
      return data;
    }
  };
}

export default useSetUpdatedBy;