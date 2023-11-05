import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const sidebarMenuList = [
    {
        title: "",
        options: ["Home", "Short", "Subscription"]
    },
    {
        title: "You",
        options: ["Your Channel", "History", "Your Vidos", "Your Clips", "Liked Vidos"]
    },
    {
        title: "Explore",
        options: ["Trending", "Shopping", "Music", "Films", "Live", "Gaming", "News", "Sports"]
    }
]



const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    if(!isMenuOpen) return;

  return (
    <div className="left-0 fixed top-[40px] h-full no-scrollbar overflow-y-scroll p-2 w-2/12">
      {sidebarMenuList.map((section) => (
        <div key={section.title} className="border-b-[1px] py-2 mr-2  px-1">
          <h1 className="font-semibold mb-1 px-4 text-2xl">{section.title}</h1>
          {section.options.map((option) => (
            <p
              key={option}
              className="px-4 py-2 text-md focus:bg-slate-100 focus:font-semibold hover:bg-slate-100 cursor-pointer hover:rounded-lg"
            >
              <Link to='/'>{option}</Link>
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Sidebar