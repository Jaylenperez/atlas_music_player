import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";

export default function MusicPlayer() {
  return (
    <div className="mx-auto w-full max-w-xl p-6">
      <CoverArt />
      <SongTitle />
    </div>
  );
}
