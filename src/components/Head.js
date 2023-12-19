// import React, { useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faSearch, faVideo } from "@fortawesome/free-solid-svg-icons"; // Import the faBars icon
// import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
// import { useDispatch } from "react-redux";
// import { toggleMenu } from "../utils/appSlice";
// import { useState } from "react";
// import { YOUTUBE_SEARCH_API } from "../utils/constant";

// const Head = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestion, setSuggestion] = useState([]);
//   useEffect(() => {
//     // Api call

//     // make an api call after ever key press but if the difference between
//     // 2 API calls is < 20ms decline the API call
//     const timer = setTimeout(() => getSearchSuggestion(), 200);
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [searchQuery]);

//   const getSearchSuggestion = async () => {
//     const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
//     const json = await data.json();
//     console.log(json[1]);
//     setSuggestion(json[1]);
//   };

//   const dispatch = useDispatch();

//   const toggleClickHandler = () => {
//     dispatch(toggleMenu());
//   };

//   return (
//     <div className=" grid grid-flow-col justify-between content-baseline shadow-lg shadow-slate-100 p-4 bg-[#0f0f0f]">
//       <div className="flex gap-8 col-span-1 cursor-pointer">
//         <div>
//           <FontAwesomeIcon
//             icon={faBars}
//             color="white"
//             className="h-12"
//             onClick={() => toggleClickHandler()}
//           />{" "}
//         </div>
//         <img
//           className="h-16 bg-black "
//           alt="youtube-logo"
//           src="https://www.logo.wine/a/logo/YouTube/YouTube-White-Full-Color-Dark-Background-Logo.wine.svg"
//         />
//       </div>

//       <div className="col-span-10  m-2 text-center ">
//         <div>
//           <input
//             className="w-1/2 border text-white border-gray-400 p-2 px-5 rounded-l-full bg-[#0f0f0f]"
//             type="text"
//             placeholder="Search"
//             value={searchQuery}
//             onChange={(x) => setSearchQuery(x.target.value)}
//           />
//           <button className="border border-gray-400 rounded-r-full p-2 px-4 bg-[#0f0f0f]">
//             <FontAwesomeIcon icon={faSearch} color="white" />
//           </button>
//         </div>

//         <div className="fixed py-2 bg-black mx-[222px] w-[31rem] shadow-lg rounded-lg border border-gray-300 opacity-90">
//         <ul>
//           {suggestion.map((s) => 
//             <li key={s} className="pr-[26rem] text-white hover:bg-gray-400 rounded-lg pt-2">
//              <FontAwesomeIcon icon={faSearch} /> {s}
//             </li>
//           )}
//           {/* 
//             <li className="pr-[26rem]" >hello</li>
            
//             <li className="pr-[26rem]" >hello</li>
            
//             <li className="pr-[26rem]" >hello</li>
            
//             <li className="pr-[26rem]" >hello</li>
            
//             <li className="pr-[26rem]" >hello</li>

//             <li className="pr-[26rem]" >hello</li>

//             <li className="pr-[26rem]" >hello</li> */}
//             </ul>
//         </div>
//       </div>

//       <div className="flex gap-6 col-span-1 m-2 cursor-pointer">
//         <div>
//           <FontAwesomeIcon icon={faVideo} color="white" className="h-8" />
//         </div>
//         <div>
//           <FontAwesomeIcon icon={faBell} color="white" className="h-8" />
//         </div>
//         <div>
//           <FontAwesomeIcon icon={faUser} color="white" className="h-8" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Head;


import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass, faSearch, faVideo } from "@fortawesome/free-solid-svg-icons";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion , setShowSugggestion] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store)=>store.search)
  useEffect(() => {
    const timer = setTimeout(() => {
    if(searchCache[searchQuery]){
      setSuggestion(searchQuery);
    }
    else{
    getSearchSuggestion()
    }
  }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    dispatch(cacheResults({
      searchQuery :json[1]
    }))
  };



  const toggleClickHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-cols-12 justify-between items-center shadow-lg p-4 bg-[#0f0f0f]">
      <div className="flex items-center gap-8 col-span-2 cursor-pointer">
        <div>
          <FontAwesomeIcon
            icon={faBars}
            color="white"
            className="text-2xl"
            onClick={() => toggleClickHandler()}
          />
        </div>
        <img
          className="h-16"
          alt="youtube-logo"
          src="https://www.logo.wine/a/logo/YouTube/YouTube-White-Full-Color-Dark-Background-Logo.wine.svg"
        />
      </div>

      <div className="col-span-8 m-2 text-center">
        <div className="flex items-center justify-center">
          <input
            className="w-1/2 border border-gray-400 p-2 px-5 rounded-l-full bg-[#0f0f0f] text-white"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() =>setShowSugggestion(true)}
            onBlur ={()=>setShowSugggestion(false)}
          />
          <button className="border border-gray-400 rounded-r-full p-2 px-4 bg-[#0f0f0f]">
            <FontAwesomeIcon icon={faSearch} color="white"  />
          </button>
        </div>
        {showSuggestion &&
        <div className="absolute pt-2 mt-1 bg-black ml-[14rem] w-[31rem] shadow-lg rounded-lg border border-gray-300 opacity-90">
  
    {suggestion.map((s, index) => (
      <p key={index} className="text-white hover:bg-gray-400 rounded-lg py-2 px-4 flex ">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="pr-2 " /> {s}
      </p>
    ))}
  
</div>
        }
      </div>

      <div className="flex items-center gap-6 col-span-2 cursor-pointer">
        <div>
          <FontAwesomeIcon icon={faVideo} color="white" className="text-xl" />
        </div>
        <div>
          <FontAwesomeIcon icon={faBell} color="white" className="text-xl" />
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} color="white" className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Head;
