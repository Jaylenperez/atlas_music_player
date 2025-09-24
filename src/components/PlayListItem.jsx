export default function PlayListItem() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-plum font-sans text-lg font-bold">
          Electric Fever
        </h1>
        <p className="text-accent font-sans text-base font-bold text-gray-500">
          Neon Jungle
        </p>
      </div>

      <span className="text-grey font-sans text-sm">3:45</span>
    </div>
  );
}
