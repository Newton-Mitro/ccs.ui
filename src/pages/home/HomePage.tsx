import { useState } from "react";
import PaginateRow from "./PaginateRow";
import TableRow from "./TableRow";

function HomePage() {
  const [isAdvanceSearchOpen, setAdvanceSearchOpen] = useState(false);

  const toggleAdvanceSearchOption = () => {
    setAdvanceSearchOpen(!isAdvanceSearchOpen);
  };

  return (
    <div className="w-full space-y-2">
      <h2 className="text-xl">Peoples</h2>
      <div className="h-[calc(100vh-132px)] border border-gray-800 bg-zinc-950 p-2 flex flex-col overflow-auto">
        <div className="">
          <div className="flex items-center my-1.5 gap-2 justify-between">
            <button
              type="submit"
              className="bg-gray-800 hover:bg-gray-900 border border-gray-700 hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-4 hover:cursor-pointer"
            >
              <span className="md:block hidden">Create Person</span>
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
            <div className="relative flex gap-10 items-center">
              <div className="flex gap-2 items-center justify-end relative">
                <input
                  type="text"
                  className="mt-1 w-48 md:w-80 rounded-sm py-1 border-gray-700 bg-transparent shadow-sm focus:border-gray-800 focus:ring focus:ring-gray-800 focus:ring-opacity-50 text-gray-300"
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
                    <div className="text-center font-bold mb-2">
                      Search Options
                    </div>
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
                    <div className="font-bold">Order By</div>
                    <hr className="border-gray-700 mt-2" />
                    <div className="my-2">
                      <label htmlFor="" className="flex gap-4 flex-wrap">
                        <div className="flex items-center gap-2">
                          <input
                            id="pin"
                            name="order_by"
                            type="radio"
                            className="border border-gray-500 bg-gray-700  checked:bg-sky-800 checked:after:translate-x-full focus:ring-green-950"
                          />
                          <p>Identification Number</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            id="name"
                            name="order_by"
                            type="radio"
                            className="border border-gray-500 bg-gray-700  checked:bg-sky-800 checked:after:translate-x-full focus:ring-green-950"
                          />
                          <p>Name</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            id="mobile_number"
                            name="order_by"
                            type="radio"
                            className="border border-gray-500 bg-gray-700  checked:bg-sky-800 checked:after:translate-x-full focus:ring-green-950"
                          />
                          <p>Mobile Number</p>
                        </div>
                      </label>
                    </div>
                    <div className="font-bold">Sort By</div>
                    <hr className="border-gray-700 mt-2" />
                    <div className="flex gap-2 items-center mt-2 mb-4">
                      ASC
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input
                          id="switch-2"
                          type="checkbox"
                          className="peer sr-only"
                        />
                        <div className="peer h-4 w-11 rounded-full border border-gray-700 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-full after:border after:border-gray-600 after:bg-sky-600 after:transition-all after:content-[''] peer-checked:bg-sky-800 peer-checked:after:translate-x-full peer-focus:ring-green-950"></div>
                      </label>
                      DES
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <button
                      type="submit"
                      onClick={toggleAdvanceSearchOption}
                      className="flex-0 bg-gray-800 hover:bg-gray-900 border border-gray-700 hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-4 hover:cursor-pointer"
                    >
                      Search
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="h-[calc(100vh-244px)] overflow-auto border border-b border-gray-800">
            <table className="whitespace-no-wrap relative w-full table-auto border-collapse border">
              <thead className="w-full">
                <tr className="sticky -top-1 h-10 hidden w-full shadow-sm md:table-row bg-gray-800">
                  <th className="cursor-pointer border border-gray-800 p-2 transition-colors hover:bg-blue-gray-50">
                    <div
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none"
                    >
                      Name EN
                    </div>
                  </th>
                  <th className="cursor-pointer border border-gray-800 p-2 transition-colors hover:bg-blue-gray-50">
                    <div
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none"
                    >
                      Name BN
                    </div>
                  </th>
                  <th className="cursor-pointer border border-gray-800 p-2 transition-colors hover:bg-blue-gray-50">
                    <div
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none"
                    >
                      Identification Number
                    </div>
                  </th>
                  <th className="cursor-pointer border border-gray-800 p-2 transition-colors hover:bg-blue-gray-50">
                    <div
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none"
                    >
                      Email
                    </div>
                  </th>
                  <th className="cursor-pointer border border-gray-800 p-2 transition-colors hover:bg-blue-gray-50">
                    <div
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none"
                    >
                      Mobile Number
                    </div>
                  </th>
                  <th className="cursor-pointer border border-gray-800 p-2 transition-colors hover:bg-blue-gray-50">
                    <div
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none"
                    >
                      Contact Number
                    </div>
                  </th>
                  <th className="cursor-pointer border border-gray-800 p-2 transition-colors hover:bg-blue-gray-50">
                    <div
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none"
                    >
                      Phone Number
                    </div>
                  </th>
                  <th className="cursor-pointer border border-gray-800 p-2 transition-colors hover:bg-blue-gray-50">
                    <div
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none"
                    >
                      Actions
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className="flex-1 md:flex-none space-y-6">
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
              </tbody>
            </table>
          </div>
        </div>
        <PaginateRow />
      </div>
    </div>
  );
}

export default HomePage;
