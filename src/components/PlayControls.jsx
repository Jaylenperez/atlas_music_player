import { Rewind, Play, FastForward, Shuffle } from "lucide-react";

export default function PlayControls() {
  return (
    <div className="flex items-center justify-center gap-4">
      {/* Speed */}
      <button id="speedButton" className="font-bold text-black">
        1x
      </button>

      {/* Back */}
      <button
        type="button"
        aria-label="Back"
        title="Back"
        className="p-2 text-black"
      >
        <Rewind className="h-5 w-5" />
      </button>

      {/* Play (accent) */}
      <button
        type="button"
        aria-label="Play"
        title="Play"
        className="rounded-md border border-black p-2 text-black"
      >
        <Play className="h-6 w-6" />
      </button>

      {/* Forward */}
      <button
        type="button"
        aria-label="Forward"
        title="Forward"
        className="p-2 text-black"
      >
        <FastForward className="h-5 w-5" />
      </button>

      {/* Shuffle */}
      <button
        type="button"
        aria-label="Shuffle"
        title="Shuffle"
        className="p-2 text-black"
      >
        <Shuffle className="h-5 w-5" />
      </button>
    </div>
  );
}
