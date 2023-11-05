import React from 'react'
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';

const WatchPage = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  console.log(id)

  // console.log(params)
  return (
    <div
      className={`flex flex-col  absolute mt-[84px] no right-0 ${
        isMenuOpen ? "min-w-[calc(100%-16.666667%)]" : "w-[100%]"
      }`}
    >
      <div className="flex ml-8">
        <div className="w-8/12">
          <iframe
            className="rounded-xl"
            width="841"
            height="473"
            src={"https://www.youtube.com/embed/" + id}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h1>Video Suggestion</h1>
        </div>
      </div>
    </div>
  );
}

export default WatchPage