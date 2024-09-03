import { FaUtensils, FaWifi, FaTv, FaParking, FaSwimmingPool, FaDog } from 'react-icons/fa';
import { GiWashingMachine} from 'react-icons/gi';
import { TbFridge , TbAirConditioning } from "react-icons/tb";
import { LuShowerHead } from "react-icons/lu";
import { PiSecurityCameraFill } from "react-icons/pi";
import { CgGym } from "react-icons/cg";

const facilities = [
  {
    name: "Kitchen",
    icon: <FaUtensils className="text-xl text-black" />, // Kitchen icon
  },
  {
    name: "Wi-Fi",
    icon: <FaWifi className="text-xl text-black" />, // Wi-Fi icon
  },
  {
    name: "TV",
    icon: <FaTv className="text-xl text-black" />, // TV icon
  },
  {
    name: "Parking",
    icon: <FaParking className="text-xl text-black" />, // Parking icon
  },
  {
    name: "Swimming Pool",
    icon: <FaSwimmingPool className="text-xl text-black" />, // Swimming Pool icon
  },
  {
    name: "Pet-Friendly",
    icon: <FaDog className="text-xl text-black" />, // Pet-Friendly icon
  },
  {
    name: "Washing Machine",
    icon: <GiWashingMachine className="text-xl text-black" />, // Washing Machine icon
  },
  {
    name: "Refrigerator",
    icon: <TbFridge className="text-xl text-black" />, // Refrigerator icon
  },
  {
    name: "Shower",
    icon: <LuShowerHead className="text-xl text-black" />, // Shower icon
  },
  {
    name: "Security Cameras",
    icon: <PiSecurityCameraFill className="text-xl text-black" />, // Shower icon
  },
  {
    name: "Air Conditioned",
    icon: <TbAirConditioning className="text-xl text-black" />, // Shower icon
  },
  { 
    name: "Gym",
    icon : <CgGym className="text-xl text-black" />
  },

];

export default facilities;
