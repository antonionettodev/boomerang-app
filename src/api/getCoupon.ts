import payload from 'payload';

const getCoupon = async (id: string | number) => {
  const coupon = await payload.findByID({
    collection: 'coupons',
    id
  });

  return coupon;
};

export default getCoupon;