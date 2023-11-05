import React from "react";

const VideoCard = ({ info }) => {

  if(!info) return;
  
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className=" p-2 w-2/6 flex flex-col my-4">
      <img
        className="rounded-xl mb-3 hover:rounded-none"
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
    </div>
  );
};

export default VideoCard;
