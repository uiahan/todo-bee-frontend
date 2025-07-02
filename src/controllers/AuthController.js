import axios from "axios";
import { create } from "zustand";

const baseUrl = import.meta.env.VITE_API_URL;

const AuthController = create((set) => ({
  user: null,
  token: null,
  error: null,

  login: async (email, password, navigate) => {
    try {
      const res = await axios.post(`${baseUrl}/auth/login`, {
        email,
        password,
      });
      const { token, user } = res.data;
      set({ token, user, error: null });
      localStorage.setItem("token", token);

      navigate("/dashboard");
    } catch (err) {
      set({ error: err.response?.data?.message || "Terjadi kesalahan" });
    }
  },

  logout: () => {
    set({ user: null, token: null });
    localStorage.removeItem("token");
  },

  register: async (data, navigate) => {
    try {
      const res = await axios.post(`${baseUrl}/auth/register`, data);

      const user = res.data.user;
      set({ user, error: null });
      navigate('/login');
    } catch (err) {
      const errorMsg =
      err.response?.data?.errors?.email?.[0] ||
      err.response?.data?.errors?.password?.[0] ||
      err.response?.data?.message || "Terjadi kesalahan saat register";

      set({ error: errorMsg });
    }
  },
  
}));

export default AuthController;
