function Contact() {
  return (
    <div className="bg-gray-950 min-h-screen py-40 xl:px-60 px-6">
      <div className="grid xl:grid-cols-2 grid-cols-1 xl:space-x-20">
        <div className="mb-3 xl:mb-0">
          <img
            src="/src/assets/top-view-arrangement-with-calendar-pencils.jpg"
            data-aos="fade-up"
            className="rounded-md shadow-lg"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1
            className="font-bold xl:text-5xl text-4xl text-white"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <span className="text-yellow-400">Kontak</span> Kami
          </h1>
          <p
            className="font-semibold text-gray-300 xl:mt-5 mt-3 text-2xl text-justify"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            Punya pertanyaan, saran, atau butuh bantuan? Tim Todo Bee siap
            membantumu! Jangan ragu untuk menghubungi kami melalui kontak
            berikut. Kami ingin mendengar darimu.
          </p>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 grid-cols-1 mt-24 xl:space-x-10 xl:space-y-0 space-y-7">
        <div
          className="bg-gray-900 shadow-lg py-15 rounded-2xl "
          data-aos="fade-up"
        >
          <h1 className="text-5xl text-center text-white">
            <i className="fa-solid fa-phone"></i>
          </h1>
          <h1 className="text-2xl font-semibold text-center text-white mt-5">
            WhatsApp
          </h1>
          <h1 className="text-2xl font-semibold text-center text-white mt-3">
            0872 9821 1098
          </h1>
        </div>
        <div
          className="bg-gray-900 shadow-lg py-15 rounded-2xl"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h1 className="text-5xl text-center text-white">
            <i className="fa-solid fa-envelope"></i>
          </h1>
          <h1 className="text-2xl font-semibold text-center text-white mt-5">
            Email
          </h1>
          <h1 className="text-2xl font-semibold text-center text-white mt-3">
            todobee@email.com
          </h1>
        </div>
        <div
          className="bg-gray-900 shadow-lg py-15 rounded-2xl"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          <h1 className="text-5xl text-center text-white">
            <i className="fa-solid fa-location-dot"></i>
          </h1>
          <h1 className="text-2xl font-semibold text-center text-white mt-5">
            Lokasi
          </h1>
          <h1 className="text-2xl font-semibold text-center text-white mt-3">
            Kota Sukabumi
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
