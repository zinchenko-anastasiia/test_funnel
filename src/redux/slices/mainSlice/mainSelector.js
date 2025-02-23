export const userGender = (state) => state.mainReducer.user.gender;
export const userLookingFor = (state) => state.mainReducer.user.lookingFor;
export const userAgreement = (state) => state.mainReducer.user.agreement;
export const userEmail = (state) => state.mainReducer.user.email;

export const quizeQuestion1 = (state) =>
  state.mainReducer.user.finalQuiz.question1;
export const quizeQuestion2 = (state) =>
  state.mainReducer.user.finalQuiz.question2;
export const quizeQuestion3 = (state) =>
  state.mainReducer.user.finalQuiz.question3;
