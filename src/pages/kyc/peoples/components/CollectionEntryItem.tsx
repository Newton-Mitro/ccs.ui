function CollectionEntryItem() {
  return (
    <div className="flex gap-4 items-center justify-end mx-2">
      <div className="flex w-full justify-end gap-2 items-center border border-gray-800 pl-2">
        <span>Saving Account - Jone Doe (50725) - Personal</span>
        <input
          type="text"
          className="rounded-sm py-1 border-gray-700 bg-transparent shadow-sm focus:border-gray-800 focus:ring focus:ring-gray-800 focus:ring-opacity-50 text-gray-300"
        />
      </div>
      <input
        id="pin"
        name="pin"
        type="checkbox"
        className="border border-gray-500 bg-gray-700  checked:bg-sky-800 checked:after:translate-x-full focus:ring-green-950"
      />
    </div>
  );
}

export default CollectionEntryItem;
