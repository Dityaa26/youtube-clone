import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

  return (
    <div className="border m-0 flex justify-between px-4">
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
      </div>
      <div className="flex items-center ">
        <input
          type="text"
          placeholder='Search'
          className="border border-1 border-gray-200 rounded-l-full p-2 outline-none w-[350px]"
        />
        <button className="bg-gray-200 border p-2 px-3 font-semibold rounded-r-full">🔍</button>
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
}

export default Head