import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen py-10 2xl:py-20 2xl:px-60 px-6">
        <div className="text-center xl:pt-56">
          <h1 className="font-bold xl:text-6xl" data-aos="fade-up">
            <span className="text-blue-600">Kelola tugas</span> harianmu dengan <span className="text-blue-600">cara yang</span> lebih mudah <span className="text-blue-600">dan teratur</span>
          </h1>
          <h4 className="text-gray-600 font-semibold text-2xl mt-8 mb-8" data-aos="fade-up" data-aos-duration="1200">
            Tidak perlu lagi bingung memisahkan daftar belanja, tugas sekolah
            anak, dan pekerjaan kantor, semuanya dapat kamu atur dalam satu
            platform yang terintegrasi dan mudah digunakan.
          </h4>
          <div data-aos="fade-up" data-aos-duration="1400">
          <Link
            to="/login"
            className="bg-blue-600 font-semibold text-white px-10 text-2xl py-2 shadow-lg rounded-3xl hover:bg-blue-700 transition-colors"
          >
            Mulai Sekarang
          </Link>
            
          </div>
        </div>
      </div>

      <div className="bg-white 2xl:py-40 2xl:px-60">
        <h1 className="font-bold text-5xl text-center" data-aos="fade-up">
          Kelola <span className="text-blue-600">Harimu</span> Jadi Lebih Baik
        </h1>
        <div className="grid grid-cols-2 mt-16 space-x-16" data-aos="fade-up">
          <div>
            <img
              src="/src/assets/time-organization-concept-close-up.jpg"
              className="rounded-lg shadow-xl"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-semibold text-3xl mb-3">
              Remove Background and Create Stunning Product Photos Instantly
            </h1>
            <p className="text-gray-600 font-medium text-lg">
              Quickly isolate your image subject with PicWish background
              remover. You can process up to 30 files and do more editing at a
              time. Say goodbye to manual editing and removing backgrounds
              online has never been easier!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-20 space-x-16 text-end" data-aos="fade-up">
          <div className="flex flex-col justify-center">
            <h1 className="font-semibold text-3xl mb-3">
              Remove Background and Create Stunning Product Photos Instantly
            </h1>
            <p className="text-gray-600 font-medium text-lg">
              Quickly isolate your image subject with PicWish background
              remover. You can process up to 30 files and do more editing at a
              time. Say goodbye to manual editing and removing backgrounds
              online has never been easier!
            </p>
          </div>
          <div>
            <img
              src="/src/assets/top-view-arrangement-with-calendar-pencils.jpg"
              className="rounded-lg shadow-xl"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 2xl:py-40 2xl:px-60 grid grid-cols-2 space-x-16" data-aos="fade-up">
        <div>
          <img
            src="/src/assets/time-organization-concept-with-planner-top-view.jpg"
            className="rounded-lg shadow-xl"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-semibold text-3xl mb-3">
            Remove Background and Create Stunning Product Photos Instantly
          </h1>
          <p className="text-gray-600 font-medium text-lg">
            Quickly isolate your image subject with PicWish background remover.
            You can process up to 30 files and do more editing at a time. Say
            goodbye to manual editing and removing backgrounds online has never
            been easier!
          </p>
          <div className="pt-5">
            <a
              href="#"
              className="bg-blue-600 text-lg shadow-lg hover:bg-blue-700 transition-colors rounded-3xl text-white font-medium px-5 py-2"
            >
              Mulai Sekarang
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
