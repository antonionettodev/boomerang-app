import payload from "payload";

const updateUserScore = async (id: string | number, score: number) => {
  await payload.update({
    collection: 'users',
    id,
    data: {
      score
    },
  });
}

export default updateUserScore;