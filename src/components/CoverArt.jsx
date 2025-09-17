import placeholder from "../assets/placeholder.svg";

export default function CoverArt() {
  return (
    <figure className="aspect-square w-100 overflow-hidden rounded-md bg-neutral-200 shadow ring-1 ring-black/10 dark:bg-neutral-800 dark:ring-white/10">
      <img
        src={placeholder}
        alt="Album cover art"
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </figure>
  );
}
