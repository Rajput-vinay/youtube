import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faBook,
  faCamera,
  faClock,
  faExclamationCircle,
  faFilm,
  faFire,
  faGamepad,
  faGear,
  faHistory,
  faHome,
  faMicrophone,
  faMusic,
  faNewspaper,
  faQuestionCircle,
  faShop,
  faUserSecret,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return undefined;


  return (
    
    <div className="flex flex-col w-[20rem] pl-10 content-baseline bg-[#0f0f0f] overflow-visible pr-[8.3rem]">
   
      <ul className="pt-4 pb-6 cursor-pointer">
          <li className=" text-white hover:bg-gray-500 rounded-lg pb-2 ">
          <Link to ="/"> <FontAwesomeIcon icon={faHome} color="white" className="pr-2" />  Home </Link> </li> 
          
          <li className="pb-2 text-white hover:bg-gray-500 rounded-lg ">
          <FontAwesomeIcon icon={faBolt} color="white" className="pr-2" /> Shorts
        </li>
        <li className="pb-2 text-white hover:bg-gray-500 rounded-lg ">
          <FontAwesomeIcon icon={faCamera} color="white" className="pr-2"/> Subscribe
        </li>
      </ul>

      <div className=" border-gray-200 border w-[130px] "></div>

      <h1 className="  font-bold font-serif text-xl pt-8 text-white">
        You
      </h1>
      <ul className="pt-2 pb-6 cursor-pointer">
      <li className="pb-2 text-white hover:bg-gray-500 rounded-lg ">
          <FontAwesomeIcon icon={faUserSecret} color="white" className="pr-2"/> Your channel
        </li>
        <li className="pb-2 text-white hover:bg-gray-500 rounded-lg ">
          
          <FontAwesomeIcon icon={faHistory} color="white" className="pr-2" /> History
        </li>
        <li className="pb-2 text-white hover:bg-gray-500 rounded-lg ">
          <FontAwesomeIcon icon={faVideo} color="white" className="pr-2" /> Your videos
        </li>
        <li className="pb-2 text-white hover:bg-gray-500 rounded-lg ">
          <FontAwesomeIcon icon={faClock} color="white" className="pr-2"/> Watch Later
        </li>
      </ul>

      <div className=" border-gray-200 border w-[130px]  "></div>

      <h1 className=" text-white font-medium font-bold font-serif text-xl pt-8">
        Explore
      </h1>
      <ul className="pt-2 pb-6 cursor-pointer">
      <li className="pb-2 text-white hover:bg-gray-500 rounded-lg ">
          <FontAwesomeIcon icon={faFire} color="white" className="pr-2"/> Trending
        </li>
        <li className="pb-2 text-white hover:bg-gray-500 rounded-lg ">
          <FontAwesomeIcon icon={faShop} color="white" className="pr-2" /> Shopping
        </li>
        <li className="pb-2 text-white hover:bg-gray-500 rounded-lg ">
          <FontAwesomeIcon icon={faMusic} color="white" className="pr-2" /> Music
        </li>
        <li className="pb-2 text-white hover:bg-gray-500 rounded-lg ">
          <FontAwesomeIcon icon={faFilm} color="white" className="pr-2"/> Films
        </li>
        <li className="pb-2 text-white hover:bg-gray-500 rounded-lg ">
          <FontAwesomeIcon icon={faGamepad} color="white" className="pr-2" /> Gaming
        </li>
        <li className="pb-2 text-white hover:bg-gray-500 rounded-lg ">
          <FontAwesomeIcon icon={faNewspaper} color="white" className="pr-2"/> News
        </li>
        <li className="pb-2 text-white hover:bg-gray-500 rounded-lg ">
          <FontAwesomeIcon icon={faBook} color="white" className="pr-2"/> Learning
        </li>
        <li className="pb-2 text-white hover:bg-gray-500 rounded-lg ">
          <FontAwesomeIcon icon={faMicrophone} color="white" className="pr-2"/> Podcasts
        </li>
      </ul>

      <div className=" border-gray-200 border w-[130px]  "></div>

      <ul className="pt-4 pb-6 cursor-pointer">
      <li className="pb-2 text-white hover:bg-gray-500 rounded-lg ">
          <FontAwesomeIcon icon={faGear} color="white" className="pr-2"/> Settings
        </li>
        <li className="pb-2 text-white hover:bg-gray-500 rounded-lg ">
          <FontAwesomeIcon icon={faHistory} color="white" className="pr-2"/> Report history
        </li>
        <li className="pb-2 text-white hover:bg-gray-500 rounded-lg ">
          <FontAwesomeIcon icon={faQuestionCircle} color="white" className="pr-2"/> Help
        </li>
        <li className="pb-2 text-white hover:bg-gray-500 rounded-lg ">
          <FontAwesomeIcon icon={faExclamationCircle} color="white" className="pr-2" /> send
          feedback
        </li>
      </ul>
      </div>
   
  );
};

export default Sidebar;
