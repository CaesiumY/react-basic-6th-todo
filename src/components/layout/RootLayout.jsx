import { Outlet } from "react-router-dom";

// Compositional Layout - Apple
const RootLayout = () => {
  return (
    <main className="bg-[#f7f6f9] min-h-screen">
      <div className="max-w-3xl mx-auto p-5">
        <Outlet />
      </div>
    </main>
  );
};

export default RootLayout;
