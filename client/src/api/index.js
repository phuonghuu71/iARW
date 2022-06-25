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

// product type
export const getProdTypes = () => API.get(`/product_type`);
export const getProdTypeById = (id) => API.get(`/product_type/${id}`);

// product
export const getProdsByUsr = (prodUsr) =>
  API.get(`/product/usr/`, {
    params: { prodUsr: prodUsr },
  });

export const createProduct = (newProd) => API.post(`/product`, newProd);

export const updateProduct = (updatedProd, id) =>
  API.patch(`/product/${id}`, updatedProd);

export const deleteProduct = (id) => API.delete(`/product/${id}`, id);
