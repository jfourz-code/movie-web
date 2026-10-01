import type { SearchingQuery } from "./SearchingQuery";

export type SearchOverlayProps = {
    isOpen: boolean;
    searchQuery: string;
    onClose: () => void;
    onSearchChange: (value: string) => void;
    result: SearchingQuery[];
}