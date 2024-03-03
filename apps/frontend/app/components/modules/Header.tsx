import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full">
      <nav
        className={` bg-transparent hover:bg-white border-gray-200 px-4 lg:px-6 py-2.5  `}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* BRAND LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src={"/logos/Black logo - no background.png"}
              className="mr-3 h-6 sm:h-9"
              alt="Logo"
            />
          </Link>
          <div>
            <Link
              to="/dashboard"
              className="relative inline-flex items-center justify-center p-3 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group  bg-transparent
              border-2 border-green-500   focus:ring-4 focus:outline-none focus:ring-lime-200"
            >
              Login
            </Link>
            <Link
              to="/dashboard"
              className="relative inline-flex items-center justify-center p-3 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

{
  /* <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    Teal to Lime
  </span>
</button>; */
}
