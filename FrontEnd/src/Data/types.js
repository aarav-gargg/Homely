import { BsFillHouseFill } from "react-icons/bs";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";

const types = [
    {
        name: "Entire Property",
        description:
          "Experience complete privacy with exclusive access to the whole property, making it your personal retreat.",
      icon: <BsFillHouseFill />,
    },
    {
        name: "Private Room",
        description:
          "Relax in your own private sanctuary, with the convenience of shared amenities in common areas.",
      icon: <MdOutlineBedroomParent/>,
    },
    {
        name: "Shared Space",
        description:
          "Embrace the communal experience by staying in a shared space, perfect for socializing and meeting new people.",
      icon: <FaPeopleRoof />,
    },
  ]

  export default types;