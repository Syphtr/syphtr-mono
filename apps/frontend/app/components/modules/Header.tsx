import React, { useState } from 'react';
import { Link } from "@remix-run/react";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const [costsOpen, setCostsOpen] = useState(false);

  return (
    <header onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <nav className={`bg-green-500 hover:bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-green-500 ${isHovered ? 'text-green-500' : 'text-white'}`}>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" className="flex items-center">
            <img
              src={isHovered ? "/logos/Black logo - no background.png" : "/logos/White logo - no background.png"}
              className="mr-3 h-6 sm:h-9"
              alt="Logo"
            />
          </a>
          <div className="flex items-center lg:order-2">
            <div className="relative">
              <button onClick={() => setUseCasesOpen(!useCasesOpen)} className={`font-bold text-sm mr-2 focus:outline-none ${isHovered ? 'text-green-500' : 'text-white'}`}>
                Use cases
                <svg className="w-4 h-4 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {useCasesOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  )}
                </svg>
              </button>
              {useCasesOpen && (
                <div className="absolute top-full left-0 mt-2 w-40 border border-white bg-green-500 text-white font-bold shadow-lg" onMouseLeave={() => setUseCasesOpen(false)}>
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-white hover:text-green-500" role="menuitem">In-house recruitment teams</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-white hover:text-green-500" role="menuitem">Agencies</a>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => setCostsOpen(!costsOpen)} className={`font-bold text-sm mr-2 focus:outline-none ${isHovered ? 'text-green-500' : 'text-white'}`}>
                Example of costs
                <svg className="w-4 h-4 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {costsOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  )}
                </svg>
              </button>
              {costsOpen && (
                <div className="absolute top-full left-0 mt-2 w-40 border border-white bg-green-500 text-white font-bold shadow-lg" onMouseLeave={() => setCostsOpen(false)}>
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-white hover:text-green-500" role="menuitem">Talent Pipelines</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-white hover:text-green-500" role="menuitem">Full Recruiting Services</a>
                  </div>
                </div>
              )}
            </div>
            <a
              href="/"
              className="bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 font-bold"
            >
              Log in
            </a>
            <Link
              to="/dashboard"
              className="bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 font-bold"
            >
              Dashboard
            </Link>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
