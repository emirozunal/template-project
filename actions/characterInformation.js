export const characterInformation = (characterData) => {
  // console.log(characterData)
  return {
    type: "ADD_CHARACTER_INFORMATION",
    payload: characterData,
  };
};
