import payload from 'payload';

const getUser = async (id: string | number) => {
  const user = await payload.findByID({
    collection: 'users',
    id
  });

  return user;
};

export default getUser;