import React, { useRef, useEffect, useState } from "react";

export default function VideoBanner({
  videoSrc,
  videoSrcWebm,
  videoSrcMobile,
  posterImage,
  title,
  subtitle,
  overlay = true,
  className = "",
  height = "h-[360px] sm:h-[420px] md:h-[720px] lg:h-[900px]",
  loadImmediately = false,
}) {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(loadImmediately);

  useEffect(() => {
    if (loadImmediately) {
      setShouldLoadVideo(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoadVideo(true);
        }
      },
      { rootMargin: "50px" }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [loadImmediately]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => setIsVideoLoaded(true);
    const handleError = () => setIsVideoLoaded(false);

    video.addEventListener("loadeddata", handleLoaded);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("loadeddata", handleLoaded);
      video.removeEventListener("error", handleError);
    };
  }, [shouldLoadVideo]);

  return (
    <div className={`relative w-full bg-black overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[600px] ${className}`}>
      {}
      <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
        {}
        {shouldLoadVideo && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={posterImage}
            className="w-full h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] object-cover transition-opacity duration-500"
            style={{ 
              display: "block",
              width: "100%",
              height: "100%",
              opacity: isVideoLoaded ? 1 : 0
            }}
          >
            {videoSrcMobile && <source src={videoSrcMobile} type="video/mp4" media="(max-width: 768px)" />}
            {videoSrcWebm && <source src={videoSrcWebm} type="video/webm" />}
            {videoSrc && <source src={videoSrc} type="video/mp4" />}
          </video>
        )}

        {}
        {!isVideoLoaded && posterImage && (
          <img 
            src={posterImage} 
            alt="Video poster" 
            className="w-full h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] object-cover"
            style={{ 
              display: "block",
              width: "100%",
              height: "100%"
            }}
          />
        )}

        {}
        {overlay && <div className="absolute inset-0 bg-black/40 z-10" />}

        {}
        {(title || subtitle) && (
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white px-4 sm:px-6 md:px-8">
              {title && (
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
