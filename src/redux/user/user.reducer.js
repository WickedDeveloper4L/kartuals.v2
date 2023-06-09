import userActionTypes from "./user.types";
const INITIAL_STATE = {
  currentUser: null,
  error: null,
  isLoading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        isLoading: true,
      };
    case userActionTypes.GOOGLE_SIGN_IN_START:
      return {
        ...state,
        isLoading: true,
      };
    case userActionTypes.SIGN_UP_START:
      return {
        ...state,
        isLoading: true,
      };
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
    case userActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
