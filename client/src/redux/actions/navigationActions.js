import { IS_OPEN } from "../types";

const setIsOpen = (value) => ({
  type: IS_OPEN,
  payload: value,
});

export { setIsOpen };
