import * as api from "../api/index.js";

export const searchProds =
  (name, type, popular, latest, origin) => async (dispatch) => {
    try {
      const { data } = await api.searchProducts(
        name,
        type,
        popular,
        latest,
        origin
      );

      dispatch({
        type: "START_LOADING_PROD",
      });

      dispatch({
        type: "GET_ALL_PROD",
        payload: {
          data: data,
        },
      });

      dispatch({
        type: "END_LOADING_PROD",
      });
    } catch (err) {
      console.error(err);
    }
  };

export const getProds = () => async (dispatch) => {
  try {
    dispatch({
      type: "START_LOADING_PROD",
    });

    const { data } = await api.getProds();

    dispatch({
      type: "GET_ALL_PROD",
      payload: {
        data: data,
      },
    });

    dispatch({
      type: "END_LOADING_PROD",
    });
  } catch (err) {
    console.error(err);
  }
};

export const getProdsByUsr = (prodUsr) => async (dispatch) => {
  const { _id } = prodUsr;

  try {
    dispatch({
      type: "START_LOADING_PROD",
    });

    const {
      data: { products },
    } = await api.getProdsByUsr(_id);

    dispatch({
      type: "GET_PROD_BY_USR",
      payload: {
        data: products,
      },
    });

    dispatch({
      type: "END_LOADING_PROD",
    });
  } catch (err) {
    console.error(err);
  }
};

export const createProduct = (prod) => async (dispatch) => {
  try {
    dispatch({
      type: "START_LOADING_PROD",
    });

    const {
      data: { products, currPage, numbPages },
    } = await api.createProduct(prod);

    dispatch({
      type: "CREATE_PROD",
      payload: {
        data: products,
      },
    });

    dispatch({
      type: "END_LOADING_PROD",
    });
  } catch (err) {
    console.log(err);
  }
};

export const changeProductStatus = (status, id) => async (dispatch) => {
  const { data } = await api.changeProductStatus(status, id);

  console.log(data);

  try {
    dispatch({
      type: "CHANGE_PROD_STAT",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateProduct = (updatedProd, id) => async (dispatch) => {
  const { data } = await api.updateProduct(updatedProd, id);

  console.log(data);

  try {
    dispatch({
      type: "UPDATE_PROD",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await api.deleteProduct(id);

    dispatch({
      type: "DELETE_PROD",
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};
