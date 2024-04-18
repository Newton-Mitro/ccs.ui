function TableRow() {
  return (
    <tr className="flex w-full flex-col flex-wrap border-b border-gray-800 last:border-b-0 even:bg-slate-800/50 md:table-row">
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
        <p className="font-semibold md:font-normal">john.doe@email.com</p>
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
        <label className="md:hidden">Status</label>

        <div className="flex flex-wrap">
          <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            Dark
          </span>
          <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
            Red
          </span>
          <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
            Green
          </span>
          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
            Yellow
          </span>
          <div className="flex gap-2 items-center">
            <label className="relative inline-flex cursor-pointer items-center">
              <input id="switch-2" type="checkbox" className="peer sr-only" />
              <div className="peer h-4 w-11 rounded-full border border-gray-700 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-full after:border after:border-gray-600 after:bg-sky-600 after:transition-all after:content-[''] peer-checked:bg-sky-800 peer-checked:after:translate-x-full peer-focus:ring-green-950"></div>
            </label>
            <span>Active</span>
          </div>
        </div>
      </td>
      <td className="border border-gray-800 px-2">
        <label className="md:hidden">Actions</label>
        <div className="flex gap-1">
          <button className="rounded hover:bg-slate-800 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>
          <button className="rounded hover:bg-slate-800 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>
          <button className="rounded hover:bg-slate-800 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
