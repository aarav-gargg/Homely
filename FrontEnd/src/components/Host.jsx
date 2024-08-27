import React from 'react';
import items from '../Data/categories';

const Host = () => {
  return (
    <>
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 mx-10 my-7 font-roboto">Host a Property</h1>
        <form>
          <div className="w-4/5 m-auto my-11 bg-slate-500 rounded-2xl p-3">
            <h2 className="font-roboto text-2xl text-white">Name of the Place</h2>
            <hr className="text-black dark:text-gray-400 my-2" />
            <div className="w-4/5 m-auto p-2">
              <h2 className="font-roboto text-2xl text-black my-3">Select your category</h2>
              <ul className="flex flex-wrap justify-center items-center gap-5">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="w-[160px] h-[150px] relative bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden shadow-lg hover:cursor-pointer hover:border-white hover:border-4"
                    style={{
                      backgroundImage: `url(${item.image})`
                    }}
                  >
                    {/* Black overlay */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    {/* Centered label */}
                    <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Host;
