import { Link } from "react-router-dom";

function PaginateRow() {
  return (
    <div className="mt-auto flex justify-between items-center">
      <div className="flex items-center gap-2">
        <select
          className="py-0.5 bg-transparent border border-gray-800 shadow-sm focus:border-gray-700 focus:ring focus:ring-gray-700 focus:ring-opacity-50"
          name=""
          id=""
        >
          <option className="odd:bg-gray-800 even:bg-gray-900" value="">
            10
          </option>
          <option className="odd:bg-gray-800 even:bg-gray-900" value="">
            50
          </option>
          <option className="odd:bg-gray-800 even:bg-gray-900" value="">
            100
          </option>
          <option className="odd:bg-gray-800 even:bg-gray-900" value="">
            500
          </option>
          <option className="odd:bg-gray-800 even:bg-gray-900" value="">
            1000
          </option>
        </select>
        <div className="">showing 1 to 10 out of 100</div>
      </div>
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
  );
}

export default PaginateRow;
