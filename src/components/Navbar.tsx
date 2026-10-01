import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { Menu } from "lucide-react";
import { NavLink, Link } from "react-router";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { useState } from "react";
import SearchOverlay from "./SearchOverlay";
import { useFetchQuery } from "@/hooks/useFetchQuery";
import type { SearchingQuery } from "@/types/SearchingQuery";

// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  // const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const { result } =  useFetchQuery(searchQuery);
  
  return (
    <>
      {/* // mobile navbar */}
      <nav className="flex justify-between items-center p-5 bg-background shadow-md md:hidden">
        <div id="title">
          <h1 className="text-lg font-bold">
            Cine<span className="text-click">Scope</span>
          </h1>
        </div>
        <div id="navbar">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-hover"
            onClick={() => setIsSearchOpen(true)}
          >
            <SearchIcon className="size-5" />
          </Button>

          {/* <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" />}>
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent className="bg-[#2C303B]">
              <SheetHeader>
                <SheetTitle className="text-white font-bold text-xl">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 p-3 text-md text-white font-semibold">
                <NavLink
                  to="/discover"
                  className={({ isActive }) =>
                    isActive ? "p-3 bg-hover" : "p-3 hover:bg-hover"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Discover
                </NavLink>
                <NavLink
                  to="/search"
                  className={({ isActive }) =>
                    isActive ? "p-3 bg-hover" : "p-3 hover:bg-hover"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Search
                </NavLink>
                <NavLink
                  to="/watchlist"
                  className={({ isActive }) =>
                    isActive ? "p-3 bg-hover" : "p-3 hover:bg-hover"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  WatchList
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet> */}
        </div>
      </nav>

      {/* overlay search mobile */}
      <SearchOverlay
        isOpen={isSearchOpen}
        searchQuery={searchQuery}
        onClose={() => {
          setIsSearchOpen(false);
          setSearchQuery("");
        }}
        onSearchChange={setSearchQuery}
        result={result}
      />

      {/* desktop navbar */}
      <nav className="hidden md:flex justify-between items-center p-5 shadow-md bg-background">
        <div id="title">
          <h1 className="text-xl font-bold">
            Cine<span className="text-click">Scope</span>
          </h1>
        </div>

        {/* <div id="navlink" className="flex gap-5 cursor-pointer">
          <NavLink
            to="/discover"
            className={({ isActive }) =>
              isActive
                ? "text-click text-sm hover:text-click "
                : "text-foreground text-sm hover:text-click"
            }
          >
            Discover
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive
                ? "text-click text-sm hover:text-click"
                : "text-foreground text-sm hover:text-click"
            }
          >
            Search
          </NavLink>
          <NavLink
            to="/watchlist"
            className={({ isActive }) =>
              isActive
                ? "text-click text-sm hover:text-click"
                : "text-foreground  text-sm hover:text-click"
            }
          >
            WatchList
          </NavLink>
        </div> */}
        <div id="search" className="flex flex-col gap-3">
            <InputGroup className="bg-[#434652] relative">
            <InputGroupInput
              placeholder="Search..."
              className=""
              autoComplete="off"
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            ></InputGroupInput>
            <InputGroupAddon align="inline-start">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>

            {result.length !== 0 && 
            <div className="absolute z-100 w-64 bg-gray-700 mt-16 rounded-sm shadow-2xl p-5 max-h-100 overflow-auto">
              <div className="flex flex-col gap-5">
                  {result.slice(0,10).map((result: SearchingQuery) => (
                  <Link to={`/discover/${result.media_type}/${result.id}`}>
                    <div className="flex gap-3 items-center"> 
                    <img src={`https://image.tmdb.org/t/p/original/${result.poster_path}`} className="object-cover w-12"  alt="" />
                    <div className="flex flex-col">
                        <h1 className="font-medium">{result.original_name || result.original_title}</h1>
                        <h3 className="text-sm font-light">{result.media_type}</h3>
                    </div>
                  </div>
                  </Link>
                ))}
              </div>
            </div>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
