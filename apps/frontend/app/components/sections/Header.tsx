import { Link } from "@remix-run/react";
import useScrollBackground from "~/utils/useScrollBackground";

import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/remix";

export default function Header() {
  const showBackground = useScrollBackground();

  return (
    <header
      className={`transition-colors ease-in-out delay-250  fixed top-0 w-full ${showBackground ? "bg-white" : "bg-transparent"}  `}
    >
      <nav className="navbar  max-w-screen-xl mx-auto">
        <div className="flex-1 ">
          <Link to="/" className="flex items-center">
            <img
              src={"/logos/Black logo - no background.png"}
              className="mr-3 h-6 sm:h-9"
              alt="Logo"
            />
          </Link>
        </div>

        <div className="flex-none gap-4">
          <SignedOut>
            <SignInButton>
              <button className="btn">Login</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedIn>
            <Link
              to="/dashboard"
              className={`btn bg-green-500  text-black border-none hidden md:flex`}
            >
              Dashboard
            </Link>
          </SignedIn>

          <button className="btn btn-square btn-ghost text-black md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
