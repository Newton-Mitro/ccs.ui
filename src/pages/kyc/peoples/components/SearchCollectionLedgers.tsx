import SearchCollectionLedgersItem from "./SearchCollectionLedgersItem";

function SearchCollectionLedgers({
  toggleAdvanceSearchOption,
  isAdvanceSearchOpen,
}: any) {
  return (
    <div className="h-[calc((100vh/2)-66px)] overflow-auto border border-gray-800">
      <header className="text-center font-bold p-2 bg-gray-800/70 border-b border-gray-800">
        <div className="relative flex gap-10 items-center justify-end">
          <div className="flex gap-2 items-center justify-end relative">
            <input
              type="text"
              className="mt-1 w-full md:w-80 rounded-sm py-1 border-gray-700 bg-transparent shadow-sm focus:border-gray-800 focus:ring focus:ring-gray-800 focus:ring-opacity-50 text-gray-300"
            />
            <button className="absolute top-1 border border-slate-700 hover:bg-slate-800 rounded-r -right-8 bg-slate-700 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
            <button className="absolute hidden top-1 border border-slate-700 hover:bg-slate-800 rounded-r -right-8 bg-slate-700 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <button
            onClick={toggleAdvanceSearchOption}
            className="flex items-center bg-gray-800 hover:bg-gray-900 border border-gray-700 hover:shadow-md transition-all duration-300 shadow-sm rounded py-1 px-1 hover:cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
              />
            </svg>
          </button>
          {isAdvanceSearchOpen && (
            <div className="rounded absolute top-10 right-0 bg-gray-800 border border-gray-700 w-[calc(100vw-76px)] md:w-[394px] z-10 px-3 pt-2 pb-4">
              <div className="">
                <div className="text-center font-bold mb-2">Search Options</div>
                <div className="font-bold">Search Fields</div>
                <hr className="border-gray-700 mt-2" />
                <div className="my-2">
                  <label htmlFor="" className="flex gap-4 flex-wrap">
                    <div className="flex items-center gap-2">
                      <input
                        id="pin"
                        name="pin"
                        checked
                        type="checkbox"
                        className="border border-gray-500 bg-gray-700  checked:bg-sky-800 checked:after:translate-x-full focus:ring-green-950"
                      />
                      <p>Identification Number</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        id="account_number"
                        name="account_number"
                        type="checkbox"
                        className="border border-gray-500 bg-gray-700  checked:bg-sky-800 checked:after:translate-x-full focus:ring-green-950"
                      />
                      <p>Account Number</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        id="name"
                        name="name"
                        type="checkbox"
                        className="border border-gray-500 bg-gray-700  checked:bg-sky-800 checked:after:translate-x-full focus:ring-green-950"
                      />
                      <p>Name</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        id="mobile_number"
                        name="mobile_number"
                        type="checkbox"
                        className="border border-gray-500 bg-gray-700  checked:bg-sky-800 checked:after:translate-x-full focus:ring-green-950"
                      />
                      <p>Mobile Number</p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  onClick={toggleAdvanceSearchOption}
                  className="flex-0 bg-gray-800 hover:bg-gray-900 border border-gray-700 hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                >
                  Search
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
      <div className="flex gap-2 flex-col p-2 h-[calc((100vh/2)-174px)] overflow-auto">
        <SearchCollectionLedgersItem />
        <SearchCollectionLedgersItem />
        <SearchCollectionLedgersItem />
        <SearchCollectionLedgersItem />
        <SearchCollectionLedgersItem />
        <SearchCollectionLedgersItem />
        <SearchCollectionLedgersItem />
        <SearchCollectionLedgersItem />
        <SearchCollectionLedgersItem />
        <SearchCollectionLedgersItem />
        <SearchCollectionLedgersItem />
        <SearchCollectionLedgersItem />
      </div>
      <footer className="text-center font-bold p-2 bg-gray-800/70 border-b border-gray-800 mt-auto flex justify-between items-center">
        <div className="flex gap-2 justify-center">
          <button className="bg-gray-800 hover:bg-gray-900 border border-gray-700 hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer">
            <span className="md:block hidden">Take All For Collection</span>
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
            <span className="md:block hidden">
              Take Selected For Collection
            </span>
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
      </footer>
    </div>
  );
}

export default SearchCollectionLedgers;
