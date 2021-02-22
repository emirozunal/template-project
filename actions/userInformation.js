export const userInformation = (userData) => {
  // console.log(userData)
  return {
    type: "ADD_USER_INFORMATION",
    payload: userData,
  };
};
