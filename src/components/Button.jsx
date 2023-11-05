import React from "react";

const Button = ({ title }) => {
  return (
    <button className="p-1 focus:bg-black focus:text-white bg-slate-100 hover:bg-slate-200 font-semibold text-slate-950 m-2 px-3 rounded-md ">
      {title}
    </button>
  );
};

export default Button;
