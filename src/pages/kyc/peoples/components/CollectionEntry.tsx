import CollectionEntryItem from "./CollectionEntryItem";

function CollectionEntry() {
  return (
    <div className="flex flex-col h-full gap-2">
      <header className="text-center font-bold p-4 bg-gray-800/70 border-b border-gray-800">
        Collection Entry
      </header>
      <div className="flex gap-2 flex-col mx-2 h-[calc(100vh-262px)] overflow-auto">
        <CollectionEntryItem />
        <CollectionEntryItem />
        <CollectionEntryItem />
        <CollectionEntryItem />
        <CollectionEntryItem />
        <CollectionEntryItem />
        <CollectionEntryItem />
        <CollectionEntryItem />
        <CollectionEntryItem />
        <CollectionEntryItem />
        <CollectionEntryItem />
        <CollectionEntryItem />
        <CollectionEntryItem />
        <CollectionEntryItem />
        <CollectionEntryItem />
        <CollectionEntryItem />
        <CollectionEntryItem />
      </div>
      <footer className="text-center font-bold p-4 bg-gray-800/70 border-b border-gray-800 mt-auto flex justify-between items-center">
        <div className="flex gap-2 justify-center">
          <button className="bg-gray-800 hover:bg-gray-900 border border-gray-700 hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer">
            <span className="md:block hidden">Collect For Later</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 md:hidden block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>
          </button>
          <button className="bg-gray-800 hover:bg-gray-900 border border-gray-700 hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer">
            <span className="md:block hidden">Collect Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 md:hidden block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>
          </button>
        </div>
        <div className="flex gap-2 pr-4">
          <span>Total</span>
          <strong>50.00 ৳</strong>
        </div>
      </footer>
    </div>
  );
}

export default CollectionEntry;
