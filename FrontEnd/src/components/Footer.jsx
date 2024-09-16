import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';  // Social media icons
import { AiOutlineArrowUp } from 'react-icons/ai'; // Back to top icon

const Footer = () => {
  return (
    <footer className="bg-f-color  text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="text-sm">
            Providing premium and luxurious properties for rent and purchase.
          </p>
        </div>

       
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <p className="text-sm">Email: support@homely.com</p>
          <p className="text-sm">Phone: +123 456 7890</p>
        </div>

        
        <div>
          <h2 className="text-lg font-semibold mb-4">Policies</h2>
          <ul>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Privacy Policy</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Terms of Service</li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <FaFacebookF className="cursor-pointer hover:text-blue-500" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
          </div>
        </div>
      </div>

      
      <div className="border-t border-gray-700 my-8"></div>

     
      <div className="flex justify-center">
        <button 
          className="flex items-center text-sm hover:text-gray-400"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <AiOutlineArrowUp className="mr-2" /> Back to Top
        </button>
      </div>

      
      <div className="text-center text-gray-200 mt-8">
        &copy; 2024 Homely. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
