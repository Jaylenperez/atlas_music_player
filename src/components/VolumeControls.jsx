import { Volume2 } from "lucide-react";

export default function VolumeControls() {
  return (
    <div className="w-full pl-24">
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

        <input type="range" className="w-95" />
      </div>
    </div>
  );
}
