import { BsFillHouseFill } from "react-icons/bs";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";

const types = [
  {
    name: "Entire Property",
    description:
      "Offer your entire property for rent, giving guests exclusive access to all the spaces and amenities.",
    icon: BsFillHouseFill, 
  },
  {
    name: "Private Room",
    description:
      "Rent out a private room within your property while sharing common areas like the kitchen and living room with guests.",
    icon: MdOutlineBedroomParent, 
  },
  {
    name: "Shared Space",
    description:
      "Offer a shared space where guests can stay in a communal environment.",
    icon: FaPeopleRoof,
  },
];

export default types;

