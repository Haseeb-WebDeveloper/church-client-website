"use client"

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import Image from "next/image";

// Array of video data
const videos = [
  {
    id: 1,
    title: "Sunday Service - January 28, 2024",
    thumbnail: "/thumbnails/service-1.jpg",
    url: "e0Klhp1sdRg",
    date: "January 28, 2024"
  },
  {
    id: 2,
    title: "Prayer Service - January 24, 2024",
    thumbnail: "/thumbnails/service-2.jpg",
    url: "YykjpeuMNEk",
    date: "January 24, 2024"
  },
  {
    id: 3,
    title: "Bible Study - January 21, 2024",
    thumbnail: "/thumbnails/service-3.jpg",
    url: "1G4isv_Fylg",
    date: "January 21, 2024"
  },
  {
    id: 4,
    title: "Youth Service - January 19, 2024",
    thumbnail: "/thumbnails/service-4.jpg",
    url: "Zi_XLOBDo_Y",
    date: "January 19, 2024"
  }
];

export function LiveVideos() {
  const [activeVideo, setActiveVideo] = useState<number>(1); // Set default to first video
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const playerRef = useRef<HTMLIFrameElement>(null);

  // Function to load YouTube IFrame API
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
  }, []);

  // Function to handle video selection
  const handleVideoSelect = (id: number) => {
    setActiveVideo(id);
    setIsPlaying(true);
  };

  // Function to toggle play/pause for the main video
  const toggleMainVideo = () => {
    setIsPlaying(!isPlaying);
  };

  const activeVideoData = videos.find(v => v.id === activeVideo);

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Video Player/Thumbnail */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 aspect-video rounded-xl overflow-hidden bg-muted relative max-w-4xl mx-auto"
          >
            {isPlaying ? (
              <iframe
                ref={playerRef}
                src={`https://www.youtube.com/embed/${activeVideoData?.url}?autoplay=1&start=${Math.floor(currentTime)}&enablejsapi=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full group cursor-pointer" onClick={toggleMainVideo}>
                {/* Thumbnail for main video */}
                <Image
                  src={activeVideoData?.thumbnail || ''}
                  alt={activeVideoData?.title || ''}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                
                {/* Large play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-transform group-hover:scale-110">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Video title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h2 className="text-xl font-semibold text-white">{activeVideoData?.title}</h2>
                  <p className="text-white/80">{activeVideoData?.date}</p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Video Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {videos.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`group cursor-pointer p-2 ${activeVideo === video.id ? '' : ''}`}
                onClick={() => handleVideoSelect(video.id)}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  {/* Thumbnail */}
                  <div className="absolute inset-0 bg-black">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-70 transition-opacity"
                    />
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm transition-transform group-hover:scale-110">
                      {activeVideo === video.id && isPlaying ? (
                        <Pause className="w-5 h-5 text-white" />
                      ) : (
                        <Play className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="mt-3">
                  <h3 className="font-medium line-clamp-1">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 