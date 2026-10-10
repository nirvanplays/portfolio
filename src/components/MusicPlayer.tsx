'use client';

import { useState, useRef, useEffect } from 'react';
import type React from 'react';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Disc3,
  Music2,
  ListMusic,
  Sparkles,
} from 'lucide-react';

interface Track {
  id: string;
  name: string;
  artist: string;
  vibe: string;
  src: string;
}

const PLAYLIST: Track[] = [
  {
    id: 'hypnotic',
    name: 'HYPNOTIC',
    artist: 'isq (super slowed)',
    vibe: 'Dark Phonk / Ambient Slowed',
    src: '/assets/hypnotic.mp3',
  },
  {
    id: 'horizon',
    name: 'HORIZON MONOLITH',
    artist: 'Aeris (Synthwave)',
    vibe: 'Cosmic Synthwave / Interstellar',
    src: '/assets/horizon-monolith.mp3',
  },
  {
    id: 'afterglow',
    name: 'AFTERGLOW (VAST)',
    artist: 'Aeris (Space Ambient)',
    vibe: 'Dreamy Celestial Space',
    src: '/assets/afterglow-vast.mp3',
  },
  {
    id: 'outlands',
    name: 'OUTLANDS',
    artist: 'Aeris (Lo-Fi)',
    vibe: 'Chill Lo-Fi Focus',
    src: '/assets/outlands.mp3',
  },
];

export const MusicPlayer: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [volume, setVolume] = useState(0.75);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = PLAYLIST[currentTrackIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // When track changes, update source and play if was playing
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = currentTrack.src;
    audio.load();

    if (isPlaying) {
      audio.play().catch((err) => {
        console.warn('Track switch playback error:', err);
      });
    }
  }, [currentTrackIndex]);

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

  const nextTrack = (e?: React.SyntheticEvent | React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
  };

  const prevTrack = (e?: React.SyntheticEvent | React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentTrackIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
  };

  const selectTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setShowPlaylist(false);
    // ensure playback begins on explicit song selection
    setTimeout(() => {
      audioRef.current?.play().then(() => setIsPlaying(true)).catch(() => {});
    }, 100);
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
        src={currentTrack.src}
        loop={false}
        preload="auto"
        onEnded={nextTrack}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      {/* Playlist Drawer Popup (Transparent Glass) */}
      {showPlaylist && (
        <div
          className="absolute bottom-full mb-3 right-0 w-72 sm:w-80 rounded-2xl bg-[#07031c]/90 border border-cyan-500/30 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(6,182,212,0.25)] p-3.5 space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-200"
          onMouseLeave={() => setShowPlaylist(false)}
        >
          <div className="flex items-center justify-between px-2 pb-2 border-b border-purple-500/20 text-xs font-mono">
            <span className="text-cyan-400 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COSMIC VIBES PLAYLIST</span>
            </span>
            <span className="text-slate-400 text-[10px]">4 TRACKS</span>
          </div>

          <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
            {PLAYLIST.map((track, idx) => {
              const active = idx === currentTrackIndex;
              return (
                <button
                  key={track.id}
                  onClick={() => selectTrack(idx)}
                  className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between group cursor-pointer ${
                    active
                      ? 'bg-purple-900/40 border border-cyan-400/50 text-white shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                      : 'hover:bg-white/[0.05] border border-transparent text-slate-300'
                  }`}
                >
                  <div className="space-y-0.5 truncate">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono ${active ? 'text-cyan-300 font-bold' : 'text-slate-500'}`}>
                        0{idx + 1}
                      </span>
                      <span className={`text-xs font-bold tracking-wider truncate ${active ? 'text-cyan-300' : 'group-hover:text-white'}`}>
                        {track.name}
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono truncate pl-5">
                      {track.vibe}
                    </div>
                  </div>

                  {active && isPlaying && (
                    <div className="flex items-end gap-0.5 h-3 pl-2 flex-shrink-0">
                      <span className="w-0.5 h-3 bg-cyan-400 animate-pulse" />
                      <span className="w-0.5 h-2 bg-cyan-400 animate-pulse delay-75" />
                      <span className="w-0.5 h-2.5 bg-cyan-400 animate-pulse delay-150" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Glassmorphism Player Capsule */}
      <div
        className="group relative flex items-center gap-2.5 sm:gap-3.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-[#07031c]/70 hover:bg-[#0a0528]/85 backdrop-blur-2xl border border-white/[0.14] hover:border-cyan-400/60 shadow-[0_10px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_12px_45px_rgba(0,0,0,0.7),0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 cursor-pointer"
        onClick={togglePlay}
        title={isPlaying ? 'Click to pause' : 'Click to play cosmic vibes'}
      >
        {/* Ambient neon edge glow */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 via-cyan-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
            isPlaying ? 'opacity-100' : ''
          }`}
        />

        {/* Spinning Vinyl Disc / Music Icon */}
        <div className="relative flex items-center justify-center flex-shrink-0">
          <div
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-purple-900 to-cyan-900 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.4)] transition-transform ${
              isPlaying ? 'animate-spin' : ''
            }`}
            style={{ animationDuration: '4s' }}
          >
            <Disc3 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300" />
          </div>
          {isPlaying && (
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-ping" />
          )}
        </div>

        {/* Track Details */}
        <div className="flex flex-col pr-1 max-w-[130px] sm:max-w-[180px] truncate">
          <div className="flex items-center gap-1.5 truncate">
            <span className="font-mono text-xs font-black tracking-wider text-white group-hover:text-cyan-300 transition-colors truncate">
              {currentTrack.name}
            </span>
            <Music2 className="w-3 h-3 text-cyan-400 opacity-80 flex-shrink-0" />
          </div>
          <span className="text-[10px] font-mono text-slate-400 tracking-wider truncate">
            {currentTrack.artist}
          </span>
        </div>

        {/* Track Controls: Prev, Play/Pause, Next */}
        <div className="flex items-center gap-1">
          {/* Prev Track */}
          <button
            type="button"
            onClick={prevTrack}
            className="w-7 h-7 rounded-full hover:bg-white/[0.08] flex items-center justify-center text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
            aria-label="Previous Track"
            title="Previous Track"
          >
            <SkipBack className="w-3.5 h-3.5 fill-current" />
          </button>

          {/* Play/Pause Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            className="w-8 h-8 rounded-full bg-cyan-400/20 hover:bg-cyan-400/35 border border-cyan-400/50 flex items-center justify-center text-white shadow-[0_0_12px_rgba(6,182,212,0.3)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 fill-current text-cyan-300" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current text-cyan-300 ml-0.5" />
            )}
          </button>

          {/* Next Track */}
          <button
            type="button"
            onClick={nextTrack}
            className="w-7 h-7 rounded-full hover:bg-white/[0.08] flex items-center justify-center text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
            aria-label="Next Track"
            title="Next Track"
          >
            <SkipForward className="w-3.5 h-3.5 fill-current" />
          </button>
        </div>

        {/* Animated Audio Equalizer Visualizer (4 dynamic bars) */}
        <div className="hidden sm:flex items-end gap-1 h-5 px-1 py-0.5 flex-shrink-0" aria-hidden="true">
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

        {/* Playlist Toggle Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setShowPlaylist(!showPlaylist);
          }}
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
            showPlaylist ? 'bg-cyan-400/20 text-cyan-300' : 'text-slate-400 hover:text-cyan-300'
          }`}
          title="Toggle Playlist"
          aria-label="Toggle Playlist"
        >
          <ListMusic className="w-4 h-4" />
        </button>

        {/* Mute/Volume Toggle & Slider */}
        <div className="relative flex items-center" onMouseLeave={() => setShowVolumeSlider(false)}>
          <button
            type="button"
            onClick={toggleMute}
            onMouseEnter={() => setShowVolumeSlider(true)}
            className="p-1 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
            title={isMuted ? 'Unmute' : 'Mute'}
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

export const TransparentMusicPlayer = MusicPlayer;
export default MusicPlayer;
