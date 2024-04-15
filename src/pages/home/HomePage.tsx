import { Link } from "react-router-dom";
import TableRow from "./TableRow";

function HomePage() {
  return (
    <div className="w-full space-y-2">
      <h2 className="text-xl">Peoples</h2>
      <div className="h-[calc(100vh-132px)] border border-gray-800 bg-zinc-950 p-2 flex flex-col overflow-auto">
        <div className="">
          <div className="flex items-center my-2 gap-2 justify-between">
            <button
              type="submit"
              className="flex-0 bg-gray-800 hover:bg-gray-900 border border-gray-700 hover:shadow-md transition-all duration-300 shadow-sm rounded py-2 px-4 hover:cursor-pointer"
            >
              Create Person
            </button>
            <div className="flex gap-2 items-center w-40 justify-end">
              <label className="login-label hidden md:block" htmlFor="username">
                Search
              </label>
              <input
                type="text"
                className="mt-1 rounded-sm py-1 border-gray-800 bg-transparent shadow-sm focus:border-gray-800 focus:ring focus:ring-gray-800 focus:ring-opacity-50 text-gray-300"
              />
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
        <div className="mt-auto">
          <nav
            className="flex flex-row flex-nowrap justify-between md:justify-center items-center"
            aria-label="Pagination"
          >
            <Link
              className="flex w-8 h-8 mr-1 justify-center items-center rounded-full border border-gray-800   hover:border-gray-300"
              to="#"
              title="Previous Page"
            >
              <span className="sr-only">Previous Page</span>
              <svg
                className="block w-4 h-4 fill-current"
                viewBox="0 0 256 512"
                aria-hidden="true"
                role="presentation"
              >
                <path d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path>
              </svg>
            </Link>
            <Link
              className="hidden md:flex w-8 h-8 mx-1 justify-center items-center rounded-full border border-gray-800   hover:border-gray-300"
              to="#"
              title="Page 1"
            >
              1
            </Link>
            <Link
              className="hidden md:flex w-8 h-8 mx-1 justify-center items-center rounded-full border border-gray-800   pointer-events-none"
              to="#"
              aria-current="page"
              title="Page 3"
            >
              2
            </Link>

            <Link
              className="flex w-8 h-8 ml-1 justify-center items-center rounded-full border border-gray-800   hover:border-gray-300"
              to="#"
              title="Next Page"
            >
              <span className="sr-only">Next Page</span>
              <svg
                className="block w-4 h-4 fill-current"
                viewBox="0 0 256 512"
                aria-hidden="true"
                role="presentation"
              >
                <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
              </svg>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
