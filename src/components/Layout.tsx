import { Outlet } from "react-router-dom";
import Menu from "./Menu/Menu";

export default function Layout() {
  return (
    <>
      <div className="relative">
        <Menu />
      </div>
      <div className="relative h-screen max-w-[1700px] mx-auto">
        <Outlet />
      </div>
    </>
  );
}
