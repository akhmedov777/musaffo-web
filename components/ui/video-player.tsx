"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pause, Play, Volume1, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return "0:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

const CustomSlider = ({
  value,
  onChange,
  className,
}: {
  value: number;
  onChange: (value: number) => void;
  className?: string;
}) => {
  return (
    <motion.div
      className={cn(
        "relative h-1 w-full cursor-pointer rounded-full bg-white/20",
        className,
      )}
      onClick={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        onChange(Math.min(Math.max(percentage, 0), 100));
      }}
    >
      <motion.div
        className="absolute top-0 left-0 h-full rounded-full bg-white"
        style={{ width: `${value}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </motion.div>
  );
};

type VideoPlayerProps = {
  src: string;
  poster?: string;
};

export default function VideoPlayer({ src, poster }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = async () => {
    if (!videoRef.current) {
      return;
    }

    if (videoRef.current.paused) {
      await videoRef.current.play();
      setIsPlaying(true);
      return;
    }

    videoRef.current.pause();
    setIsPlaying(false);
  };

  const handleVolumeChange = (value: number) => {
    if (!videoRef.current) {
      return;
    }

    const newVolume = value / 100;
    videoRef.current.volume = newVolume;
    videoRef.current.muted = newVolume === 0;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) {
      return;
    }

    const nextDuration = videoRef.current.duration || 0;
    const nextProgress = nextDuration
      ? (videoRef.current.currentTime / nextDuration) * 100
      : 0;

    setProgress(Number.isFinite(nextProgress) ? nextProgress : 0);
    setCurrentTime(videoRef.current.currentTime);
    setDuration(nextDuration);
  };

  const handleSeek = (value: number) => {
    if (!videoRef.current || !videoRef.current.duration) {
      return;
    }

    const time = (value / 100) * videoRef.current.duration;

    if (Number.isFinite(time)) {
      videoRef.current.currentTime = time;
      setProgress(value);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) {
      return;
    }

    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);

    if (nextMuted) {
      setVolume(0);
      return;
    }

    const restoredVolume = volume > 0 ? volume : 1;
    videoRef.current.volume = restoredVolume;
    setVolume(restoredVolume);
  };

  return (
    <motion.div
      className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[1.75rem] bg-[#11111198] shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onFocusCapture={() => setShowControls(true)}
      onBlurCapture={() => setShowControls(false)}
      onTouchStart={() => setShowControls(true)}
    >
      <video
        ref={videoRef}
        className="aspect-video w-full bg-black object-cover"
        onClick={() => {
          void togglePlay();
        }}
        onLoadedMetadata={handleTimeUpdate}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onTimeUpdate={handleTimeUpdate}
        playsInline
        poster={poster}
        preload="metadata"
        src={src}
      />

      <AnimatePresence>
        {(showControls || !isPlaying) && (
          <motion.div
            className="absolute right-2 bottom-2 left-2 mx-auto max-w-3xl rounded-[1.5rem] bg-[#11111198] p-3 backdrop-blur-md md:bottom-4 md:p-4"
            initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: 20, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: "circInOut", type: "spring" }}
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="text-xs text-white md:text-sm">
                {formatTime(currentTime)}
              </span>
              <CustomSlider
                className="flex-1"
                onChange={handleSeek}
                value={progress}
              />
              <span className="text-xs text-white md:text-sm">
                {formatTime(duration)}
              </span>
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3 md:gap-4">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    className="text-white hover:bg-[#111111d1] hover:text-white"
                    onClick={() => {
                      void togglePlay();
                    }}
                    size="icon"
                    type="button"
                    variant="ghost"
                  >
                    {isPlaying ? (
                      <Pause className="h-5 w-5" />
                    ) : (
                      <Play className="h-5 w-5" />
                    )}
                  </Button>
                </motion.div>

                <div className="flex items-center gap-x-1">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      className="text-white hover:bg-[#111111d1] hover:text-white"
                      onClick={toggleMute}
                      size="icon"
                      type="button"
                      variant="ghost"
                    >
                      {isMuted ? (
                        <VolumeX className="h-5 w-5" />
                      ) : volume > 0.5 ? (
                        <Volume2 className="h-5 w-5" />
                      ) : (
                        <Volume1 className="h-5 w-5" />
                      )}
                    </Button>
                  </motion.div>

                  <div className="w-20 md:w-24">
                    <CustomSlider
                      onChange={handleVolumeChange}
                      value={volume * 100}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 md:gap-2">
                <div className="flex h-9 min-w-11 items-center justify-center px-3 text-sm text-white">
                  1x
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export { VideoPlayer };
