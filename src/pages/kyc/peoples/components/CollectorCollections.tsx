import CollectorCollectionsItem from "./CollectorCollectionsItem";

function CollectorCollections() {
  return (
    <div className="h-[calc((100vh/2)-66px)] overflow-auto border border-gray-800">
      <div className="flex flex-col h-full">
        <header className="text-center font-bold p-4 bg-gray-800/70 -b border-gray-800">
          Collector Collections
        </header>

        <div className="flex gap-2 flex-col mx-2 h-[calc((100vh/2)-180px)] overflow-auto">
          <CollectorCollectionsItem />
          <CollectorCollectionsItem />
          <CollectorCollectionsItem />
          <CollectorCollectionsItem />
          <CollectorCollectionsItem />
          <CollectorCollectionsItem />
          <CollectorCollectionsItem />
          <CollectorCollectionsItem />
          <div className="flex gap-2 items-center justify-start">
            <span>Jone Doe (50725)</span>
            <span>500.00 ৳</span>
            <div className="flex flex-wrap">
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                Collected
              </span>
            </div>
          </div>

          <div className="flex gap-2 items-center justify-start">
            <span>Jone Doe (50725)</span>
            <span>500.00 ৳</span>
            <div className="flex flex-wrap">
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                Approved
              </span>
            </div>
          </div>
        </div>

        <footer className="text-center font-bold p-4 bg-gray-800/70 border-b border-gray-800 mt-auto flex gap-2 justify-evenly">
          <div className="flex gap-2">
            <span>Total Collection</span>
            <span>500.00 ৳</span>
          </div>
          <div className="flex gap-2">
            <span>Pending Collection</span>
            <span>500.00 ৳</span>
          </div>

          <div className="flex gap-2">
            <span>Counter Balance</span>
            <span>500.00 ৳</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default CollectorCollections;
