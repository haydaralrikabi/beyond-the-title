import React, { useState } from "react";
import YouTube from "react-youtube";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface YouTubeSectionProps {
  videos: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}

export const YouTubeSection: React.FC<YouTubeSectionProps> = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isSingleVideo = videos.length === 1;

  const nextVideo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousVideo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative py-24 bg-gray-900" id="videos">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0"></div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Recent Videos
          </h2>
          <p className="text-xl text-gray-400">
            Watch presentations worth spreading
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Video Container */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <div className="absolute inset-0">
                <YouTube
                  videoId={videos[currentIndex].id}
                  opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: {
                      controls: 1,
                      rel: 0,
                      modestbranding: 1,
                      showinfo: 0,
                      iv_load_policy: 3,
                      origin: window.location.origin,
                      enablejsapi: 1,
                      playsinline: 1,
                    },
                  }}
                  className="w-full h-full"
                  iframeClassName="w-full h-full"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                {videos[currentIndex].title}
              </h3>
              <p className="text-gray-400">
                {videos[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Navigation Arrows - Only show if there are multiple videos */}
          {!isSingleVideo && (
            <>
              <button
                onClick={previousVideo}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-gray-800/80 hover:bg-gray-700 p-2 rounded-full text-white transition-all"
                aria-label="Previous video"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextVideo}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-gray-800/80 hover:bg-gray-700 p-2 rounded-full text-white transition-all"
                aria-label="Next video"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Video Navigation Dots - Only show if there are multiple videos */}
          {!isSingleVideo && (
            <div className="flex justify-center gap-2 mt-6">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-blue-600 w-4" : "bg-gray-600"
                  }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0"></div>
    </section>
  );
};
