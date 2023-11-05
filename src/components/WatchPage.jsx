import React from 'react'
import { useSelector } from 'react-redux';

const WatchPage = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div
      className={`flex flex-col absolute mt-[62px] no right-0 ${
        isMenuOpen ? "min-w-[calc(100%-16.666667%)]" : "w-[100%]"
      }`}
    >
      <h1 className=''>Watchpage Hello</h1>
    </div>
  );
}

export default WatchPage