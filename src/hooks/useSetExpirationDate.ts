import { CollectionBeforeChangeHook } from 'payload/types';
import getCoupon from '../api/getCoupon';

const useSetExpirationDate: CollectionBeforeChangeHook = async ({data, req, operation}) => {
  if (operation === 'create') {
    const coupon = await getCoupon(data.coupon)

    const today = new Date();
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + coupon.expirationDays);

    data.acquisitionDate = today;
    data.expirationDate = expirationDate;
    return data;
  };
};

export default useSetExpirationDate;