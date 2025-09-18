import { Volume2 } from "lucide-react";

export default function VolumeControls() {
  return (
    <div class="w-full bg-white p-6">
      <div className="flex items-center gap-3">
        {/* Volume Button */}
        <button
          type="button"
          aria-label="Back"
          title="Back"
          className="p-2 text-black"
        >
          <Volume2 className="size-5" />
        </button>

        {/* Sound Bar */}
        <input type="range" className="w-full" />
      </div>
    </div>
  );
}
