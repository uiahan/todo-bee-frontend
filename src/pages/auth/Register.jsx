import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthController from "../../controllers/AuthController";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const register = AuthController((state) => state.register);
  const error = AuthController((state) => state.error);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegiter = (e) => {
    e.preventDefault();
    register(form, navigate);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-lg w-5xl grid grid-cols-2 rounded-3xl">
        <div className="bg-blue-600 rounded-l-3xl flex justify-center items-center">
          <Link to="/" className="text-6xl text-white font-bold">
            Todobee
          </Link>
        </div>
        <div className="py-15 px-10">
          <h2 className="font-bold text-center text-4xl">Daftar</h2>
          <form className="mt-5" onSubmit={handleRegiter}>
            <div>
              <label className="text-gray-500">Nama</label>
              <label className="input validator w-full mt-1">
                <input
                  type="text"
                  placeholder="nama lengkap"
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="mt-3">
              <label className="text-gray-500">Email</label>
              <label className="input validator w-full mt-1">
                <input
                  type="email"
                  placeholder="mail@site.com"
                  required
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="mt-3">
              <label className="text-gray-500">Password</label>
              <label className="input validator w-full mt-1">
                <input
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  minLength={6}
                  type="password"
                  placeholder="Password"
                  required
                />
              </label>
            </div>
            {error && (
              <div className="mt-3">
                <p className="text-red-600">{error}</p>
              </div>
            )}
            <div className="mt-4">
              <button
                type="submit"
                className="text-white btn hover:bg-blue-700 bg-blue-600 w-full"
              >
                Daftar
              </button>
            </div>
            <div className="mt-2">
              <small className="text-gray-500">
                Sudah punya akun?{" "}
                <Link to="/login" className="text-blue-600 hover:text-blue-700">
                  Login sekarang
                </Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
