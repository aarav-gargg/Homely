import React from 'react';
const Home = () => {
  return (
    <>
      <div className="relative min-h-[75vh] w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg')` }}>

        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative p-8 rounded-lg text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your Perfect Room with Roomly
          </h1>
          <p className="text-base md:text-lg text-white mb-6">
            Discover a wide range of affordable and cozy rooms tailored to your needs.
            Whether you’re looking for a short-term stay or a long-term home, Roomly has you covered.
          </p>
          <a
            href="/search"
            className="bg-blue-400 text-black py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-500 transition duration-300"
          >
            Start Your Search
          </a>
        </div>
      </div>
      <div className="categories">
        <h1 className="text-4xl  font-bold mb-4 font-yusei mx-10 my-5">Top Categories</h1>
        <div className="w-full bg-gray-200 p-8">
          <div className="h-[200px] m-auto overflow-hidden relative w-auto my-5">
            <ul className="flex w-[calc(250px*14)] animate-scroll justify-center align-middle gap-5">
              <li className="w-[250px]"><img src="https://static.vecteezy.com/system/resources/previews/006/627/339/original/beach-logo-design-template-vector.jpg" alt="" />
                <div><b>Beaches</b></div>
              </li>
              <li className="w-[250px]"><span className='text-center m-auto'>Beaches</span><img src="https://static.vecteezy.com/system/resources/previews/006/627/339/original/beach-logo-design-template-vector.jpg" alt="" /></li>
              <li className="w-[250px]"><img src="https://static.vecteezy.com/system/resources/previews/006/627/339/original/beach-logo-design-template-vector.jpg" alt="" /></li>
              <li className="w-[250px]"><img src="https://static.vecteezy.com/system/resources/previews/006/627/339/original/beach-logo-design-template-vector.jpg" alt="" /></li>
              <li className="w-[250px]"><img src="https://static.vecteezy.com/system/resources/previews/006/627/339/original/beach-logo-design-template-vector.jpg" alt="" /></li>
              <li className="w-[250px]"><img src="https://static.vecteezy.com/system/resources/previews/006/627/339/original/beach-logo-design-template-vector.jpg" alt="" /></li>

            </ul>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
