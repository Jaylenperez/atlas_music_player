export default function PlayListItem() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="font-sans text-lg font-bold text-purple-950 dark:text-amber-200">
          Electric Fever
        </h1>
        <p className="font-sans text-base font-bold text-gray-600 dark:text-gray-400">
          Neon Jungle
        </p>
      </div>

      <span className="font-sans text-sm text-gray-600 dark:text-gray-400">
        3:45
      </span>
    </div>
  );
}
