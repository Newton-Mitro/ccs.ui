import CollectorCollectionsItem from "./CollectorCollectionsItem";

function CollectorCollections() {
  return (
    <div className="h-[calc((100vh/2)-66px)] overflow-auto border border-gray-800">
      <div className="flex flex-col h-full ">
        <header className="text-center font-bold p-4 bg-gray-800/70 -b border-gray-800">
          Collector Collections
        </header>

        <div className="flex gap-2 flex-col p-2 h-[calc((100vh/2)-170px)] overflow-auto">
          <CollectorCollectionsItem />

          <CollectorCollectionsItem />
          <CollectorCollectionsItem disabled={true} />
          <CollectorCollectionsItem />
          <CollectorCollectionsItem />
          <CollectorCollectionsItem />
          <CollectorCollectionsItem />
          <CollectorCollectionsItem />
        </div>

        <footer className="text-center font-bold p-3.5 bg-gray-800/70 border-b border-gray-800 mt-auto flex gap-2 justify-evenly">
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
