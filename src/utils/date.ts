import { DateTime } from "luxon";

export const now = () => {
  return DateTime.now().setZone("Asia/Ho_Chi_Minh").toJSDate();
};
