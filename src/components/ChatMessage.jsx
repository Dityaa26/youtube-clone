import React from 'react'

const ChatMessage = ({name="Aditya", message="HELLO WORLD🎃🎃"}) => {
  return (
    <div className="w-full flex bg-gray-100 mb-2 border-b-2 p-2 rounded-lg">
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="User Icon"
        className="h-[25px] mr-2"
      />
      <div className='overflow-x-clip'>
        <span className="font-semibold pr-2 text-slate-600">{name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
}

export default ChatMessage