import { FaUtensils, FaWifi, FaTv, FaParking, FaSwimmingPool, FaDog } from 'react-icons/fa';
import { GiWashingMachine} from 'react-icons/gi';
import { TbFridge } from "react-icons/tb";
import { LuShowerHead } from "react-icons/lu";

const facilities = [
  {
    name: "Kitchen",
    icon: <FaUtensils className="text-xl text-gray-600" />, // Kitchen icon
  },
  {
    name: "Wi-Fi",
    icon: <FaWifi className="text-xl text-gray-600" />, // Wi-Fi icon
  },
  {
    name: "TV",
    icon: <FaTv className="text-xl text-gray-600" />, // TV icon
  },
  {
    name: "Parking",
    icon: <FaParking className="text-xl text-gray-600" />, // Parking icon
  },
  {
    name: "Swimming Pool",
    icon: <FaSwimmingPool className="text-xl text-gray-600" />, // Swimming Pool icon
  },
  {
    name: "Pet-Friendly",
    icon: <FaDog className="text-xl text-gray-600" />, // Pet-Friendly icon
  },
  {
    name: "Washing Machine",
    icon: <GiWashingMachine className="text-xl text-gray-600" />, // Washing Machine icon
  },
  {
    name: "Refrigerator",
    icon: <TbFridge className="text-xl text-gray-600" />, // Refrigerator icon
  },
  {
    name: "Shower",
    icon: <LuShowerHead className="text-xl text-gray-600" />, // Shower icon
  }
];

export default facilities;
