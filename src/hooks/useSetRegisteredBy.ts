import { CollectionBeforeChangeHook } from 'payload/types';

const useSetRegisteredBy: CollectionBeforeChangeHook = ({data, req, operation}) => {
  if(operation === 'create') {
    if(req.user) {
      data.registeredBy = req.user.id;
      return data;
    }
  };
}

export default useSetRegisteredBy;