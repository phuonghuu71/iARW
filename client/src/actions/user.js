import * as api from "../api/index.js";

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: "START_LOADING_USR",
    });

    const { data } = await api.getUsers();

    dispatch({
      type: "GET_ALL_USR",
      payload: {
        data: data,
      },
    });

    dispatch({
      type: "END_LOADING_USR",
    });
  } catch (err) {
    console.error(err);
  }
};

export const updateRole = (id, role) => async (dispatch) => {
  try {
    const { data } = await api.updateRole(id, role);

    console.log(data);

    dispatch({
      type: "UPDATE_ROLE",
      payload: data,
    });
  } catch (err) {
    console.error(err);
  }
};
