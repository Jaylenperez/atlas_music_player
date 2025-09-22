import { Volume2 } from "lucide-react";

export default function VolumeControls() {
  return (
    <div className="w-full pl-13">
      <div className="flex items-center gap-3">
        {/* Volume Button */}
        <button
          type="button"
          aria-label="Volume"
          title="Volume"
          className="p-2 text-black"
        >
          <Volume2 className="size-5" />
        </button>

        {/* Sound Bar (fills the rest of the space) */}
        <input type="range" className="w-92" />
      </div>
    </div>
  );
}
