function SearchCollectionLedgersItem() {
  return (
    <div className="flex gap-4 p-2 items-center justify-start">
      <span className="hover:text-orange-300 transition-all hover:font-bold hover:cursor-pointer">
        {"<<"}
      </span>
      <span>Saving Account - Jone Doe (50725) - Personal</span>
      <input
        id="pin"
        name="pin"
        type="checkbox"
        className="border border-gray-500 bg-gray-700  checked:bg-sky-800 checked:after:translate-x-full focus:ring-green-950"
      />
    </div>
  );
}

export default SearchCollectionLedgersItem;
