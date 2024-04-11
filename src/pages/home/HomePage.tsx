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
                  Head1
                </div>
              </th>
              <th className="cursor-pointer border-y border-gray-800 p-2 transition-colors hover:bg-blue-gray-50">
                <div
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none"
                >
                  Head2
                </div>
              </th>
              <th className="cursor-pointer border-y border-gray-800 p-2 transition-colors hover:bg-blue-gray-50">
                <div
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none"
                >
                  Head3
                </div>
              </th>
              <th className="cursor-pointer border-y border-gray-800 p-2 transition-colors hover:bg-blue-gray-50">
                <div
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none"
                >
                  Head4
                </div>
              </th>
              <th className="cursor-pointer border-y border-gray-800 p-2 transition-colors hover:bg-blue-gray-50">
                <div
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none"
                >
                  Head5
                </div>
              </th>
            </tr>
          </thead>

          <tbody className="flex-1 sm:flex-none">
            <tr className="flex w-full flex-col flex-wrap border-b border-gray-800 last:border-b-0 even:bg-blue-gray-600/5 md:table-row">
              <td className="border border-gray-800 px-2">
                <label className="md:hidden">Title</label>
                <p className="font-semibold md:font-normal"></p>
              </td>
              <td className="border border-gray-800 px-2">
                <label className="md:hidden">Slug</label>
                <p className="font-semibold md:font-normal"></p>
              </td>
              <td className="border border-gray-800 px-2">
                <label className="md:hidden">Order</label>
                <p className="font-semibold md:font-normal"></p>
              </td>

              <td className="border border-gray-800 px-2">
                <label className="md:hidden">Status</label>
                <span
                  className={`w-fit rounded-md  py-0.5 px-1  shadow`}
                ></span>
              </td>

              <td className="h-full border border-gray-800 px-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomePage;
