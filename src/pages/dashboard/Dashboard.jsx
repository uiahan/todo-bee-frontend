function Dashboard() {
  return (
    <>
      <div className="bg-white shadow-md mb-10 py-5 px-5 rounded-md">
        <h1 className="font-bold text-2xl text-gray-600">Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-md shadow-md hover:shadow-md transition">
          <h2 className="text-gray-600 text-lg mb-2">Total Todos</h2>
          <p className="text-3xl font-bold text-blue-600">1 <i className="fa-regular fa-notebook"></i></p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
