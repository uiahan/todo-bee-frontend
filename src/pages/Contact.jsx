function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen py-40 px-60">
      <div className="grid grid-cols-2 space-x-20">
        <div>
            <img src="/src/assets/top-view-arrangement-with-calendar-pencils.jpg" data-aos="fade-up" className="rounded-md shadow-lg" alt="" />
        </div>
        <div className="flex flex-col justify-center">
            <h1 className="font-bold text-5xl" data-aos="fade-up" data-aos-duration="1200"><span className="text-blue-600">Kontak</span> Kami</h1>
            <p className="font-semibold text-gray-600 mt-5 text-2xl text-justify" data-aos="fade-up" data-aos-duration="1400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit laboriosam cupiditate eum consequuntur quos ducimus quia aut. Tempore odit totam perferendis debitis repellendus, expedita iusto provident, labore ex maiores hic.</p>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-24 space-x-10">
        <div className="bg-white shadow-lg py-15 rounded-2xl" data-aos="fade-up">
            <h1 className="text-5xl text-center text-gray-600"><i className="fa-solid fa-phone"></i></h1>
            <h1 className="text-2xl font-semibold text-center text-gray-600 mt-5">WhatsApp</h1>
            <h1 className="text-2xl font-semibold text-center text-gray-600 mt-3">0872 9821 1098</h1>
        </div>
        <div className="bg-white shadow-lg py-15 rounded-2xl" data-aos="fade-up" data-aos-duration="1200">
            <h1 className="text-5xl text-center text-gray-600"><i className="fa-solid fa-envelope"></i></h1>
            <h1 className="text-2xl font-semibold text-center text-gray-600 mt-5">Email</h1>
            <h1 className="text-2xl font-semibold text-center text-gray-600 mt-3">todobee@email.com</h1>
        </div>
        <div className="bg-white shadow-lg py-15 rounded-2xl" data-aos="fade-up" data-aos-duration="1400">
            <h1 className="text-5xl text-center text-gray-600"><i className="fa-solid fa-location-dot"></i></h1>
            <h1 className="text-2xl font-semibold text-center text-gray-600 mt-5">Lokasi</h1>
            <h1 className="text-2xl font-semibold text-center text-gray-600 mt-3">Kota Sukabumi</h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
