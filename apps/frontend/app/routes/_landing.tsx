import { Outlet } from "@remix-run/react";
import Header from "~/components/modules/Header";

export default function _layout() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}
