export default function About() {
  return (
    <div className="h-screen w-screen relative">
      <div
        className="opacity-60 bg-cover bg-center h-full w-full absolute top-0 left-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      ></div>
      <div className="py-20 px-4 max-w-6xl mx-auto w-full relative">
        <h1 className="text-3xl font-bold mb-4 text-slate-800 relative z-10">
          About Dream Estate
        </h1>
        <p className="mb-4 text-slate-700 relative z-10">
          Dream Estate is a leading real estate agency that specializes in
          helping clients buy, sell, and rent properties in the most desirable
          neighborhoods. Our team of experienced agents is dedicated to
          providing exceptional service and making the buying and selling
          process as smooth as possible.
        </p>
        <p className="mb-4 text-slate-700 relative z-10">
          Our mission is to help our clients achieve their real estate goals by
          providing expert advice, personalized service, and a deep
          understanding of the local market. Whether you are looking to buy,
          sell, or rent a property, we are here to help you every step of the
          way.
        </p>
        <p className="mb-4 text-slate-700 relative z-10">
          Our team of agents has a wealth of experience and knowledge in the
          real estate industry, and we are committed to providing the highest
          level of service to our clients. We believe that buying or selling a
          property should be an exciting and rewarding experience, and we are
          dedicated to making that a reality for each and every one of our
          clients.
        </p>
      </div>
    </div>
  );
}
