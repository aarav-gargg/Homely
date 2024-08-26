import React from 'react';

const Home = () => {
  const items = [
    {
      image: "https://www.usnews.com/object/image/00000178-f501-d258-a5f9-fdd742a40000/esperanza-at-night.jpg?update-time=1678804883827&size=responsive640",
      label: "Beaches"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ900b1rZvv46KNz0IhAVfMWtPLcCpsNA16Jg&s",
      label: "Mountains"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0BnmRmLJMVr9p0a0en3tF0sNCmkQoaCZLWQ&s",
      label: "Cities"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgOwzHSAFctQNxoNdAhGWsdeAsek0hCUttdA&s",
      label: "Deserts"
    },
    {
      image: "https://theamaryllis.in/uploads/editor_images/penthouse-1_1684575236.webp",
      label: "Penthouse"
    },
    {
      image: "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2018/02/LAUCALA-ISLAND-FIJI.jpg?ssl=1",
      label: "Luxury Resorts"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4VppHnM4IVNP8_bQt1CGICtpKLbZERg3JQ&s",
      label: "Cottages"
    }
  ];

  return (
    <>
      <div className="bg-fav-color">
        <div
          className="relative min-h-[75vh] w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg')`
          }}
        >
          <div className="absolute inset-0 bg-black opacity-55"></div>
          <div className="relative p-8 rounded-lg text-center z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Find Your Perfect Room with Homely
            </h1>
            <p className="text-base md:text-lg text-white mb-6">
              Discover a wide range of affordable and cozy rooms tailored to your needs.
              Whether you’re looking for a short-term stay or a long-term home, Homely has you covered.
            </p>
            <a
              href="/search"
              className="bg-f-color text-white py-2 px-4 rounded-lg  border border-transparent hover:border-white hover:border-2 transition duration-300 ease-in-out w-full"
            >
              Start Your Search
            </a>
          </div>
        </div>
        <div className="categories">
          <h1 className="text-4xl font-bold mb-4 font-yusei mx-10 my-5 text-white">Top Categories</h1>
          <div className="w-full p-8">
            <div className="h-[200px] m-auto overflow-hidden relative w-auto my-5">
            <ul className="flex w-[calc(250px*14)] animate-scroll justify-center items-center gap-5">
                {items.concat(items).map((item, index) => (
                  <li
                    key={index}
                    className="w-[250px] h-[200px] relative bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden shadow-lg"
                    style={{
                      backgroundImage: `url(${item.image})`
                    }}
                  >
                    <span className="absolute bottom-0 w-full bg-black bg-opacity-75 text-white text-center py-1">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

