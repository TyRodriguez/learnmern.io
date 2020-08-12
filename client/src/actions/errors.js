//will call to dispatch actions to the reducer
export const setErrors = error => ({
  type: "SET_ERRORS",
  error
});
export const resetErrors = () => ({
  type: "RESET_ERRORS"
});
