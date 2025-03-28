function CollectorCollectionsItem({ disabled }: any) {
  return (
    <div className="flex gap-6 items-center justify-start">
      <span>Jone Doe (50725)</span>
      <span>500.00 ৳</span>
      <div className="grid grid-cols-2 gap-2 items-center">
        <span className="bg-gray-700 text-gray-400 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
          Draft
        </span>

        <button
          disabled={disabled}
          className="bg-gray-800 disabled:bg-slate-600 hover:bg-gray-900 border border-gray-700 hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
        >
          <span className="md:block hidden">Collect Now</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 md:hidden block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CollectorCollectionsItem;
