import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import AuthController from "../../controllers/AuthController";

function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: null,
  });
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const [loading, setLoading] = useState(true); // <- state loading

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/user/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data);
        if (res.data.avatar) {
          setAvatarPreview(
            `${import.meta.env.VITE_API_URL_IMAGE}/storage/${res.data.avatar}`
          );
        }
      } catch (err) {
        console.error("Gagal memuat profil", err);
      } finally {
        setLoading(false); // ← selesai loading
      }
    };

    fetchUser();
  }, []);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatarFile(file);
    setAvatarPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("name", user.name);
      formData.append("email", user.email);
      if (avatarFile) {
        formData.append("avatar", avatarFile);
      }

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/update`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const updatedUser = response.data.user;

      localStorage.setItem("user", JSON.stringify(updatedUser));
      const updateUser = AuthController.getState().setUser;
      updateUser(updatedUser);

      Swal.fire("Sukses", "Profil berhasil diperbarui", "success");
    } catch {
      Swal.fire("Gagal", "Terjadi kesalahan saat update", "error");
    }
  };

  const handleDeleteAvatar = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${import.meta.env.VITE_API_URL}/user/delete-avatar`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const currentUser = AuthController.getState().user;
      const updatedUser = { ...currentUser, avatar: null };

      localStorage.setItem("user", JSON.stringify(updatedUser));
      const updateUser = AuthController.getState().setUser;
      updateUser(updatedUser);

      setAvatarPreview(null);
      setAvatarFile(null);

      Swal.fire("Berhasil", "Avatar dihapus", "success");
    } catch {
      Swal.fire("Gagal", "Gagal menghapus avatar", "error");
    }
  };

  return (
    <>
      <div className="bg-white mb-6 py-5 px-5 rounded-md">
        <h1 className="font-bold text-2xl text-gray-600">My Profile</h1>
      </div>

      <div className="grid grid-cols-3">
        <div className="bg-white mb-6 py-5 px-5 rounded-md min-h-[300px] flex items-center justify-center" data-aos="fade-up">
          {loading ? (
            <span className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></span>
          ) : (
            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-3">
                <img
                  src={avatarPreview || "/src/assets/profile-default.png"}
                  alt="avatar"
                  className="object-cover rounded h-56 w-full shadow"
                />
              </div>

              <div className="mb-3">
                <label className="block text-gray-600 mb-1">Name</label>
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  className="w-full border px-3 py-1 rounded"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="block text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className="w-full border px-3 py-1 rounded"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="block text-gray-600 mb-1">Avatar</label>
                <input
                  type="file"
                  onChange={handleAvatarChange}
                  accept="image/*"
                  className="w-full border px-3 py-1 rounded"
                />
              </div>

              <div className="mb-3 flex space-x-3">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors px-3 py-1 rounded-sm"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={handleDeleteAvatar}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-medium transition-colors px-3 py-1 rounded-sm"
                >
                  Delete Avatar
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
