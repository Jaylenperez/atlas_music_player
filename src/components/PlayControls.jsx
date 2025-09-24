import { Rewind, Play, FastForward, Shuffle } from "lucide-react";

export default function PlayControls() {
  return (
    <div className="flex items-center justify-center gap-4">
      {/* Speed */}
      <button
        id="speedButton"
        className="font-bold text-purple-950 dark:text-amber-200"
      >
        1x
      </button>

      {/* Back */}
      <button
        type="button"
        aria-label="Back"
        title="Back"
        className="p-2 text-purple-950 dark:text-amber-200"
      >
        <Rewind className="h-5 w-5" />
      </button>

      {/* Play (accent) */}
      <button
        type="button"
        aria-label="Play"
        title="Play"
        className="rounded-md border border-purple-950 p-2 text-purple-900 dark:border-amber-200 dark:text-amber-200"
      >
        <Play className="h-6 w-6" />
      </button>

      {/* Forward */}
      <button
        type="button"
        aria-label="Forward"
        title="Forward"
        className="p-2 text-purple-950 dark:text-amber-200"
      >
        <FastForward className="h-5 w-5" />
      </button>

      {/* Shuffle */}
      <button
        type="button"
        aria-label="Shuffle"
        title="Shuffle"
        className="p-2 text-purple-950 dark:text-amber-200"
      >
        <Shuffle className="h-5 w-5" />
      </button>
    </div>
  );
}
