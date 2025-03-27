import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <div>
      <main className="flex-1 w-screen h-screen overflow-x-hidden overflow-y-auto text-gray-300 bg-background">
        <Outlet />
      </main>
    </div>
  );
}

export default PublicLayout;
