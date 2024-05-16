import { CollectionBeforeChangeHook } from "payload/types";
import errorMessages from "../utilities/errorMessages";
import getUser from "../api/getUser";
import getCoupon from "../api/getCoupon";
import updateUserScore from "../api/updateUserScore";

const useChargeUserScore: CollectionBeforeChangeHook = async ({data, operation}) => {
  if(operation === 'create') {
    const user = await getUser(data.user);

    const {value} = await getCoupon(data.coupon);

    if(value > user.score) {
      throw new Error(errorMessages.INSUFFICIENT_SCORE);
    };

    const newScore = user.score - value;

    updateUserScore(data.user, newScore);
  };
};

export default useChargeUserScore;
