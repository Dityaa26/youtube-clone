import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [querySuggestion, setQuerySugesstion] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const getSearchSuggestions = async () => {
      console.log(searchQuery)
      const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const data = await response.json();
      setQuerySugesstion(data[1]);

      // Update cache
      dispatch(cacheResults({ [searchQuery]: data[1] }));
    };

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setQuerySugesstion(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="mb-0 top fixed z-30 bg-white w-full flex justify-between px-4">
      <div className="flex items-center">
        <img
          onClick={() => toggleMenuHandler()}
          src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
          alt="Menu"
          className="w-[30px] h-[30px] cursor-pointer mr-3 text-white"
        />
        <img
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
          alt="Youtube"
          className="h-[60px]"
        />
        <p className="text-xl font-bold opacity-60">Clone</p>
      </div>
      <div className="flex items-center ">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="border border-1 border-gray-200 rounded-l-full p-2 px-4 outline-none w-[350px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="bg-gray-200 border p-2 px-3 font-semibold rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && searchQuery && (
          <div className="absolute top-14 rounded-md bg-white shadow shadow-black  text-xl w-[350px]">
            <ul className="mx-4 py-2">
              {querySuggestion.map((qs) => (
                <li
                  key={qs}
                  className="mb-1 border-b-[1px] text-lg hover:bg-slate-100 cursor-pointer rounded p-1"
                  onClick={() => setSearchQuery(qs)}
                >
                  🔍 {qs}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="User Icon"
          className="h-[40px]"
        />
      </div>
    </div>
  );
};

export default Head;
