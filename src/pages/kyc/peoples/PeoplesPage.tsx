import { useState } from "react";
import CollectionEntry from "./components/CollectionEntry";
import CollectorCollections from "./components/CollectorCollections";
import SearchCollectionLedgers from "./components/SearchCollectionLedgers";

function PeoplesPage() {
  const [isAdvanceSearchOpen, setAdvanceSearchOpen] = useState(false);

  const toggleAdvanceSearchOption = () => {
    setAdvanceSearchOpen(!isAdvanceSearchOpen);
  };

  return (
    <div className="w-full space-y-2">
      <h2 className="text-xl">Collections</h2>
      <div className="h-[calc(100vh-122px)] bg-zinc-950 grid grid-cols-1 lg:grid-cols-2 gap-2 overflow-auto">
        <div className="h-[calc(100vh-122px)] overflow-auto border border-gray-800">
          <CollectionEntry />
        </div>
        <div className="flex flex-col gap-2">
          <SearchCollectionLedgers
            toggleAdvanceSearchOption={toggleAdvanceSearchOption}
            isAdvanceSearchOpen={isAdvanceSearchOpen}
          />
          <CollectorCollections />
        </div>
      </div>
    </div>
  );
}

export default PeoplesPage;
