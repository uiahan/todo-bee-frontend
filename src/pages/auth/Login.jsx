import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-lg w-5xl grid grid-cols-2 rounded-3xl">
        <div className="bg-blue-600 rounded-l-3xl flex justify-center items-center">
          <Link to="/" className="text-6xl text-white font-bold">
            Todobee
          </Link>
        </div>
        <div className="py-15 px-10">
          <h2 className="font-bold text-center text-4xl">Login</h2>
          <form className="mt-5">
            <div>
              <label className="text-gray-500">Email</label>
              <label className="input validator w-full mt-1">
                <input
                  type="email"
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
                  placeholder="Password"
                  required
                  minLength={8}
                />
              </label>
            </div>
            <div className="mt-4">
              <button type="submit" className="text-white btn hover:bg-blue-700 bg-blue-600 w-full">
                Login
              </button>
            </div>
            <div className="mt-2">
              <small className="text-gray-500">
                Belum punya akun?{" "}
                <Link to="/register" className="text-blue-600 hover:text-blue-700">
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
