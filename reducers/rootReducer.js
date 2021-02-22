const initState = {
  username: "emir",
  lastname: "",
};

const rootReducer = (state = initState, action) => {
  let username;
  let lastname;

  switch (action.type) {
    case "USER_LOG_IN":
      username = action.payload;
      return { ...state, username };

    case "USER_SIGN_UP":
      lastname = action.payload;
      return { ...state, lastname };

    default:
      return { ...state };
  }
};

export default rootReducer;
