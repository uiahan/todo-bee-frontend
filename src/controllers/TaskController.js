import axios from "axios";
import { create } from "zustand";

const api = import.meta.env.VITE_API_URL;

const TaskController = create((set) => ({
  task: [],
  error: null,
  success: null,

  getTask: async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(`${api}/task/index`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      set({ task: res.data.task, error: null });
    } catch (err) {
      const message =
        err.response?.data?.message || "Gagal mengambil data todo";
      set({ error: message, task: [] });
    }
  },

  storeTask: async (formData, navigate, id = null) => {
    try {
      const token = localStorage.getItem("token");

      if (id) {
        formData.append("_method", "PUT");
      }

      const res = await axios.post(
        id ? `${api}/task/update/${id}` : `${api}/task/store`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      set({
        success: res.data.message,
        error: null,
      });

      navigate && navigate("/todo-list");
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Gagal menyimpan task. Silahkan coba lagi";
      set({ error: message, success: null });
    }
  },

  deleteTask: async (id) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.delete(`${api}/task/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      set((state) => ({
        task: state.task.filter((task) => task.id !== id),
        success: res.data.message,
        error: null,
      }));
    } catch (err) {
      const message = err.response?.data?.message || "Gagal menghapus task";
      set({ error: message });
    }
  },

  statusDone: async (id) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.put(`${api}/task/status/done/${id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      set((state) => ({
        task: state.task.map((t) =>
          t.id === id ? { ...t, status: "done" } : t
        ),
      }));

      return res.data;
    } catch (err) {
      const message =
        err.response?.data?.message || "Gagal mengubah status task";
      set({ error: message });
    }
  },

  statusPending: async (id) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.put(`${api}/task/status/pending/${id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      set((state) => ({
        task: state.task.map((t) =>
          t.id === id ? { ...t, status: "pending" } : t
        ),
      }));

      return res.data;
    } catch (err) {
      const message =
        err.response?.data?.message || "Gagal mengubah status task";
      set({ error: message });
    }
  },

  clearMessage: () => set({ error: null, success: null }),
}));

export default TaskController;
