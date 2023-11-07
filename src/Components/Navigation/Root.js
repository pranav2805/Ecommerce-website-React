import { Outlet } from "react-router-dom";

import NavBarHeader from "./NavBarHeader";

function RootLayout() {
  return (
    <>
      <NavBarHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;
