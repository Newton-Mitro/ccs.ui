import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <div>
      <main className="flex-1 overflow-x-hidden overflow-y-auto h-screen w-screen bg-slate-900 text-gray-300">
        <Outlet />
      </main>
    </div>
  );
}

export default PublicLayout;
