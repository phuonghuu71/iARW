const userReducer = (state = { userDatas: [] }, action) => {
  switch (action.type) {
    case "START_LOADING_USR":
      return { ...state, isLoading: true };

    case "END_LOADING_USR":
      return { ...state, isLoading: false };

    case "GET_ALL_USR":
      return {
        ...state,
        userDatas: action.payload.data,
      };

    case "UPDATE_ROLE":
      return {
        ...state,
        userDatas: state.userDatas.map((usr) =>
          usr._id === action.payload._id ? action.payload : usr
        ),
      };

    default:
      return state;
  }
};

export default userReducer;
