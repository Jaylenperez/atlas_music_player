import { CoverArt } from "./CoverArt";
import { SongTitle } from "./SongTitle";
import { PlayControls } from "./PlayControls";
import { VolumeControls } from "./VolumeControls";
import PlayListItem from "./PlayListItem";

export default function MusicPlayer() {
  return (
    <div>
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControls />
      <PlayListItem
        title="Nightmare"
        artist="Avenged Sevenfold"
        length="6:14"
      />
    </div>
  );
}
