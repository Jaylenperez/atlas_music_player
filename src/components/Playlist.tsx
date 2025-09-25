import React from "react";

export interface PlaylistSong {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
}

interface PlaylistProps {
  lightMode: boolean;
  tracks: PlaylistSong[];
  selected: PlaylistSong | null;
  onSelect: (track: PlaylistSong) => void;
}

const Playlist: React.FC<PlaylistProps> = ({
  lightMode,
  tracks,
  selected,
  onSelect,
}) => (
  <div className="w-full">
    <h2
      className={`mb-4 text-left text-2xl font-semibold ${
        lightMode ? "text-indigo-950" : "text-amber-200"
      }`}
    >
      Playlist
    </h2>

    <div className="space-y-1">
      {tracks.map((track) => {
        const isSelected = selected?.id === track.id;
        return (
          <div
            key={track.id}
            onClick={() => onSelect(track)}
            className={`cursor-pointer rounded-md border-b ${
              lightMode ? "border-gray-200" : "border-stone-600"
            } px-4 py-2 transition ${
              isSelected
                ? lightMode
                  ? "bg-amber-200"
                  : "bg-indigo-800"
                : ""
            } ${lightMode ? "hover:bg-amber-200" : "hover:bg-indigo-900"}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3
                  className={`text-lg font-medium ${
                    lightMode ? "text-indigo-900" : "text-amber-200"
                  }`}
                >
                  {track.title}
                </h3>
                <p
                  className={`text-sm ${
                    lightMode ? "text-indigo-400" : "text-gray-300"
                  }`}
                >
                  {track.artist}
                </p>
              </div>
              <span
                className={`text-sm ${
                  lightMode ? "text-gray-400" : "text-amber-200"
                }`}
              >
                {Math.floor(track.duration / 60)}:
                {String(track.duration % 60).padStart(2, "0")}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Playlist;
