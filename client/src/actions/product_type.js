import * as api from "../api/index.js";

export const getProdTypes = () => async (dispatch) => {
  try {
    const { data } = await api.getProdTypes();

    dispatch({
      type: "GET_PROD_TYPES",
      payload: {
        data,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getProdTypeById = (id) => async (dispatch) => {
  try {
    const { data } = await api.getProdTypeById(id);

    dispatch({
      type: "GET_PROD_TYPE_BY_ID",
      payload: {
        data,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
