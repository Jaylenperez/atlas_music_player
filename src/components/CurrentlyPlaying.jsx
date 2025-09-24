import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

export default function CurrentlyPlaying() {
  return (
    <div className="flex flex-col items-center gap-4">
      <CoverArt />

      <div className="w-full max-w-[400px] text-left">
        <SongTitle />
      </div>

      <div className="text-plum">
        <PlayControls />
      </div>

      <VolumeControls />
    </div>
  );
}
