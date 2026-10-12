import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SearchIcon, X } from "lucide-react";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import type { SearchOverlayProps } from "@/types/SearchOverlayProps";
import { Link, useNavigate } from "react-router";
import { useEffect } from "react";

const SearchOverlay = ({
  isOpen,
  searchQuery,
  onClose,
  onSearchChange,
  result,
  isClose,
  setSearchQuery
}: SearchOverlayProps) => {

  const navigate = useNavigate();

  // make while search overlay open , the back set fixed (start)
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    }
  }, [isOpen])

  if (!isOpen) return null;
  // (end)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-20 bg-background/10 backdrop-blur-sm md:hidden"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-[90%] md:hidden"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 z-10">
                <InputGroup className="flex-1 bg-[#434652]">
                  <InputGroupInput
                    autoFocus
                    autoComplete="off"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && searchQuery.trim() !== "") {
                        navigate(`/search?query=${searchQuery}`)
                        isClose()
                        setSearchQuery()
                      } else if (e.key === "Enter" && searchQuery.trim() === "") {
                        e.preventDefault();
                      }
                    }}
                  />
                  <InputGroupAddon align="inline-start">
                    <SearchIcon />
                  </InputGroupAddon>
                </InputGroup>
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="size-5" />
                </Button>
              </div>

              {result.length !== 0 && 
              <div className="flex flex-col gap-3 w-full p-4 bg-[#434652] max-h-70 overflow-y-auto rounded-md scrollbar-thin scroll-smooth">
                  {result.slice(0, 10).map((result) => (
                  <Link to={`/discover/${result.media_type}/${result.id}`}>
                      <div className="flex gap-3 items-center"> 
                        <img src={`https://image.tmdb.org/t/p/original/${result.poster_path}`} className="object-cover w-12 aspect-2/3"  alt="" />
                        <div className="flex flex-col">
                          <h1 className="font-medium">{result.original_name || result.original_title}</h1>
                          <h3 className="text-sm font-light capitalize">{result.media_type}</h3>
                        </div>
                    </div>
                  </Link>
                ))}
              </div> }
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
