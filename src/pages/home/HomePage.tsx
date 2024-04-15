import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="w-full space-y-2">
      <h2 className="text-xl">Peoples</h2>
      <div className="h-[calc(100vh-132px)] border border-gray-800 bg-zinc-950 p-2">
        <div className="flex items-center my-2 justify-between">
          <button
            type="submit"
            className="hover:bg-gray-800 border border-gray-800 hover:shadow-md transition-all duration-300 shadow-sm rounded py-2 px-4 hover:cursor-pointer"
          >
            Create Person
          </button>
          <div className="flex gap-2 items-center">
            <label className="login-label" htmlFor="username">
              Search
            </label>
            <input
              type="text"
              className="mt-1 rounded-sm py-1 border-gray-800 bg-transparent shadow-sm focus:border-gray-800 focus:ring focus:ring-gray-800 focus:ring-opacity-50 text-gray-300"
            />
          </div>
        </div>
        <table className="whitespace-no-wrap relative w-full table-auto border-collapse border">
          <thead className="w-full">
            <tr className="sticky -top-0 hidden w-full shadow-sm md:table-row">
              <th className="cursor-pointer border-y border-gray-800 p-2 transition-colors hover:bg-blue-gray-50">
                <div
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none"
                >
                  Name EN
                </div>
              </th>
              <th className="cursor-pointer border-y border-gray-800 p-2 transition-colors hover:bg-blue-gray-50">
                <div
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none"
                >
                  Name BN
                </div>
              </th>
              <th className="cursor-pointer border-y border-gray-800 p-2 transition-colors hover:bg-blue-gray-50">
                <div
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none"
                >
                  Identification Number
                </div>
              </th>
              <th className="cursor-pointer border-y border-gray-800 p-2 transition-colors hover:bg-blue-gray-50">
                <div
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none"
                >
                  Email
                </div>
              </th>
              <th className="cursor-pointer border-y border-gray-800 p-2 transition-colors hover:bg-blue-gray-50">
                <div
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none"
                >
                  Mobile Number
                </div>
              </th>
              <th className="cursor-pointer border-y border-gray-800 p-2 transition-colors hover:bg-blue-gray-50">
                <div
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none"
                >
                  Contact Number
                </div>
              </th>
              <th className="cursor-pointer border-y border-gray-800 p-2 transition-colors hover:bg-blue-gray-50">
                <div
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none"
                >
                  Phone Number
                </div>
              </th>
              <th className="cursor-pointer border-y border-gray-800 p-2 transition-colors hover:bg-blue-gray-50">
                <div
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none"
                >
                  Actions
                </div>
              </th>
            </tr>
          </thead>

          <tbody className="flex-1 sm:flex-none">
            <tr className="flex w-full flex-col flex-wrap border-b border-gray-800 last:border-b-0 even:bg-blue-gray-600/5 md:table-row">
              <td className="border border-gray-800 px-2">
                <label className="md:hidden">Name EN</label>
                <p className="font-semibold md:font-normal">John Doe</p>
              </td>
              <td className="border border-gray-800 px-2">
                <label className="md:hidden">Name BN</label>
                <p className="font-semibold md:font-normal">John Doe</p>
              </td>
              <td className="border border-gray-800 px-2">
                <label className="md:hidden">Identification Number</label>
                <p className="font-semibold md:font-normal">0000001</p>
              </td>
              <td className="border border-gray-800 px-2">
                <label className="md:hidden">Email</label>
                <p className="font-semibold md:font-normal">
                  john.doe@email.com
                </p>
              </td>

              <td className="border border-gray-800 px-2">
                <label className="md:hidden">Mobile Number</label>
                <p className="font-semibold md:font-normal">012354218692</p>
              </td>
              <td className="border border-gray-800 px-2">
                <label className="md:hidden">Contact Number</label>
                <p className="font-semibold md:font-normal">0170454235747</p>
              </td>
              <td className="border border-gray-800 px-2">
                <label className="md:hidden">Phone Number</label>
                <p className="font-semibold md:font-normal">+99-5315644</p>
              </td>
              <td className="border border-gray-800 px-2">
                <label className="md:hidden">Actions</label>
                <div className="flex gap-1">
                  <button className="rounded hover:bg-slate-800 p-1">
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
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </button>
                  <button className="rounded hover:bg-slate-800 p-1">
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
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </button>
                  <button className="rounded hover:bg-slate-800 p-1">
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
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="container mx-auto px-4">
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
