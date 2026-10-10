'use client';

import { useState, useRef, useEffect } from 'react';
import type React from 'react';
import { Play, Pause, Volume2, VolumeX, Disc3, Music2 } from 'lucide-react';

export const TransparentMusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Audio playback error / blocked by browser:', err);
        setIsPlaying(false);
      });
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.muted = false;
      setIsMuted(false);
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div
      className={`fixed bottom-5 sm:bottom-7 right-5 sm:right-7 z-50 select-none transition-all duration-300 ${
        isPlaying ? 'playing' : ''
      }`}
    >
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src="/assets/hypnotic.mp3"
        loop
        preload="auto"
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      {/* Floating Glassmorphism Player Capsule */}
      <div
        className="group relative flex items-center gap-3.5 sm:gap-4 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#07031c]/65 hover:bg-[#0a0528]/80 backdrop-blur-2xl border border-white/[0.12] hover:border-cyan-400/60 shadow-[0_10px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_12px_45px_rgba(0,0,0,0.7),0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 cursor-pointer"
        onClick={togglePlay}
        title={isPlaying ? 'Click to pause music' : 'Click to play cosmic track'}
      >
        {/* Ambient neon edge glow */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 via-cyan-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
            isPlaying ? 'opacity-100' : ''
          }`}
        />

        {/* Spinning Vinyl Disc / Music Icon */}
        <div className="relative flex items-center justify-center">
          <div
            className={`w-9 h-9 rounded-full bg-gradient-to-tr from-purple-900 to-cyan-900 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.4)] transition-transform ${
              isPlaying ? 'animate-spin' : ''
            }`}
            style={{ animationDuration: '4s' }}
          >
            <Disc3 className="w-5 h-5 text-cyan-300" />
          </div>
          {isPlaying && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-ping" />
          )}
        </div>

        {/* Track Details */}
        <div className="flex flex-col pr-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-black tracking-wider text-white group-hover:text-cyan-300 transition-colors">
              HYPNOTIC
            </span>
            <Music2 className="w-3 h-3 text-cyan-400 opacity-80" />
          </div>
          <span className="text-[10px] font-mono text-slate-400 tracking-wider">
            isq (super slowed)
          </span>
        </div>

        {/* Animated Audio Equalizer Visualizer (4 dynamic bars) */}
        <div className="flex items-end gap-1 h-5 px-1 py-0.5" aria-hidden="true">
          <span
            className={`w-1 rounded-full bg-gradient-to-t from-cyan-500 to-emerald-400 transition-all ${
              isPlaying ? 'h-5 animate-pulse' : 'h-1.5 opacity-40'
            }`}
            style={{ animationDuration: '0.6s' }}
          />
          <span
            className={`w-1 rounded-full bg-gradient-to-t from-cyan-500 to-emerald-400 transition-all ${
              isPlaying ? 'h-3 animate-pulse' : 'h-1.5 opacity-40'
            }`}
            style={{ animationDuration: '0.8s', animationDelay: '0.15s' }}
          />
          <span
            className={`w-1 rounded-full bg-gradient-to-t from-cyan-500 to-emerald-400 transition-all ${
              isPlaying ? 'h-4.5 animate-pulse' : 'h-1.5 opacity-40'
            }`}
            style={{ animationDuration: '0.5s', animationDelay: '0.3s' }}
          />
          <span
            className={`w-1 rounded-full bg-gradient-to-t from-cyan-500 to-emerald-400 transition-all ${
              isPlaying ? 'h-2.5 animate-pulse' : 'h-1.5 opacity-40'
            }`}
            style={{ animationDuration: '0.7s', animationDelay: '0.45s' }}
          />
        </div>

        {/* Play/Pause Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          className="w-8 h-8 rounded-full bg-cyan-400/20 hover:bg-cyan-400/30 border border-cyan-400/50 flex items-center justify-center text-white shadow-[0_0_12px_rgba(6,182,212,0.3)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5 fill-current text-cyan-300" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-current text-cyan-300 ml-0.5" />
          )}
        </button>

        {/* Mute/Volume Toggle & Slider */}
        <div className="relative flex items-center" onMouseLeave={() => setShowVolumeSlider(false)}>
          <button
            type="button"
            onClick={toggleMute}
            onMouseEnter={() => setShowVolumeSlider(true)}
            className="p-1 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-rose-400" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>

          {showVolumeSlider && (
            <div className="absolute bottom-full mb-3 -right-2 p-2 rounded-xl bg-[#07031c]/90 border border-cyan-500/30 backdrop-blur-md shadow-xl flex items-center">
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setVolume(val);
                  if (audioRef.current) audioRef.current.volume = val;
                  if (val > 0 && isMuted) {
                    setIsMuted(false);
                    if (audioRef.current) audioRef.current.muted = false;
                  }
                }}
                className="w-20 h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
