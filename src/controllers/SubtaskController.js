import axios from "axios";
import { create } from "zustand";

const api = import.meta.env.VITE_API_URL;

const SubtaskController = create((set) => ({
    subtask: [],
    error: null,
    success: null,

    deleteSubtask: async (id) => {
        try {
            const token = localStorage.getItem("token");

            const res = await axios.delete(`${api}/subtask/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            set((state) => ({
                subtask: state.subtask.filter((subtask) => subtask.id !== id),
                success: res.data.message,
                error: null,
            }));
        } catch (err) {
            const message = err.response?.data?.message || "Gagal menghapus subtask";
            set({ error: message });
        }
    },

    clearMessage: () => set({ error: null, success: null }),
}));

export default SubtaskController;