const initState = {
  characterData: null,
};

const characterReducer = (state = initState, action) => {
  let characterData;

  switch (action.type) {
    case "ADD_CHARACTER_INFORMATION":
      characterData = action.payload;
      
      return { ...state, characterData };

    default:
      return { ...state };
  }
};

export default characterReducer;
