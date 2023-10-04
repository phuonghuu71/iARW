import * as api from "../api/index.js";

export const getProcByProds = (prod) => async (dispatch) => {
  try {
    dispatch({
      type: "START_LOADING_PROC",
    });

    const { data } = await api.getProcessByProd(prod);

    dispatch({
      type: "GET_ALL_PROC_BY_PROD",
      payload: {
        data: data,
      },
    });

    dispatch({
      type: "END_LOADING_PROC",
    });
  } catch (err) {
    console.error(err);
  }
};

export const createProcess = (proc) => async (dispatch) => {
  console.log(proc);

  try {
    dispatch({
      type: "START_LOADING_PROC",
    });

    const { data } = await api.createProcess(proc);

    console.log(data);

    dispatch({
      type: "CREATE_PROC",
      payload: {
        data: data,
      },
    });

    dispatch({
      type: "END_LOADING_PROC",
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateProcess = (updatedProc, id) => async (dispatch) => {
  const { data } = await api.updateProcess(updatedProc, id);

  console.log(data);

  try {
    dispatch({
      type: "UPDATE_PROC",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteProcess = (id) => async (dispatch) => {
  try {
    await api.deleteProcess(id);

    dispatch({
      type: "DELETE_PROC",
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};
