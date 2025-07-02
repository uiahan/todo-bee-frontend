function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-40 px-60">
      <div>
        <h1 className="text-5xl font-bold text-center" data-aos="fade-up"><span className="text-blue-600">Tentang</span> Kami</h1>
        <p className="text-2xl text-gray-600 font-semibold text-center mt-5" data-aos="fade-up" data-aos-duration="1200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sunt deserunt, delectus repudiandae molestiae in dolore eligendi quasi ullam nam corrupti laudantium consequatur.</p>
        <img src="/src/assets/time-organization-concept-close-up.jpg" className="mt-5 h-[30rem] w-full object-cover rounded-md shadow-lg" alt="" data-aos="fade-up" data-aos-duration="1400" />
      </div>
    </div>
  );
}

export default About;
