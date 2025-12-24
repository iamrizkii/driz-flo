"use client";

import { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [showTooltip, setShowTooltip] = useState(true);
    const [volume, setVolume] = useState(0.5);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        // Hide tooltip after 5 seconds
        const timer = setTimeout(() => {
            setShowTooltip(false);
        }, 5000);

        // Set initial volume
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }

        return () => clearTimeout(timer);
    }, [volume]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.volume = volume;
                audioRef.current.play().catch((error) => {
                    console.log("Playback failed:", error);
                });
                setIsPlaying(true);
            }
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    return (
        <>
            {/* Background Music Audio Element */}
            {/* GANTI FILE MUSIK DI SINI: src="/music/background.mp3" */}
            <audio
                ref={audioRef}
                loop
                preload="auto"
                src="/music/background.mp3"
            />

            {/* Music Control Button */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
                {/* Tooltip */}
                {showTooltip && !isPlaying && (
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-pink-200 animate-bounce-gentle">
                        <p className="text-sm text-pink-700 font-medium">
                            🎵 Klik untuk musik!
                        </p>
                    </div>
                )}

                {/* Control Buttons */}
                <div className="flex items-center gap-2">
                    {/* Volume Slider (only show when playing) */}
                    {isPlaying && (
                        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-pink-200">
                            <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                            </svg>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={volume}
                                onChange={handleVolumeChange}
                                className="w-16 h-1 bg-pink-200 rounded-lg appearance-none cursor-pointer accent-pink-500"
                            />
                        </div>
                    )}

                    {/* Mute/Unmute Button (only show when playing) */}
                    {isPlaying && (
                        <button
                            onClick={toggleMute}
                            className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-pink-200 flex items-center justify-center text-pink-600 hover:bg-pink-50 hover:scale-110 transition-all duration-300"
                            aria-label={isMuted ? "Unmute" : "Mute"}
                        >
                            {isMuted ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                </svg>
                            )}
                        </button>
                    )}

                    {/* Play/Pause Button */}
                    <button
                        onClick={togglePlay}
                        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${isPlaying
                            ? "bg-pink-500 text-white hover:bg-pink-600"
                            : "bg-white/90 backdrop-blur-sm border border-pink-200 text-pink-600 hover:bg-pink-50 animate-pulse-soft"
                            }`}
                        aria-label={isPlaying ? "Pause music" : "Play music"}
                    >
                        {isPlaying ? (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Now Playing Indicator */}
                {isPlaying && (
                    <div className="flex items-center gap-1 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
                        <div className="flex items-end gap-0.5 h-3">
                            <span className="w-1 bg-pink-500 animate-equalizer-1"></span>
                            <span className="w-1 bg-pink-500 animate-equalizer-2"></span>
                            <span className="w-1 bg-pink-500 animate-equalizer-3"></span>
                            <span className="w-1 bg-pink-500 animate-equalizer-4"></span>
                        </div>
                        <span className="text-xs text-pink-600 font-medium ml-1">Now Playing</span>
                    </div>
                )}
            </div>
        </>
    );
}