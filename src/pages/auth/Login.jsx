import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthController from "../../controllers/AuthController";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = AuthController((state) => state.login);
  const error = AuthController((state) => state.error);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Login...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      await login(email, password, navigate);
      Swal.fire({
        icon: "success",
        title: "Berhasil Login",
        text: "Selamat datang kembali",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Gagal Login",
        text: err.response?.data?.message || "Email atau password salah",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg w-5xl grid grid-cols-2 rounded-3xl">
        <div className="bg-blue-600 rounded-l-3xl flex justify-center items-center">
          <Link to="/" className="text-6xl text-white font-bold">
            Todobee
          </Link>
        </div>
        <div className="py-15 px-10">
          <h2 className="font-bold text-center text-4xl">Login</h2>
          <form className="mt-5" onSubmit={handleLogin}>
            <div>
              <label className="text-gray-500">Email</label>
              <label className="input validator w-full mt-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="mail@site.com"
                  required
                />
              </label>
            </div>
            <div className="mt-3">
              <label className="text-gray-500">Password</label>
              <label className="input validator w-full mt-1">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  minLength={8}
                />
              </label>
            </div>
            <div className="mt-3">
              {error && <p className="text-red-600">{error}</p>}
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="text-white btn hover:bg-blue-700 bg-blue-600 w-full"
              >
                Login
              </button>
            </div>
            <div className="mt-2">
              <small className="text-gray-500">
                Belum punya akun?{" "}
                <Link
                  to="/register"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Daftar sekarang
                </Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
