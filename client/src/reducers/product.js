const prodReducer = (state = { prodDatas: [] }, action) => {
  switch (action.type) {
    case "START_LOADING_PROD":
      return { ...state, isLoading: true };

    case "END_LOADING_PROD":
      return { ...state, isLoading: false };

    case "GET_ALL_PROD":
      return {
        ...state,
        prodDatas: action.payload.data,
      };

    case "GET_PROD_BY_USR":
      return {
        ...state,
        prodDatas: action.payload.data,
        currPage: action.payload.currPage,
        numbPages: action.payload.numbPages,
      };

    case "CREATE_PROD":
      return {
        ...state,
        prodDatas: action.payload.data,
        currPage: action.payload.currPage,
        numbPages: action.payload.numbPages,
      };

    case "UPDATE_PROD":
      return {
        ...state,
        prodDatas: state.prodDatas.map((prod) =>
          prod._id === action.payload._id ? action.payload : prod
        ),
      };

    case "DELETE_PROD":
      return {
        ...state,
        prodDatas: state.prodDatas.filter(
          (prod) => prod._id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default prodReducer;
