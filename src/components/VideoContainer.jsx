import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import VideoCard from './VideoCard'
import { useSelector } from 'react-redux'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])
      const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(()=> {
    const getVideos = async () => {
      const res = await fetch(YOUTUBE_VIDEOS_API);
      const data = await res.json();
      // console.log(data?.items[0])
      setVideos(data.items)
    }
    getVideos()
  }, [])

  return (
    <div
      className={`flex flex-wrap top-12 absolute right-0 ${
        isMenuOpen ? "min-w-[calc(100%-16.666667%)]" : "w-[100%]"
      }`}
    >
      {videos?.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
}

export default VideoContainer