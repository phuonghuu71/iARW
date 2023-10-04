const procReducer = (state = { procDatas: [] }, action) => {
  switch (action.type) {
    case "START_LOADING_PROC":
      return { ...state, isLoading: true };

    case "END_LOADING_PROC":
      return { ...state, isLoading: false };

    case "GET_ALL_PROC_BY_PROD":
      return {
        ...state,
        procDatas: action.payload.data,
      };

    case "CREATE_PROC":
      return {
        ...state,
        procDatas: action.payload.data,
      };

    case "UPDATE_PROC":
      return {
        ...state,
        procDatas: state.procDatas.map((proc) =>
          proc._id === action.payload._id ? action.payload : proc
        ),
      };

    case "DELETE_PROC":
      return {
        ...state,
        procDatas: state.procDatas.filter(
          (proc) => proc._id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default procReducer;
