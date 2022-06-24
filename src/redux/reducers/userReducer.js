import * as types from '../constants/userConstant';

const initialState = {
  users: [],
  user: null,
  isUserLoading: false,
};
const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_ALL_USER:
      return {
        ...state,
        users: payload,
      };
    case types.SET_USER_LOADING:
      return {
        ...state,
        isUserLoading: payload,
      };
    case types.SET_USER_ERROR:
      return {
        ...state,
        users: [],
        isUserLoading: true,
      };

    case types.UPDATE_USER:
      const newUsers = state.users.map((user) =>
        user._id === payload._id ? payload : user
      );
      return {
        ...state,
        users: newUsers,
      };

    default:
      return state;
  }
};

export default userReducer;
