import { Volume2 } from "lucide-react";

export default function VolumeControls() {
  return (
    <div className="w-full pl-1">
      <div className="flex items-center gap-3">
        {/* Volume Button */}
        <button
          type="button"
          aria-label="Volume"
          title="Volume"
          className="p-2 text-purple-900 dark:text-amber-200"
        >
          <Volume2 className="h-5 w-5" />
        </button>

        <input type="range" className="w-full" />
      </div>
    </div>
  );
}
