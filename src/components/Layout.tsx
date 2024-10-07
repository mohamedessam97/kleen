import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Renders the matched child route */}
      </main>
    </>
  );
}
