import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 p-6 md:flex-row">
      <div className="flex-1">
        <CurrentlyPlaying />
      </div>

      <div className="w-1/3">
        <Playlist />
      </div>
    </div>
  );
}
