import { Outlet } from "@remix-run/react";
import Header from "~/components/sections/Header";
import Footer from "~/components/sections/Footer";

export default function _layout() {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
