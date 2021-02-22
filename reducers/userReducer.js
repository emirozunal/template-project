const initState = {
  userData: null,
};

const userReducer = (state = initState, action) => {
  let userData;

  switch (action.type) {
    case "ADD_USER_INFORMATION":
      userData = action.payload;

      return { ...state, userData };

    default:
      return { ...state };
  }
};

export default userReducer;
