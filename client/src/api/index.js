import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

// sign up and login with google
export const user_auth = (formData) => API.post("/user/user_auth", formData);
export const getUsers = () => API.get("/user");
export const updateRole = (id, role) => API.patch(`/user/role/${id}`, role);

// product type
export const getProdTypes = () => API.get(`/product_type`);
export const getProdTypeById = (id) => API.get(`/product_type/${id}`);

// product
export const getProds = () => API.get("/product");

export const getProdsByUsr = (prodUsr) =>
  API.get(`/product/usr/`, {
    params: { prodUsr: prodUsr },
  });

export const createProduct = (newProd) => API.post(`/product`, newProd);

export const updateProduct = (updatedProd, id) =>
  API.patch(`/product/${id}`, updatedProd);

export const deleteProduct = (id) => API.delete(`/product/${id}`, id);

export const changeProductStatus = (status, id) =>
  API.patch(`/product/status/${id}`, status);

export const updateView = (id) => API.patch(`product/update_view/${id}`);

export const searchProducts = (name, type, popular, latest, origin) =>
  API.get(`/product/search`, {
    params: {
      name: name,
      type: type,
      popular: popular,
      latest: latest,
      origin: origin,
    },
  });

// process
export const getProcessByProd = (prod) => API.get(`/process/${prod}`);

export const createProcess = (newProc) => API.post(`/process`, newProc);

export const updateProcess = (updatedProc, id) =>
  API.patch(`/process/${id}`, updatedProc);

export const deleteProcess = (id) => API.delete(`/process/${id}`, id);
