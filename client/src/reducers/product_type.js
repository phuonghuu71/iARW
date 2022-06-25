const prodTypeReducer = (
  state = { prodTypeDatas: [], prodTypeData: {} },
  action
) => {
  switch (action.type) {
    case "GET_PROD_TYPES":
      return { ...state, prodTypeDatas: action.payload.data };

    case "GET_PROD_TYPE_BY_ID":
      return {
        ...state,
        prodTypeData: action.payload.data,
      };

    default:
      return state;
  }
};

export default prodTypeReducer;
