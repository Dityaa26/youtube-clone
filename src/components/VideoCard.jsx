import React from "react";
import { Link } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const VideoCard = ({ info ,id }) => {
  const dispatch = useDispatch()

  if(!info) return;
  if(!id) return
  
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <Link onClick={() => dispatch(closeMenu())} to={"/watch?v=" + id} className=" p-2 w-2/6 m-0 flex flex-col rounded-xl hover:bg-slate-200 hover:shadow shadow-black my-4">
      <img
        className="rounded-xl mb-3 "
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className=" flex items-start">
        <div className="flex">  
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052"
              alt="Channel Icon"
              className="w-8 mr-4 mt-[5px]"
            />
          </div>
          <ul className="">
            <li className="font-semibold text-xl">{title.length > 60 ? title.slice(0, 61) + "..." : title}</li>
            <li className="text-slate-600">{channelTitle}</li>
            <li className="text-slate-600">
              {statistics.viewCount > 1000000
                ? (statistics.viewCount / 1000000).toFixed(1) + "M "
                : (statistics.viewCount / 1000).toFixed() + "K "}
              views
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

// const AdVideoCard = ({info}) => {
//   return <div className="p-1 m-1 border border-rose-600">
//     <VideoCard info={...info} />
//   </div>
// }

export default VideoCard;
