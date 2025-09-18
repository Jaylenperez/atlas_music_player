import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import PlayListItem from "./PlayListItem";

export default function MusicPlayer() {
  return (
    <div className="mx-auto w-full max-w-xl p-6">
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControls />
      <PlayListItem />
    </div>
  );
}
