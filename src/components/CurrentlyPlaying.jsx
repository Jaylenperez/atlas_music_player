import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import { MoonStar, Sun } from "lucide-react";

export default function CurrentlyPlaying() {
  return (
    <div className="flex flex-col items-center gap-4">
      <MoonStar className="self-start text-purple-950 dark:text-amber-200" />
      <CoverArt />

      <div className="-ml-44 w-full max-w-[400px] text-left">
        <SongTitle />
      </div>

      <div className="-ml-4">
        <PlayControls />
      </div>

      <VolumeControls />
    </div>
  );
}
