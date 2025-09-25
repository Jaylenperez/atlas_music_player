import React from "react";

export interface SongTitleProps {
  lightMode: boolean;
  title: string;
  artist: string;
}

export const SongTitle: React.FC<SongTitleProps> = ({
  lightMode,
  title,
  artist,
}) => (
  <div className="w-full">
    <h2
      className={`text-left text-2xl font-bold ${
        lightMode ? "text-indigo-950" : "text-amber-200"
      }`}
    >
      {title}
    </h2>
    <p
      className={`text-left text-lg ${
        lightMode ? "text-gray-500" : "text-gray-300"
      }`}
    >
      {artist}
    </p>
  </div>
);
