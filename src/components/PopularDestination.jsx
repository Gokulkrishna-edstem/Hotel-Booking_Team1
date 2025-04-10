import React from "react";

function PopularDestination({ className }) {
  return (
    <div
      className={`contaniner ${className} mx-auto w-11/12 mt-4 mb-5 grid grid-cols-4 gap-6 `}
    >
      {/* first div */}
      <div className="rounded-4xl overflow-hidden h-[450px] relative group">
        <img
          className="h-full w-full object-cover transition-all duration-300 "
          src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="manali"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-300">
          <h1 className="text-white text-4xl font-bold">Manali</h1>
        </div>
      </div>

      {/* second div with 2 div inside  */}
      <div className="rounded-4xl flex flex-col gap-2 justify-center  h-[450px] items-center ">
        <div className="relative group overflow-hidden rounded-4xl">
          <img
            className="h-[220px] w-[400px] object-cover"
            src="https://images.unsplash.com/photo-1470075446540-4391a96ec621?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hyderabad"
          />

          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-4xl flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-300">
            <h1 className="text-white text-4xl font-bold">Hyderabad</h1>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-4xl">
          <img
            className="rounded-4xl h-[220px] w-[400px] object-cover"
            src="https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="delhi"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-300">
            <h1 className="text-white text-4xl font-bold">Delhi</h1>
          </div>
        </div>
      </div>

      {/* third div */}
      <div className="rounded-4xl overflow-hidden h-[450px] relative group">
        <img
          src="https://plus.unsplash.com/premium_photo-1697730334419-fba83fe143b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Kerala image"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-300">
          <h1 className="text-white text-4xl font-bold">Kerala</h1>
        </div>
      </div>

      {/* fourth div  with 2 div inside */}
      <div className="rounded-4xl flex flex-col gap-2 justify-center  h-[450px] items-center">
        <div className="relative group overflow-hidden rounded-4xl">
          <img
            className="rounded-4xl h-[220px] w-[400px] object-cover"
            src="https://images.unsplash.com/photo-1706932642959-97cdde19ef0b?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Rameswaram"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-300">
            <h1 className="text-white text-4xl font-bold">Rameswaram</h1>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-4xl">
          <img
            className="rounded-4xl h-[220px] w-[400px]"
            src="https://images.unsplash.com/photo-1573143950521-36ef5345dae9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Mumbai"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-300">
            <h1 className="text-white text-4xl font-bold">Mumbai</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularDestination;
