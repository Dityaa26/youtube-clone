import React from 'react'
import { useSelector } from 'react-redux';

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

  return (
    <>
        {
            isMenuOpen ? (<div className="border absolute left-0 h-full  no-scrollbar overflow-y-scroll p-2 w-2/12">
      {sidebarMenuList.map((section) => (
        <div key={section.title} className="border-b-2 px-1">
          <h1 className="font-semibold mb-1 text-2xl">{section.title}</h1>
          {section.options.map((option) => (
            <p key={option} className="px-4 py-2 text-md ">{option}</p>
          ))}
        </div>
      ))}
    </div>) : (<></>)
        }
    </>
  );
}

export default Sidebar