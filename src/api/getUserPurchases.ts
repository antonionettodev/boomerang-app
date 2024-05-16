import payload from 'payload';

const getUserPurchases = async (id: string) => {
  const purchases = await payload.find({
    collection: 'purchases',
    where: {
      user: { equals: id },
      status: { equals: 'inactive' },
    },
    depth: 1,
  });
  
  return purchases;
};

export default getUserPurchases;