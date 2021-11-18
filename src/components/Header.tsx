import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
interface Props {}

const Header = (props: Props) => {
  return (
    <div className="shadow-sm border-b bg-white ">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        <div className="flex items-center justify-center">
          Awal Mula Catalog
        </div>

        <div className="max-w-xs">
          <div className="mt-1 relative p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="bg-gray-50 block w-full rounded-md pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
