"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function LiveVideos() {
  const [videos, setVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState(0); // Start at index 0

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch("/api/youtube");
        const data = await res.json();
        setVideos(data);
        console.log("Fetched videos:", data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    }
    fetchVideos();
  }, []);

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Video Player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 aspect-video rounded-xl overflow-hidden bg-muted relative max-w-4xl mx-auto"
          >
            {videos.length > 0 ? (
              <iframe
                src={`https://www.youtube.com/embed/${videos[activeVideo]?.id.videoId}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <p className="text-center text-gray-500">Loading videos...</p>
            )}
          </motion.div>

          {/* Video Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {videos.map((video: any, index) => (
              <div
                key={video.id.videoId}
                className="cursor-pointer hover:opacity-75 transition"
                onClick={() => setActiveVideo(index)}
              >
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  title={video.snippet.title}
                  allowFullScreen
                ></iframe>
                <p className="text-sm mt-2 text-center">{video.snippet.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
