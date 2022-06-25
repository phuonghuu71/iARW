import * as api from "../api/index.js";

export const user_auth = (req, navigate) => async (dispatch) => {
  try {
    console.log(req);
    const { data } = await api.user_auth(req);
    dispatch({
      type: "AUTH",
      data,
    });
    navigate("/dashboard", { replace: true });
  } catch (error) {
    console.log(error);
  }
};
